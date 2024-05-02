package com.strahov.twitterclone.domain;

import static com.strahov.twitterclone.domain.HashTagTestSamples.*;
import static com.strahov.twitterclone.domain.MentionTestSamples.*;
import static com.strahov.twitterclone.domain.TweetTestSamples.*;
import static com.strahov.twitterclone.domain.UserProfileTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import com.strahov.twitterclone.web.rest.TestUtil;
import java.util.HashSet;
import java.util.Set;
import org.junit.jupiter.api.Test;

class TweetTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Tweet.class);
        Tweet tweet1 = getTweetSample1();
        Tweet tweet2 = new Tweet();
        assertThat(tweet1).isNotEqualTo(tweet2);

        tweet2.setId(tweet1.getId());
        assertThat(tweet1).isEqualTo(tweet2);

        tweet2 = getTweetSample2();
        assertThat(tweet1).isNotEqualTo(tweet2);
    }

    @Test
    void userProfileTest() throws Exception {
        Tweet tweet = getTweetRandomSampleGenerator();
        UserProfile userProfileBack = getUserProfileRandomSampleGenerator();

        tweet.setUserProfile(userProfileBack);
        assertThat(tweet.getUserProfile()).isEqualTo(userProfileBack);

        tweet.userProfile(null);
        assertThat(tweet.getUserProfile()).isNull();
    }

    @Test
    void hashtagTest() throws Exception {
        Tweet tweet = getTweetRandomSampleGenerator();
        HashTag hashTagBack = getHashTagRandomSampleGenerator();

        tweet.addHashtag(hashTagBack);
        assertThat(tweet.getHashtags()).containsOnly(hashTagBack);
        assertThat(hashTagBack.getTweets()).containsOnly(tweet);

        tweet.removeHashtag(hashTagBack);
        assertThat(tweet.getHashtags()).doesNotContain(hashTagBack);
        assertThat(hashTagBack.getTweets()).doesNotContain(tweet);

        tweet.hashtags(new HashSet<>(Set.of(hashTagBack)));
        assertThat(tweet.getHashtags()).containsOnly(hashTagBack);
        assertThat(hashTagBack.getTweets()).containsOnly(tweet);

        tweet.setHashtags(new HashSet<>());
        assertThat(tweet.getHashtags()).doesNotContain(hashTagBack);
        assertThat(hashTagBack.getTweets()).doesNotContain(tweet);
    }

    @Test
    void mentionTest() throws Exception {
        Tweet tweet = getTweetRandomSampleGenerator();
        Mention mentionBack = getMentionRandomSampleGenerator();

        tweet.addMention(mentionBack);
        assertThat(tweet.getMentions()).containsOnly(mentionBack);
        assertThat(mentionBack.getTweets()).containsOnly(tweet);

        tweet.removeMention(mentionBack);
        assertThat(tweet.getMentions()).doesNotContain(mentionBack);
        assertThat(mentionBack.getTweets()).doesNotContain(tweet);

        tweet.mentions(new HashSet<>(Set.of(mentionBack)));
        assertThat(tweet.getMentions()).containsOnly(mentionBack);
        assertThat(mentionBack.getTweets()).containsOnly(tweet);

        tweet.setMentions(new HashSet<>());
        assertThat(tweet.getMentions()).doesNotContain(mentionBack);
        assertThat(mentionBack.getTweets()).doesNotContain(tweet);
    }
}
