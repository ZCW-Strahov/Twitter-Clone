package com.strahov.twitterclone.web.rest;

import static com.strahov.twitterclone.domain.HashTagAsserts.*;
import static com.strahov.twitterclone.web.rest.TestUtil.createUpdateProxyForBean;
import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.strahov.twitterclone.IntegrationTest;
import com.strahov.twitterclone.domain.HashTag;
import com.strahov.twitterclone.repository.HashTagRepository;
import jakarta.persistence.EntityManager;
import java.util.ArrayList;
import java.util.Random;
import java.util.concurrent.atomic.AtomicLong;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;

/**
 * Integration tests for the {@link HashTagResource} REST controller.
 */
@IntegrationTest
@ExtendWith(MockitoExtension.class)
@AutoConfigureMockMvc
@WithMockUser
class HashTagResourceIT {

    private static final String DEFAULT_DESCRIPTION = "AAAAAAAAAA";
    private static final String UPDATED_DESCRIPTION = "BBBBBBBBBB";

    private static final String ENTITY_API_URL = "/api/hash-tags";
    private static final String ENTITY_API_URL_ID = ENTITY_API_URL + "/{id}";

    private static Random random = new Random();
    private static AtomicLong longCount = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    @Autowired
    private ObjectMapper om;

    @Autowired
    private HashTagRepository hashTagRepository;

    @Mock
    private HashTagRepository hashTagRepositoryMock;

    @Autowired
    private EntityManager em;

    @Autowired
    private MockMvc restHashTagMockMvc;

    private HashTag hashTag;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static HashTag createEntity(EntityManager em) {
        HashTag hashTag = new HashTag().description(DEFAULT_DESCRIPTION);
        return hashTag;
    }

    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static HashTag createUpdatedEntity(EntityManager em) {
        HashTag hashTag = new HashTag().description(UPDATED_DESCRIPTION);
        return hashTag;
    }

    @BeforeEach
    public void initTest() {
        hashTag = createEntity(em);
    }

    @Test
    @Transactional
    void createHashTag() throws Exception {
        long databaseSizeBeforeCreate = getRepositoryCount();
        // Create the HashTag
        var returnedHashTag = om.readValue(
            restHashTagMockMvc
                .perform(post(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(hashTag)))
                .andExpect(status().isCreated())
                .andReturn()
                .getResponse()
                .getContentAsString(),
            HashTag.class
        );

        // Validate the HashTag in the database
        assertIncrementedRepositoryCount(databaseSizeBeforeCreate);
        assertHashTagUpdatableFieldsEquals(returnedHashTag, getPersistedHashTag(returnedHashTag));
    }

