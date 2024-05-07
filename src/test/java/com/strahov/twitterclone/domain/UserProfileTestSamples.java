package com.strahov.twitterclone.domain;

import java.util.Random;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicLong;

public class UserProfileTestSamples {

    private static final Random random = new Random();
    private static final AtomicLong longCount = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    public static UserProfile getUserProfileSample1() {
        return new UserProfile().id(1L).fname("fname1").lname("lname1").handle("handle1");
    }

    public static UserProfile getUserProfileSample2() {
        return new UserProfile().id(2L).fname("fname2").lname("lname2").handle("handle2");
    }

    public static UserProfile getUserProfileRandomSampleGenerator() {
        return new UserProfile()
            .id(longCount.incrementAndGet())
            .fname(UUID.randomUUID().toString())
            .lname(UUID.randomUUID().toString())
            .handle(UUID.randomUUID().toString());
    }
}
