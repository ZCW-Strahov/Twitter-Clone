package com.strahov.twitterclone.web.rest;

import static com.strahov.twitterclone.domain.TweetAsserts.*;
import static com.strahov.twitterclone.web.rest.TestUtil.createUpdateProxyForBean;
import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.strahov.twitterclone.IntegrationTest;
import com.strahov.twitterclone.domain.Tweet;
import com.strahov.twitterclone.repository.TweetRepository;
import jakarta.persistence.EntityManager;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Base64;
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
 * Integration tests for the {@link TweetResource} REST controller.
 */
@IntegrationTest
@AutoConfigureMockMvc
@WithMockUser
class TweetResourceIT {

    private static final String DEFAULT_CONTENT = "AAAAAAAAAA";
    private static final String UPDATED_CONTENT = "BBBBBBBBBB";

    private static final byte[] DEFAULT_PICTURE = TestUtil.createByteArray(1, "0");
    private static final byte[] UPDATED_PICTURE = TestUtil.createByteArray(1, "1");
    private static final String DEFAULT_PICTURE_CONTENT_TYPE = "image/jpg";
    private static final String UPDATED_PICTURE_CONTENT_TYPE = "image/png";

    private static final Instant DEFAULT_CREATED_ON = Instant.ofEpochMilli(0L);
    private static final Instant UPDATED_CREATED_ON = Instant.now().truncatedTo(ChronoUnit.MILLIS);

    private static final String DEFAULT_HASHTAG = "AAAAAAAAAA";
    private static final String UPDATED_HASHTAG = "BBBBBBBBBB";

    private static final String ENTITY_API_URL = "/api/tweets";
    private static final String ENTITY_API_URL_ID = ENTITY_API_URL + "/{id}";

    private static Random random = new Random();
    private static AtomicLong longCount = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    @Autowired
    private ObjectMapper om;

    @Autowired
    private TweetRepository tweetRepository;

    @Autowired
    private EntityManager em;

    @Autowired
    private MockMvc restTweetMockMvc;

    private Tweet tweet;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Tweet createEntity(EntityManager em) {
        Tweet tweet = new Tweet()
            .content(DEFAULT_CONTENT)
            .picture(DEFAULT_PICTURE)
            .pictureContentType(DEFAULT_PICTURE_CONTENT_TYPE)
            .createdOn(DEFAULT_CREATED_ON)
            .hashtag(DEFAULT_HASHTAG);
        return tweet;
    }

    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Tweet createUpdatedEntity(EntityManager em) {
        Tweet tweet = new Tweet()
            .content(UPDATED_CONTENT)
            .picture(UPDATED_PICTURE)
            .pictureContentType(UPDATED_PICTURE_CONTENT_TYPE)
            .createdOn(UPDATED_CREATED_ON)
            .hashtag(UPDATED_HASHTAG);
        return tweet;
    }

    @BeforeEach
    public void initTest() {
        tweet = createEntity(em);
    }

    @Test
    @Transactional
    void createTweet() throws Exception {
        long databaseSizeBeforeCreate = getRepositoryCount();
        // Create the Tweet
        var returnedTweet = om.readValue(
            restTweetMockMvc
                .perform(post(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(tweet)))
                .andExpect(status().isCreated())
                .andReturn()
                .getResponse()
                .getContentAsString(),
            Tweet.class
        );

        // Validate the Tweet in the database
        assertIncrementedRepositoryCount(databaseSizeBeforeCreate);
        assertTweetUpdatableFieldsEquals(returnedTweet, getPersistedTweet(returnedTweet));
    }

