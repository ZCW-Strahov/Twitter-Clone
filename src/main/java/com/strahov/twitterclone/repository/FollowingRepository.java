package com.strahov.twitterclone.repository;

import com.strahov.twitterclone.domain.Following;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the Following entity.
 */
@SuppressWarnings("unused")
@Repository
public interface FollowingRepository extends JpaRepository<Following, Long> {}
