package com.strahov.twitterclone.domain;

import static com.strahov.twitterclone.domain.FollowersTestSamples.*;
import static com.strahov.twitterclone.domain.FollowingTestSamples.*;
import static com.strahov.twitterclone.domain.UserProfileTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import com.strahov.twitterclone.web.rest.TestUtil;
import java.util.HashSet;
import java.util.Set;
import org.junit.jupiter.api.Test;

class UserProfileTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(UserProfile.class);
        UserProfile userProfile1 = getUserProfileSample1();
        UserProfile userProfile2 = new UserProfile();
        assertThat(userProfile1).isNotEqualTo(userProfile2);

        userProfile2.setId(userProfile1.getId());
        assertThat(userProfile1).isEqualTo(userProfile2);

        userProfile2 = getUserProfileSample2();
        assertThat(userProfile1).isNotEqualTo(userProfile2);
    }

    @Test
    void followingTest() throws Exception {
        UserProfile userProfile = getUserProfileRandomSampleGenerator();
        Following followingBack = getFollowingRandomSampleGenerator();

        userProfile.addFollowing(followingBack);
        assertThat(userProfile.getFollowings()).containsOnly(followingBack);
        assertThat(followingBack.getUserProfile()).isEqualTo(userProfile);

        userProfile.removeFollowing(followingBack);
        assertThat(userProfile.getFollowings()).doesNotContain(followingBack);
        assertThat(followingBack.getUserProfile()).isNull();

        userProfile.followings(new HashSet<>(Set.of(followingBack)));
        assertThat(userProfile.getFollowings()).containsOnly(followingBack);
        assertThat(followingBack.getUserProfile()).isEqualTo(userProfile);

        userProfile.setFollowings(new HashSet<>());
        assertThat(userProfile.getFollowings()).doesNotContain(followingBack);
        assertThat(followingBack.getUserProfile()).isNull();
    }

    @Test
    void followersTest() throws Exception {
        UserProfile userProfile = getUserProfileRandomSampleGenerator();
        Followers followersBack = getFollowersRandomSampleGenerator();

        userProfile.addFollowers(followersBack);
        assertThat(userProfile.getFollowers()).containsOnly(followersBack);
        assertThat(followersBack.getUserProfile()).isEqualTo(userProfile);

        userProfile.removeFollowers(followersBack);
        assertThat(userProfile.getFollowers()).doesNotContain(followersBack);
        assertThat(followersBack.getUserProfile()).isNull();

        userProfile.followers(new HashSet<>(Set.of(followersBack)));
        assertThat(userProfile.getFollowers()).containsOnly(followersBack);
        assertThat(followersBack.getUserProfile()).isEqualTo(userProfile);

        userProfile.setFollowers(new HashSet<>());
        assertThat(userProfile.getFollowers()).doesNotContain(followersBack);
        assertThat(followersBack.getUserProfile()).isNull();
    }
}
