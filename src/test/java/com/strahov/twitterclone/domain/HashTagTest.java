package com.strahov.twitterclone.domain;

import static com.strahov.twitterclone.domain.HashTagTestSamples.*;
import static com.strahov.twitterclone.domain.MentionTestSamples.*;
import static com.strahov.twitterclone.domain.TweetTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import com.strahov.twitterclone.web.rest.TestUtil;
import java.util.HashSet;
import java.util.Set;
import org.junit.jupiter.api.Test;

class HashTagTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(HashTag.class);
        HashTag hashTag1 = getHashTagSample1();
        HashTag hashTag2 = new HashTag();
        assertThat(hashTag1).isNotEqualTo(hashTag2);

        hashTag2.setId(hashTag1.getId());
        assertThat(hashTag1).isEqualTo(hashTag2);

        hashTag2 = getHashTagSample2();
        assertThat(hashTag1).isNotEqualTo(hashTag2);
    }

    @Test
    void tweetTest() throws Exception {
        HashTag hashTag = getHashTagRandomSampleGenerator();
        Tweet tweetBack = getTweetRandomSampleGenerator();

        hashTag.addTweet(tweetBack);
        assertThat(hashTag.getTweets()).containsOnly(tweetBack);

        hashTag.removeTweet(tweetBack);
        assertThat(hashTag.getTweets()).doesNotContain(tweetBack);

        hashTag.tweets(new HashSet<>(Set.of(tweetBack)));
        assertThat(hashTag.getTweets()).containsOnly(tweetBack);

        hashTag.setTweets(new HashSet<>());
        assertThat(hashTag.getTweets()).doesNotContain(tweetBack);
    }

    @Test
    void mentionTest() throws Exception {
        HashTag hashTag = getHashTagRandomSampleGenerator();
        Mention mentionBack = getMentionRandomSampleGenerator();

        hashTag.addMention(mentionBack);
        assertThat(hashTag.getMentions()).containsOnly(mentionBack);

        hashTag.removeMention(mentionBack);
        assertThat(hashTag.getMentions()).doesNotContain(mentionBack);

        hashTag.mentions(new HashSet<>(Set.of(mentionBack)));
        assertThat(hashTag.getMentions()).containsOnly(mentionBack);

        hashTag.setMentions(new HashSet<>());
        assertThat(hashTag.getMentions()).doesNotContain(mentionBack);
    }
}
