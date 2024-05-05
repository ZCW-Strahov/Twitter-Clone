package com.strahov.twitterclone.domain;

import java.util.Random;
import java.util.concurrent.atomic.AtomicLong;

public class FollowersTestSamples {

    private static final Random random = new Random();
    private static final AtomicLong longCount = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    public static Followers getFollowersSample1() {
        return new Followers().id(1L);
    }

    public static Followers getFollowersSample2() {
        return new Followers().id(2L);
    }

    public static Followers getFollowersRandomSampleGenerator() {
        return new Followers().id(longCount.incrementAndGet());
    }
}
