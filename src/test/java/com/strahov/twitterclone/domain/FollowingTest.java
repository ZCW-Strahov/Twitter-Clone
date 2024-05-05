package com.strahov.twitterclone.domain;

import static com.strahov.twitterclone.domain.FollowingTestSamples.*;
import static com.strahov.twitterclone.domain.UserProfileTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import com.strahov.twitterclone.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class FollowingTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Following.class);
        Following following1 = getFollowingSample1();
        Following following2 = new Following();
        assertThat(following1).isNotEqualTo(following2);

        following2.setId(following1.getId());
        assertThat(following1).isEqualTo(following2);

        following2 = getFollowingSample2();
        assertThat(following1).isNotEqualTo(following2);
    }

    @Test
    void followedTest() throws Exception {
        Following following = getFollowingRandomSampleGenerator();
        UserProfile userProfileBack = getUserProfileRandomSampleGenerator();

        following.setFollowed(userProfileBack);
        assertThat(following.getFollowed()).isEqualTo(userProfileBack);

        following.followed(null);
        assertThat(following.getFollowed()).isNull();
    }

    @Test
    void userProfileTest() throws Exception {
        Following following = getFollowingRandomSampleGenerator();
        UserProfile userProfileBack = getUserProfileRandomSampleGenerator();

        following.setUserProfile(userProfileBack);
        assertThat(following.getUserProfile()).isEqualTo(userProfileBack);

        following.userProfile(null);
        assertThat(following.getUserProfile()).isNull();
    }
}
