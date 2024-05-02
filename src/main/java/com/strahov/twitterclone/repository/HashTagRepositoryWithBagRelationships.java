package com.strahov.twitterclone.repository;

import com.strahov.twitterclone.domain.HashTag;
import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Page;

public interface HashTagRepositoryWithBagRelationships {
    Optional<HashTag> fetchBagRelationships(Optional<HashTag> hashTag);

    List<HashTag> fetchBagRelationships(List<HashTag> hashTags);

    Page<HashTag> fetchBagRelationships(Page<HashTag> hashTags);
}
