package com.strahov.twitterclone.repository;

import com.strahov.twitterclone.domain.Tweet;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface TweetRepository extends JpaRepository<Tweet, Long> {
    @Query("SELECT t FROM Tweet t WHERE t.userProfile.user.login = :username")
    List<Tweet> findByUsername(@Param("username") String username);
}
