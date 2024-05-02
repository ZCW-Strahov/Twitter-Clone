package com.strahov.twitterclone.domain;

import java.util.Random;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicLong;

public class HashTagTestSamples {

    private static final Random random = new Random();
    private static final AtomicLong longCount = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    public static HashTag getHashTagSample1() {
        return new HashTag().id(1L).description("description1");
    }

    public static HashTag getHashTagSample2() {
        return new HashTag().id(2L).description("description2");
    }

    public static HashTag getHashTagRandomSampleGenerator() {
        return new HashTag().id(longCount.incrementAndGet()).description(UUID.randomUUID().toString());
    }
}