    @Test
    @Transactional
    void createTweetWithExistingId() throws Exception {
        // Create the Tweet with an existing ID
        tweet.setId(1L);

        long databaseSizeBeforeCreate = getRepositoryCount();

        // An entity with an existing ID cannot be created, so this API call must fail
        restTweetMockMvc
            .perform(post(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(tweet)))
            .andExpect(status().isBadRequest());

        // Validate the Tweet in the database
        assertSameRepositoryCount(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    void getAllTweets() throws Exception {
        // Initialize the database
        tweetRepository.saveAndFlush(tweet);

        // Get all the tweetList
        restTweetMockMvc
            .perform(get(ENTITY_API_URL + "?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(tweet.getId().intValue())))
            .andExpect(jsonPath("$.[*].content").value(hasItem(DEFAULT_CONTENT.toString())))
            .andExpect(jsonPath("$.[*].pictureContentType").value(hasItem(DEFAULT_PICTURE_CONTENT_TYPE)))
            .andExpect(jsonPath("$.[*].picture").value(hasItem(Base64.getEncoder().encodeToString(DEFAULT_PICTURE))))
            .andExpect(jsonPath("$.[*].createdOn").value(hasItem(DEFAULT_CREATED_ON.toString())))
            .andExpect(jsonPath("$.[*].hashtag").value(hasItem(DEFAULT_HASHTAG)));
    }

    @Test
    @Transactional
    void getTweet() throws Exception {
        // Initialize the database
        tweetRepository.saveAndFlush(tweet);

        // Get the tweet
        restTweetMockMvc
            .perform(get(ENTITY_API_URL_ID, tweet.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.id").value(tweet.getId().intValue()))
            .andExpect(jsonPath("$.content").value(DEFAULT_CONTENT.toString()))
            .andExpect(jsonPath("$.pictureContentType").value(DEFAULT_PICTURE_CONTENT_TYPE))
            .andExpect(jsonPath("$.picture").value(Base64.getEncoder().encodeToString(DEFAULT_PICTURE)))
            .andExpect(jsonPath("$.createdOn").value(DEFAULT_CREATED_ON.toString()))
            .andExpect(jsonPath("$.hashtag").value(DEFAULT_HASHTAG));
    }

    @Test
    @Transactional
    void getNonExistingTweet() throws Exception {
        // Get the tweet
        restTweetMockMvc.perform(get(ENTITY_API_URL_ID, Long.MAX_VALUE)).andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    void putExistingTweet() throws Exception {
        // Initialize the database
        tweetRepository.saveAndFlush(tweet);

        long databaseSizeBeforeUpdate = getRepositoryCount();

        // Update the tweet
        Tweet updatedTweet = tweetRepository.findById(tweet.getId()).orElseThrow();
        // Disconnect from session so that the updates on updatedTweet are not directly saved in db
        em.detach(updatedTweet);
        updatedTweet
            .content(UPDATED_CONTENT)
            .picture(UPDATED_PICTURE)
            .pictureContentType(UPDATED_PICTURE_CONTENT_TYPE)
            .createdOn(UPDATED_CREATED_ON)
            .hashtag(UPDATED_HASHTAG);

        restTweetMockMvc
            .perform(
                put(ENTITY_API_URL_ID, updatedTweet.getId())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(om.writeValueAsBytes(updatedTweet))
            )
            .andExpect(status().isOk());

        // Validate the Tweet in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        assertPersistedTweetToMatchAllProperties(updatedTweet);
    }

    @Test
    @Transactional
    void putNonExistingTweet() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        tweet.setId(longCount.incrementAndGet());

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restTweetMockMvc
            .perform(put(ENTITY_API_URL_ID, tweet.getId()).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(tweet)))
            .andExpect(status().isBadRequest());

        // Validate the Tweet in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void putWithIdMismatchTweet() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        tweet.setId(longCount.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restTweetMockMvc
            .perform(
                put(ENTITY_API_URL_ID, longCount.incrementAndGet())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(om.writeValueAsBytes(tweet))
            )
            .andExpect(status().isBadRequest());

        // Validate the Tweet in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void putWithMissingIdPathParamTweet() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        tweet.setId(longCount.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restTweetMockMvc
            .perform(put(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(tweet)))
            .andExpect(status().isMethodNotAllowed());

        // Validate the Tweet in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void partialUpdateTweetWithPatch() throws Exception {
        // Initialize the database
        tweetRepository.saveAndFlush(tweet);

        long databaseSizeBeforeUpdate = getRepositoryCount();

        // Update the tweet using partial update
        Tweet partialUpdatedTweet = new Tweet();
        partialUpdatedTweet.setId(tweet.getId());

        partialUpdatedTweet.picture(UPDATED_PICTURE).pictureContentType(UPDATED_PICTURE_CONTENT_TYPE).createdOn(UPDATED_CREATED_ON);

        restTweetMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, partialUpdatedTweet.getId())
                    .contentType("application/merge-patch+json")
                    .content(om.writeValueAsBytes(partialUpdatedTweet))
            )
            .andExpect(status().isOk());

        // Validate the Tweet in the database

        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        assertTweetUpdatableFieldsEquals(createUpdateProxyForBean(partialUpdatedTweet, tweet), getPersistedTweet(tweet));
    }

    @Test
    @Transactional
    void fullUpdateTweetWithPatch() throws Exception {
        // Initialize the database
        tweetRepository.saveAndFlush(tweet);

        long databaseSizeBeforeUpdate = getRepositoryCount();

        // Update the tweet using partial update
        Tweet partialUpdatedTweet = new Tweet();
        partialUpdatedTweet.setId(tweet.getId());

        partialUpdatedTweet
            .content(UPDATED_CONTENT)
            .picture(UPDATED_PICTURE)
            .pictureContentType(UPDATED_PICTURE_CONTENT_TYPE)
            .createdOn(UPDATED_CREATED_ON)
            .hashtag(UPDATED_HASHTAG);

        restTweetMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, partialUpdatedTweet.getId())
                    .contentType("application/merge-patch+json")
                    .content(om.writeValueAsBytes(partialUpdatedTweet))
            )
            .andExpect(status().isOk());

        // Validate the Tweet in the database

        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        assertTweetUpdatableFieldsEquals(partialUpdatedTweet, getPersistedTweet(partialUpdatedTweet));
    }

    @Test
    @Transactional
    void patchNonExistingTweet() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        tweet.setId(longCount.incrementAndGet());

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restTweetMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, tweet.getId()).contentType("application/merge-patch+json").content(om.writeValueAsBytes(tweet))
            )
            .andExpect(status().isBadRequest());

        // Validate the Tweet in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void patchWithIdMismatchTweet() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        tweet.setId(longCount.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restTweetMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, longCount.incrementAndGet())
                    .contentType("application/merge-patch+json")
                    .content(om.writeValueAsBytes(tweet))
            )
            .andExpect(status().isBadRequest());

        // Validate the Tweet in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void patchWithMissingIdPathParamTweet() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        tweet.setId(longCount.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restTweetMockMvc
            .perform(patch(ENTITY_API_URL).contentType("application/merge-patch+json").content(om.writeValueAsBytes(tweet)))
            .andExpect(status().isMethodNotAllowed());

        // Validate the Tweet in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void deleteTweet() throws Exception {
        // Initialize the database
        tweetRepository.saveAndFlush(tweet);

        long databaseSizeBeforeDelete = getRepositoryCount();

        // Delete the tweet
        restTweetMockMvc
            .perform(delete(ENTITY_API_URL_ID, tweet.getId()).accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        assertDecrementedRepositoryCount(databaseSizeBeforeDelete);
    }

    protected long getRepositoryCount() {
        return tweetRepository.count();
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

    protected Tweet getPersistedTweet(Tweet tweet) {
        return tweetRepository.findById(tweet.getId()).orElseThrow();
    }

    protected void assertPersistedTweetToMatchAllProperties(Tweet expectedTweet) {
        assertTweetAllPropertiesEquals(expectedTweet, getPersistedTweet(expectedTweet));
    }

    protected void assertPersistedTweetToMatchUpdatableProperties(Tweet expectedTweet) {
        assertTweetAllUpdatablePropertiesEquals(expectedTweet, getPersistedTweet(expectedTweet));
    }
}
