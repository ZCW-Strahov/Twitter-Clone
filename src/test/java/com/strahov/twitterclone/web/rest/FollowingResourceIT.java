package com.strahov.twitterclone.web.rest;

import static com.strahov.twitterclone.domain.FollowingAsserts.*;
import static com.strahov.twitterclone.web.rest.TestUtil.createUpdateProxyForBean;
import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.strahov.twitterclone.IntegrationTest;
import com.strahov.twitterclone.domain.Following;
import com.strahov.twitterclone.repository.FollowingRepository;
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
 * Integration tests for the {@link FollowingResource} REST controller.
 */
@IntegrationTest
@AutoConfigureMockMvc
@WithMockUser
class FollowingResourceIT {

    private static final Instant DEFAULT_SINCE = Instant.ofEpochMilli(0L);
    private static final Instant UPDATED_SINCE = Instant.now().truncatedTo(ChronoUnit.MILLIS);

    private static final String ENTITY_API_URL = "/api/followings";
    private static final String ENTITY_API_URL_ID = ENTITY_API_URL + "/{id}";

    private static Random random = new Random();
    private static AtomicLong longCount = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    @Autowired
    private ObjectMapper om;

    @Autowired
    private FollowingRepository followingRepository;

    @Autowired
    private EntityManager em;

    @Autowired
    private MockMvc restFollowingMockMvc;

    private Following following;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Following createEntity(EntityManager em) {
        Following following = new Following().since(DEFAULT_SINCE);
        return following;
    }

    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Following createUpdatedEntity(EntityManager em) {
        Following following = new Following().since(UPDATED_SINCE);
        return following;
    }

    @BeforeEach
    public void initTest() {
        following = createEntity(em);
    }

    @Test
    @Transactional
    void createFollowing() throws Exception {
        long databaseSizeBeforeCreate = getRepositoryCount();
        // Create the Following
        var returnedFollowing = om.readValue(
            restFollowingMockMvc
                .perform(post(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(following)))
                .andExpect(status().isCreated())
                .andReturn()
                .getResponse()
                .getContentAsString(),
            Following.class
        );

        // Validate the Following in the database
        assertIncrementedRepositoryCount(databaseSizeBeforeCreate);
        assertFollowingUpdatableFieldsEquals(returnedFollowing, getPersistedFollowing(returnedFollowing));
    }

