package com.strahov.twitterclone.repository;

import com.strahov.twitterclone.domain.Mention;
import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Page;

public interface MentionRepositoryWithBagRelationships {
    Optional<Mention> fetchBagRelationships(Optional<Mention> mention);

    List<Mention> fetchBagRelationships(List<Mention> mentions);

    Page<Mention> fetchBagRelationships(Page<Mention> mentions);
}
