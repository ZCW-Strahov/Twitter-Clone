package com.strahov.twitterclone.domain;

import static com.strahov.twitterclone.domain.HashTagTestSamples.*;
import static com.strahov.twitterclone.domain.MentionTestSamples.*;
import static com.strahov.twitterclone.domain.TweetTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import com.strahov.twitterclone.web.rest.TestUtil;
import java.util.HashSet;
import java.util.Set;
import org.junit.jupiter.api.Test;

class MentionTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Mention.class);
        Mention mention1 = getMentionSample1();
        Mention mention2 = new Mention();
        assertThat(mention1).isNotEqualTo(mention2);

        mention2.setId(mention1.getId());
        assertThat(mention1).isEqualTo(mention2);

        mention2 = getMentionSample2();
        assertThat(mention1).isNotEqualTo(mention2);
    }

    @Test
    void tweetTest() throws Exception {
        Mention mention = getMentionRandomSampleGenerator();
        Tweet tweetBack = getTweetRandomSampleGenerator();

        mention.addTweet(tweetBack);
        assertThat(mention.getTweets()).containsOnly(tweetBack);

        mention.removeTweet(tweetBack);
        assertThat(mention.getTweets()).doesNotContain(tweetBack);

        mention.tweets(new HashSet<>(Set.of(tweetBack)));
        assertThat(mention.getTweets()).containsOnly(tweetBack);

        mention.setTweets(new HashSet<>());
        assertThat(mention.getTweets()).doesNotContain(tweetBack);
    }

    @Test
    void hashtagTest() throws Exception {
        Mention mention = getMentionRandomSampleGenerator();
        HashTag hashTagBack = getHashTagRandomSampleGenerator();

        mention.addHashtag(hashTagBack);
        assertThat(mention.getHashtags()).containsOnly(hashTagBack);
        assertThat(hashTagBack.getMentions()).containsOnly(mention);

        mention.removeHashtag(hashTagBack);
        assertThat(mention.getHashtags()).doesNotContain(hashTagBack);
        assertThat(hashTagBack.getMentions()).doesNotContain(mention);

        mention.hashtags(new HashSet<>(Set.of(hashTagBack)));
        assertThat(mention.getHashtags()).containsOnly(hashTagBack);
        assertThat(hashTagBack.getMentions()).containsOnly(mention);

        mention.setHashtags(new HashSet<>());
        assertThat(mention.getHashtags()).doesNotContain(hashTagBack);
        assertThat(hashTagBack.getMentions()).doesNotContain(mention);
    }
}
