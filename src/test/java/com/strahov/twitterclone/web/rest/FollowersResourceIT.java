package com.strahov.twitterclone.web.rest;

import static com.strahov.twitterclone.domain.FollowersAsserts.*;
import static com.strahov.twitterclone.web.rest.TestUtil.createUpdateProxyForBean;
import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.strahov.twitterclone.IntegrationTest;
import com.strahov.twitterclone.domain.Followers;
import com.strahov.twitterclone.repository.FollowersRepository;
import jakarta.persistence.EntityManager;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Random;
import java.util.concurrent.atomic.AtomicLong;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;

/**
 * Integration tests for the {@link FollowersResource} REST controller.
 */
@IntegrationTest
@AutoConfigureMockMvc
@WithMockUser
class FollowersResourceIT {

    private static final Instant DEFAULT_SINCE = Instant.ofEpochMilli(0L);
    private static final Instant UPDATED_SINCE = Instant.now().truncatedTo(ChronoUnit.MILLIS);

    private static final String ENTITY_API_URL = "/api/followers";
    private static final String ENTITY_API_URL_ID = ENTITY_API_URL + "/{id}";

    private static Random random = new Random();
    private static AtomicLong longCount = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    @Autowired
    private ObjectMapper om;

    @Autowired
    private FollowersRepository followersRepository;

    @Autowired
    private EntityManager em;

    @Autowired
    private MockMvc restFollowersMockMvc;

    private Followers followers;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Followers createEntity(EntityManager em) {
        Followers followers = new Followers().since(DEFAULT_SINCE);
        return followers;
    }

    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Followers createUpdatedEntity(EntityManager em) {
        Followers followers = new Followers().since(UPDATED_SINCE);
        return followers;
    }

    @BeforeEach
    public void initTest() {
        followers = createEntity(em);
    }

    @Test
    @Transactional
    void createFollowers() throws Exception {
        long databaseSizeBeforeCreate = getRepositoryCount();
        // Create the Followers
        var returnedFollowers = om.readValue(
            restFollowersMockMvc
                .perform(post(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(followers)))
                .andExpect(status().isCreated())
                .andReturn()
                .getResponse()
                .getContentAsString(),
            Followers.class
        );

        // Validate the Followers in the database
        assertIncrementedRepositoryCount(databaseSizeBeforeCreate);
        assertFollowersUpdatableFieldsEquals(returnedFollowers, getPersistedFollowers(returnedFollowers));
    }