    @Test
    @Transactional
    void createFollowingWithExistingId() throws Exception {
        // Create the Following with an existing ID
        following.setId(1L);

        long databaseSizeBeforeCreate = getRepositoryCount();

        // An entity with an existing ID cannot be created, so this API call must fail
        restFollowingMockMvc
            .perform(post(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(following)))
            .andExpect(status().isBadRequest());

        // Validate the Following in the database
        assertSameRepositoryCount(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    void getAllFollowings() throws Exception {
        // Initialize the database
        followingRepository.saveAndFlush(following);

        // Get all the followingList
        restFollowingMockMvc
            .perform(get(ENTITY_API_URL + "?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(following.getId().intValue())))
            .andExpect(jsonPath("$.[*].since").value(hasItem(DEFAULT_SINCE.toString())));
    }

    @Test
    @Transactional
    void getFollowing() throws Exception {
        // Initialize the database
        followingRepository.saveAndFlush(following);

        // Get the following
        restFollowingMockMvc
            .perform(get(ENTITY_API_URL_ID, following.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.id").value(following.getId().intValue()))
            .andExpect(jsonPath("$.since").value(DEFAULT_SINCE.toString()));
    }

    @Test
    @Transactional
    void getNonExistingFollowing() throws Exception {
        // Get the following
        restFollowingMockMvc.perform(get(ENTITY_API_URL_ID, Long.MAX_VALUE)).andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    void putExistingFollowing() throws Exception {
        // Initialize the database
        followingRepository.saveAndFlush(following);

        long databaseSizeBeforeUpdate = getRepositoryCount();

        // Update the following
        Following updatedFollowing = followingRepository.findById(following.getId()).orElseThrow();
        // Disconnect from session so that the updates on updatedFollowing are not directly saved in db
        em.detach(updatedFollowing);
        updatedFollowing.since(UPDATED_SINCE);

        restFollowingMockMvc
            .perform(
                put(ENTITY_API_URL_ID, updatedFollowing.getId())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(om.writeValueAsBytes(updatedFollowing))
            )
            .andExpect(status().isOk());

        // Validate the Following in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        assertPersistedFollowingToMatchAllProperties(updatedFollowing);
    }

    @Test
    @Transactional
    void putNonExistingFollowing() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        following.setId(longCount.incrementAndGet());

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restFollowingMockMvc
            .perform(
                put(ENTITY_API_URL_ID, following.getId()).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(following))
            )
            .andExpect(status().isBadRequest());

        // Validate the Following in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void putWithIdMismatchFollowing() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        following.setId(longCount.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restFollowingMockMvc
            .perform(
                put(ENTITY_API_URL_ID, longCount.incrementAndGet())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(om.writeValueAsBytes(following))
            )
            .andExpect(status().isBadRequest());

        // Validate the Following in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void putWithMissingIdPathParamFollowing() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        following.setId(longCount.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restFollowingMockMvc
            .perform(put(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(following)))
            .andExpect(status().isMethodNotAllowed());

        // Validate the Following in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void partialUpdateFollowingWithPatch() throws Exception {
        // Initialize the database
        followingRepository.saveAndFlush(following);

        long databaseSizeBeforeUpdate = getRepositoryCount();

        // Update the following using partial update
        Following partialUpdatedFollowing = new Following();
        partialUpdatedFollowing.setId(following.getId());

        restFollowingMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, partialUpdatedFollowing.getId())
                    .contentType("application/merge-patch+json")
                    .content(om.writeValueAsBytes(partialUpdatedFollowing))
            )
            .andExpect(status().isOk());

        // Validate the Following in the database

        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        assertFollowingUpdatableFieldsEquals(
            createUpdateProxyForBean(partialUpdatedFollowing, following),
            getPersistedFollowing(following)
        );
    }

    @Test
    @Transactional
    void fullUpdateFollowingWithPatch() throws Exception {
        // Initialize the database
        followingRepository.saveAndFlush(following);

        long databaseSizeBeforeUpdate = getRepositoryCount();

        // Update the following using partial update
        Following partialUpdatedFollowing = new Following();
        partialUpdatedFollowing.setId(following.getId());

        partialUpdatedFollowing.since(UPDATED_SINCE);

        restFollowingMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, partialUpdatedFollowing.getId())
                    .contentType("application/merge-patch+json")
                    .content(om.writeValueAsBytes(partialUpdatedFollowing))
            )
            .andExpect(status().isOk());

        // Validate the Following in the database

        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        assertFollowingUpdatableFieldsEquals(partialUpdatedFollowing, getPersistedFollowing(partialUpdatedFollowing));
    }

    @Test
    @Transactional
    void patchNonExistingFollowing() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        following.setId(longCount.incrementAndGet());

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restFollowingMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, following.getId())
                    .contentType("application/merge-patch+json")
                    .content(om.writeValueAsBytes(following))
            )
            .andExpect(status().isBadRequest());

        // Validate the Following in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void patchWithIdMismatchFollowing() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        following.setId(longCount.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restFollowingMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, longCount.incrementAndGet())
                    .contentType("application/merge-patch+json")
                    .content(om.writeValueAsBytes(following))
            )
            .andExpect(status().isBadRequest());

        // Validate the Following in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void patchWithMissingIdPathParamFollowing() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        following.setId(longCount.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restFollowingMockMvc
            .perform(patch(ENTITY_API_URL).contentType("application/merge-patch+json").content(om.writeValueAsBytes(following)))
            .andExpect(status().isMethodNotAllowed());

        // Validate the Following in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void deleteFollowing() throws Exception {
        // Initialize the database
        followingRepository.saveAndFlush(following);

        long databaseSizeBeforeDelete = getRepositoryCount();

        // Delete the following
        restFollowingMockMvc
            .perform(delete(ENTITY_API_URL_ID, following.getId()).accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        assertDecrementedRepositoryCount(databaseSizeBeforeDelete);
    }

    protected long getRepositoryCount() {
        return followingRepository.count();
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

    protected Following getPersistedFollowing(Following following) {
        return followingRepository.findById(following.getId()).orElseThrow();
    }

    protected void assertPersistedFollowingToMatchAllProperties(Following expectedFollowing) {
        assertFollowingAllPropertiesEquals(expectedFollowing, getPersistedFollowing(expectedFollowing));
    }

    protected void assertPersistedFollowingToMatchUpdatableProperties(Following expectedFollowing) {
        assertFollowingAllUpdatablePropertiesEquals(expectedFollowing, getPersistedFollowing(expectedFollowing));
    }
}
