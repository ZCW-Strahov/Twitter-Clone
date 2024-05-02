package com.strahov.twitterclone.domain;

import java.util.Random;
import java.util.concurrent.atomic.AtomicLong;

public class MentionTestSamples {

    private static final Random random = new Random();
    private static final AtomicLong longCount = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    public static Mention getMentionSample1() {
        return new Mention().id(1L);
    }

    public static Mention getMentionSample2() {
        return new Mention().id(2L);
    }

    public static Mention getMentionRandomSampleGenerator() {
        return new Mention().id(longCount.incrementAndGet());
    }
}