    @Test
    @Transactional
    void createFollowersWithExistingId() throws Exception {
        // Create the Followers with an existing ID
        followers.setId(1L);

        long databaseSizeBeforeCreate = getRepositoryCount();

        // An entity with an existing ID cannot be created, so this API call must fail
        restFollowersMockMvc
            .perform(post(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(followers)))
            .andExpect(status().isBadRequest());

        // Validate the Followers in the database
        assertSameRepositoryCount(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    void getAllFollowers() throws Exception {
        // Initialize the database
        followersRepository.saveAndFlush(followers);

        // Get all the followersList
        restFollowersMockMvc
            .perform(get(ENTITY_API_URL + "?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(followers.getId().intValue())))
            .andExpect(jsonPath("$.[*].since").value(hasItem(DEFAULT_SINCE.toString())));
    }

    @Test
    @Transactional
    void getFollowers() throws Exception {
        // Initialize the database
        followersRepository.saveAndFlush(followers);

        // Get the followers
        restFollowersMockMvc
            .perform(get(ENTITY_API_URL_ID, followers.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.id").value(followers.getId().intValue()))
            .andExpect(jsonPath("$.since").value(DEFAULT_SINCE.toString()));
    }

    @Test
    @Transactional
    void getNonExistingFollowers() throws Exception {
        // Get the followers
        restFollowersMockMvc.perform(get(ENTITY_API_URL_ID, Long.MAX_VALUE)).andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    void putExistingFollowers() throws Exception {
        // Initialize the database
        followersRepository.saveAndFlush(followers);

        long databaseSizeBeforeUpdate = getRepositoryCount();

        // Update the followers
        Followers updatedFollowers = followersRepository.findById(followers.getId()).orElseThrow();
        // Disconnect from session so that the updates on updatedFollowers are not directly saved in db
        em.detach(updatedFollowers);
        updatedFollowers.since(UPDATED_SINCE);

        restFollowersMockMvc
            .perform(
                put(ENTITY_API_URL_ID, updatedFollowers.getId())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(om.writeValueAsBytes(updatedFollowers))
            )
            .andExpect(status().isOk());

        // Validate the Followers in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        assertPersistedFollowersToMatchAllProperties(updatedFollowers);
    }

    @Test
    @Transactional
    void putNonExistingFollowers() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        followers.setId(longCount.incrementAndGet());

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restFollowersMockMvc
            .perform(
                put(ENTITY_API_URL_ID, followers.getId()).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(followers))
            )
            .andExpect(status().isBadRequest());

        // Validate the Followers in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void putWithIdMismatchFollowers() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        followers.setId(longCount.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restFollowersMockMvc
            .perform(
                put(ENTITY_API_URL_ID, longCount.incrementAndGet())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(om.writeValueAsBytes(followers))
            )
            .andExpect(status().isBadRequest());

        // Validate the Followers in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void putWithMissingIdPathParamFollowers() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        followers.setId(longCount.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restFollowersMockMvc
            .perform(put(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(followers)))
            .andExpect(status().isMethodNotAllowed());

        // Validate the Followers in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void partialUpdateFollowersWithPatch() throws Exception {
        // Initialize the database
        followersRepository.saveAndFlush(followers);

        long databaseSizeBeforeUpdate = getRepositoryCount();

        // Update the followers using partial update
        Followers partialUpdatedFollowers = new Followers();
        partialUpdatedFollowers.setId(followers.getId());

        restFollowersMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, partialUpdatedFollowers.getId())
                    .contentType("application/merge-patch+json")
                    .content(om.writeValueAsBytes(partialUpdatedFollowers))
            )
            .andExpect(status().isOk());

        // Validate the Followers in the database

        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        assertFollowersUpdatableFieldsEquals(
            createUpdateProxyForBean(partialUpdatedFollowers, followers),
            getPersistedFollowers(followers)
        );
    }

    @Test
    @Transactional
    void fullUpdateFollowersWithPatch() throws Exception {
        // Initialize the database
        followersRepository.saveAndFlush(followers);

        long databaseSizeBeforeUpdate = getRepositoryCount();

        // Update the followers using partial update
        Followers partialUpdatedFollowers = new Followers();
        partialUpdatedFollowers.setId(followers.getId());

        partialUpdatedFollowers.since(UPDATED_SINCE);

        restFollowersMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, partialUpdatedFollowers.getId())
                    .contentType("application/merge-patch+json")
                    .content(om.writeValueAsBytes(partialUpdatedFollowers))
            )
            .andExpect(status().isOk());

        // Validate the Followers in the database

        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        assertFollowersUpdatableFieldsEquals(partialUpdatedFollowers, getPersistedFollowers(partialUpdatedFollowers));
    }

    @Test
    @Transactional
    void patchNonExistingFollowers() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        followers.setId(longCount.incrementAndGet());

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restFollowersMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, followers.getId())
                    .contentType("application/merge-patch+json")
                    .content(om.writeValueAsBytes(followers))
            )
            .andExpect(status().isBadRequest());

        // Validate the Followers in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void patchWithIdMismatchFollowers() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        followers.setId(longCount.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restFollowersMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, longCount.incrementAndGet())
                    .contentType("application/merge-patch+json")
                    .content(om.writeValueAsBytes(followers))
            )
            .andExpect(status().isBadRequest());

        // Validate the Followers in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void patchWithMissingIdPathParamFollowers() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        followers.setId(longCount.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restFollowersMockMvc
            .perform(patch(ENTITY_API_URL).contentType("application/merge-patch+json").content(om.writeValueAsBytes(followers)))
            .andExpect(status().isMethodNotAllowed());

        // Validate the Followers in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void deleteFollowers() throws Exception {
        // Initialize the database
        followersRepository.saveAndFlush(followers);

        long databaseSizeBeforeDelete = getRepositoryCount();

        // Delete the followers
        restFollowersMockMvc
            .perform(delete(ENTITY_API_URL_ID, followers.getId()).accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        assertDecrementedRepositoryCount(databaseSizeBeforeDelete);
    }

    protected long getRepositoryCount() {
        return followersRepository.count();
    }

    protected void assertIncrementedRepositoryCount(long countBefore) {
        assertThat(countBefore + 1).isEqualTo(getRepositoryCount());
    }

    protected void assertDecrementedRepositoryCount(long countBefore) {
        assertThat(countBefore - 1).isEqualTo(getRepositoryCount());
    }

    protected void assertSameRepositoryCount(long countBefore) {
        assertThat(countBefore).isEqualTo(getRepositoryCount());
    }

    protected Followers getPersistedFollowers(Followers followers) {
        return followersRepository.findById(followers.getId()).orElseThrow();
    }

    protected void assertPersistedFollowersToMatchAllProperties(Followers expectedFollowers) {
        assertFollowersAllPropertiesEquals(expectedFollowers, getPersistedFollowers(expectedFollowers));
    }

    protected void assertPersistedFollowersToMatchUpdatableProperties(Followers expectedFollowers) {
        assertFollowersAllUpdatablePropertiesEquals(expectedFollowers, getPersistedFollowers(expectedFollowers));
    }
}
