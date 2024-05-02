package com.strahov.twitterclone.repository;

import com.strahov.twitterclone.domain.Mention;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;
import java.util.stream.IntStream;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;

/**
 * Utility repository to load bag relationships based on https://vladmihalcea.com/hibernate-multiplebagfetchexception/
 */
public class MentionRepositoryWithBagRelationshipsImpl implements MentionRepositoryWithBagRelationships {

    private static final String ID_PARAMETER = "id";
    private static final String MENTIONS_PARAMETER = "mentions";

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public Optional<Mention> fetchBagRelationships(Optional<Mention> mention) {
        return mention.map(this::fetchTweets);
    }

    @Override
    public Page<Mention> fetchBagRelationships(Page<Mention> mentions) {
        return new PageImpl<>(fetchBagRelationships(mentions.getContent()), mentions.getPageable(), mentions.getTotalElements());
    }

    @Override
    public List<Mention> fetchBagRelationships(List<Mention> mentions) {
        return Optional.of(mentions).map(this::fetchTweets).orElse(Collections.emptyList());
    }

    Mention fetchTweets(Mention result) {
        return entityManager
            .createQuery("select mention from Mention mention left join fetch mention.tweets where mention.id = :id", Mention.class)
            .setParameter(ID_PARAMETER, result.getId())
            .getSingleResult();
    }

    List<Mention> fetchTweets(List<Mention> mentions) {
        HashMap<Object, Integer> order = new HashMap<>();
        IntStream.range(0, mentions.size()).forEach(index -> order.put(mentions.get(index).getId(), index));
        List<Mention> result = entityManager
            .createQuery("select mention from Mention mention left join fetch mention.tweets where mention in :mentions", Mention.class)
            .setParameter(MENTIONS_PARAMETER, mentions)
            .getResultList();
        Collections.sort(result, (o1, o2) -> Integer.compare(order.get(o1.getId()), order.get(o2.getId())));
        return result;
    }
}