    @Test
    @Transactional
    void createHashTagWithExistingId() throws Exception {
        // Create the HashTag with an existing ID
        hashTag.setId(1L);

        long databaseSizeBeforeCreate = getRepositoryCount();

        // An entity with an existing ID cannot be created, so this API call must fail
        restHashTagMockMvc
            .perform(post(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(hashTag)))
            .andExpect(status().isBadRequest());

        // Validate the HashTag in the database
        assertSameRepositoryCount(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    void getAllHashTags() throws Exception {
        // Initialize the database
        hashTagRepository.saveAndFlush(hashTag);

        // Get all the hashTagList
        restHashTagMockMvc
            .perform(get(ENTITY_API_URL + "?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(hashTag.getId().intValue())))
            .andExpect(jsonPath("$.[*].description").value(hasItem(DEFAULT_DESCRIPTION)));
    }

    @SuppressWarnings({ "unchecked" })
    void getAllHashTagsWithEagerRelationshipsIsEnabled() throws Exception {
        when(hashTagRepositoryMock.findAllWithEagerRelationships(any())).thenReturn(new PageImpl(new ArrayList<>()));

        restHashTagMockMvc.perform(get(ENTITY_API_URL + "?eagerload=true")).andExpect(status().isOk());

        verify(hashTagRepositoryMock, times(1)).findAllWithEagerRelationships(any());
    }

    @SuppressWarnings({ "unchecked" })
    void getAllHashTagsWithEagerRelationshipsIsNotEnabled() throws Exception {
        when(hashTagRepositoryMock.findAllWithEagerRelationships(any())).thenReturn(new PageImpl(new ArrayList<>()));

        restHashTagMockMvc.perform(get(ENTITY_API_URL + "?eagerload=false")).andExpect(status().isOk());
        verify(hashTagRepositoryMock, times(1)).findAll(any(Pageable.class));
    }

    @Test
    @Transactional
    void getHashTag() throws Exception {
        // Initialize the database
        hashTagRepository.saveAndFlush(hashTag);

        // Get the hashTag
        restHashTagMockMvc
            .perform(get(ENTITY_API_URL_ID, hashTag.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.id").value(hashTag.getId().intValue()))
            .andExpect(jsonPath("$.description").value(DEFAULT_DESCRIPTION));
    }

    @Test
    @Transactional
    void getNonExistingHashTag() throws Exception {
        // Get the hashTag
        restHashTagMockMvc.perform(get(ENTITY_API_URL_ID, Long.MAX_VALUE)).andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    void putExistingHashTag() throws Exception {
        // Initialize the database
        hashTagRepository.saveAndFlush(hashTag);

        long databaseSizeBeforeUpdate = getRepositoryCount();

        // Update the hashTag
        HashTag updatedHashTag = hashTagRepository.findById(hashTag.getId()).orElseThrow();
        // Disconnect from session so that the updates on updatedHashTag are not directly saved in db
        em.detach(updatedHashTag);
        updatedHashTag.description(UPDATED_DESCRIPTION);

        restHashTagMockMvc
            .perform(
                put(ENTITY_API_URL_ID, updatedHashTag.getId())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(om.writeValueAsBytes(updatedHashTag))
            )
            .andExpect(status().isOk());

        // Validate the HashTag in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        assertPersistedHashTagToMatchAllProperties(updatedHashTag);
    }

    @Test
    @Transactional
    void putNonExistingHashTag() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        hashTag.setId(longCount.incrementAndGet());

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restHashTagMockMvc
            .perform(put(ENTITY_API_URL_ID, hashTag.getId()).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(hashTag)))
            .andExpect(status().isBadRequest());

        // Validate the HashTag in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void putWithIdMismatchHashTag() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        hashTag.setId(longCount.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restHashTagMockMvc
            .perform(
                put(ENTITY_API_URL_ID, longCount.incrementAndGet())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(om.writeValueAsBytes(hashTag))
            )
            .andExpect(status().isBadRequest());

        // Validate the HashTag in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void putWithMissingIdPathParamHashTag() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        hashTag.setId(longCount.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restHashTagMockMvc
            .perform(put(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(hashTag)))
            .andExpect(status().isMethodNotAllowed());

        // Validate the HashTag in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void partialUpdateHashTagWithPatch() throws Exception {
        // Initialize the database
        hashTagRepository.saveAndFlush(hashTag);

        long databaseSizeBeforeUpdate = getRepositoryCount();

        // Update the hashTag using partial update
        HashTag partialUpdatedHashTag = new HashTag();
        partialUpdatedHashTag.setId(hashTag.getId());

        restHashTagMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, partialUpdatedHashTag.getId())
                    .contentType("application/merge-patch+json")
                    .content(om.writeValueAsBytes(partialUpdatedHashTag))
            )
            .andExpect(status().isOk());

        // Validate the HashTag in the database

        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        assertHashTagUpdatableFieldsEquals(createUpdateProxyForBean(partialUpdatedHashTag, hashTag), getPersistedHashTag(hashTag));
    }

    @Test
    @Transactional
    void fullUpdateHashTagWithPatch() throws Exception {
        // Initialize the database
        hashTagRepository.saveAndFlush(hashTag);

        long databaseSizeBeforeUpdate = getRepositoryCount();

        // Update the hashTag using partial update
        HashTag partialUpdatedHashTag = new HashTag();
        partialUpdatedHashTag.setId(hashTag.getId());

        partialUpdatedHashTag.description(UPDATED_DESCRIPTION);

        restHashTagMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, partialUpdatedHashTag.getId())
                    .contentType("application/merge-patch+json")
                    .content(om.writeValueAsBytes(partialUpdatedHashTag))
            )
            .andExpect(status().isOk());

        // Validate the HashTag in the database

        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        assertHashTagUpdatableFieldsEquals(partialUpdatedHashTag, getPersistedHashTag(partialUpdatedHashTag));
    }

    @Test
    @Transactional
    void patchNonExistingHashTag() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        hashTag.setId(longCount.incrementAndGet());

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restHashTagMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, hashTag.getId()).contentType("application/merge-patch+json").content(om.writeValueAsBytes(hashTag))
            )
            .andExpect(status().isBadRequest());

        // Validate the HashTag in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void patchWithIdMismatchHashTag() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        hashTag.setId(longCount.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restHashTagMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, longCount.incrementAndGet())
                    .contentType("application/merge-patch+json")
                    .content(om.writeValueAsBytes(hashTag))
            )
            .andExpect(status().isBadRequest());

        // Validate the HashTag in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void patchWithMissingIdPathParamHashTag() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        hashTag.setId(longCount.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restHashTagMockMvc
            .perform(patch(ENTITY_API_URL).contentType("application/merge-patch+json").content(om.writeValueAsBytes(hashTag)))
            .andExpect(status().isMethodNotAllowed());

        // Validate the HashTag in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void deleteHashTag() throws Exception {
        // Initialize the database
        hashTagRepository.saveAndFlush(hashTag);

        long databaseSizeBeforeDelete = getRepositoryCount();

        // Delete the hashTag
        restHashTagMockMvc
            .perform(delete(ENTITY_API_URL_ID, hashTag.getId()).accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        assertDecrementedRepositoryCount(databaseSizeBeforeDelete);
    }

    protected long getRepositoryCount() {
        return hashTagRepository.count();
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

    protected HashTag getPersistedHashTag(HashTag hashTag) {
        return hashTagRepository.findById(hashTag.getId()).orElseThrow();
    }

    protected void assertPersistedHashTagToMatchAllProperties(HashTag expectedHashTag) {
        assertHashTagAllPropertiesEquals(expectedHashTag, getPersistedHashTag(expectedHashTag));
    }

    protected void assertPersistedHashTagToMatchUpdatableProperties(HashTag expectedHashTag) {
        assertHashTagAllUpdatablePropertiesEquals(expectedHashTag, getPersistedHashTag(expectedHashTag));
    }
}
