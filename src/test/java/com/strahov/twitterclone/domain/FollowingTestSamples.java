package com.strahov.twitterclone.domain;

import java.util.Random;
import java.util.concurrent.atomic.AtomicLong;

public class FollowingTestSamples {

    private static final Random random = new Random();
    private static final AtomicLong longCount = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    public static Following getFollowingSample1() {
        return new Following().id(1L);
    }

    public static Following getFollowingSample2() {
        return new Following().id(2L);
    }

    public static Following getFollowingRandomSampleGenerator() {
        return new Following().id(longCount.incrementAndGet());
    }
}
