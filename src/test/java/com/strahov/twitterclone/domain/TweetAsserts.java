package com.strahov.twitterclone.domain;

import static org.assertj.core.api.Assertions.assertThat;

public class TweetAsserts {

    /**
     * Asserts that the entity has all properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertTweetAllPropertiesEquals(Tweet expected, Tweet actual) {
        assertTweetAutoGeneratedPropertiesEquals(expected, actual);
        assertTweetAllUpdatablePropertiesEquals(expected, actual);
    }

    /**
     * Asserts that the entity has all updatable properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertTweetAllUpdatablePropertiesEquals(Tweet expected, Tweet actual) {
        assertTweetUpdatableFieldsEquals(expected, actual);
        assertTweetUpdatableRelationshipsEquals(expected, actual);
    }

    /**
     * Asserts that the entity has all the auto generated properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertTweetAutoGeneratedPropertiesEquals(Tweet expected, Tweet actual) {
        assertThat(expected)
            .as("Verify Tweet auto generated properties")
            .satisfies(e -> assertThat(e.getId()).as("check id").isEqualTo(actual.getId()));
    }

    /**
     * Asserts that the entity has all the updatable fields set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertTweetUpdatableFieldsEquals(Tweet expected, Tweet actual) {
        assertThat(expected)
            .as("Verify Tweet relevant properties")
            .satisfies(e -> assertThat(e.getContent()).as("check content").isEqualTo(actual.getContent()))
            .satisfies(e -> assertThat(e.getPicture()).as("check picture").isEqualTo(actual.getPicture()))
            .satisfies(
                e -> assertThat(e.getPictureContentType()).as("check picture contenty type").isEqualTo(actual.getPictureContentType())
            )
            .satisfies(e -> assertThat(e.getCreatedOn()).as("check createdOn").isEqualTo(actual.getCreatedOn()))
            .satisfies(e -> assertThat(e.getHashtag()).as("check hashtag").isEqualTo(actual.getHashtag()));
    }

    /**
     * Asserts that the entity has all the updatable relationships set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertTweetUpdatableRelationshipsEquals(Tweet expected, Tweet actual) {
        assertThat(expected)
            .as("Verify Tweet relationships")
            .satisfies(e -> assertThat(e.getUserProfile()).as("check userProfile").isEqualTo(actual.getUserProfile()))
            .satisfies(e -> assertThat(e.getHashtags()).as("check hashtags").isEqualTo(actual.getHashtags()))
            .satisfies(e -> assertThat(e.getMentions()).as("check mentions").isEqualTo(actual.getMentions()));
    }
}
