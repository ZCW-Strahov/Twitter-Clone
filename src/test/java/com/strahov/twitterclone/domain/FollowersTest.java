package com.strahov.twitterclone.domain;

import static com.strahov.twitterclone.domain.FollowersTestSamples.*;
import static com.strahov.twitterclone.domain.UserProfileTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import com.strahov.twitterclone.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class FollowersTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Followers.class);
        Followers followers1 = getFollowersSample1();
        Followers followers2 = new Followers();
        assertThat(followers1).isNotEqualTo(followers2);

        followers2.setId(followers1.getId());
        assertThat(followers1).isEqualTo(followers2);

        followers2 = getFollowersSample2();
        assertThat(followers1).isNotEqualTo(followers2);
    }

    @Test
    void followerTest() throws Exception {
        Followers followers = getFollowersRandomSampleGenerator();
        UserProfile userProfileBack = getUserProfileRandomSampleGenerator();

        followers.setFollower(userProfileBack);
        assertThat(followers.getFollower()).isEqualTo(userProfileBack);

        followers.follower(null);
        assertThat(followers.getFollower()).isNull();
    }

    @Test
    void userProfileTest() throws Exception {
        Followers followers = getFollowersRandomSampleGenerator();
        UserProfile userProfileBack = getUserProfileRandomSampleGenerator();

        followers.setUserProfile(userProfileBack);
        assertThat(followers.getUserProfile()).isEqualTo(userProfileBack);

        followers.userProfile(null);
        assertThat(followers.getUserProfile()).isNull();
    }
}
