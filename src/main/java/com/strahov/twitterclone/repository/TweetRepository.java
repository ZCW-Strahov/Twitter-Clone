package com.strahov.twitterclone.repository;

import com.strahov.twitterclone.domain.Tweet;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the Tweet entity.
 */
@SuppressWarnings("unused")
@Repository
public interface TweetRepository extends JpaRepository<Tweet, Long> {}
