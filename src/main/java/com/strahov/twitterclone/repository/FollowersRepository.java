package com.strahov.twitterclone.repository;

import com.strahov.twitterclone.domain.Followers;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the Followers entity.
 */
@SuppressWarnings("unused")
@Repository
public interface FollowersRepository extends JpaRepository<Followers, Long> {}
