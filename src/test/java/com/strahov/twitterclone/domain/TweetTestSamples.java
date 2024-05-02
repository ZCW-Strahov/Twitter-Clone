package com.strahov.twitterclone.domain;

import java.util.Random;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicLong;

public class TweetTestSamples {

    private static final Random random = new Random();
    private static final AtomicLong longCount = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    public static Tweet getTweetSample1() {
        return new Tweet().id(1L).hashtag("hashtag1");
    }

    public static Tweet getTweetSample2() {
        return new Tweet().id(2L).hashtag("hashtag2");
    }

    public static Tweet getTweetRandomSampleGenerator() {
        return new Tweet().id(longCount.incrementAndGet()).hashtag(UUID.randomUUID().toString());
    }
}
