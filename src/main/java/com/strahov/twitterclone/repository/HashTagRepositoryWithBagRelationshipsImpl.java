package com.strahov.twitterclone.repository;

import com.strahov.twitterclone.domain.HashTag;
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
public class HashTagRepositoryWithBagRelationshipsImpl implements HashTagRepositoryWithBagRelationships {

    private static final String ID_PARAMETER = "id";
    private static final String HASHTAGS_PARAMETER = "hashTags";

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public Optional<HashTag> fetchBagRelationships(Optional<HashTag> hashTag) {
        return hashTag.map(this::fetchTweets).map(this::fetchMentions);
    }

    @Override
    public Page<HashTag> fetchBagRelationships(Page<HashTag> hashTags) {
        return new PageImpl<>(fetchBagRelationships(hashTags.getContent()), hashTags.getPageable(), hashTags.getTotalElements());
    }

    @Override
    public List<HashTag> fetchBagRelationships(List<HashTag> hashTags) {
        return Optional.of(hashTags).map(this::fetchTweets).map(this::fetchMentions).orElse(Collections.emptyList());
    }

    HashTag fetchTweets(HashTag result) {
        return entityManager
            .createQuery("select hashTag from HashTag hashTag left join fetch hashTag.tweets where hashTag.id = :id", HashTag.class)
            .setParameter(ID_PARAMETER, result.getId())
            .getSingleResult();
    }

    List<HashTag> fetchTweets(List<HashTag> hashTags) {
        HashMap<Object, Integer> order = new HashMap<>();
        IntStream.range(0, hashTags.size()).forEach(index -> order.put(hashTags.get(index).getId(), index));
        List<HashTag> result = entityManager
            .createQuery("select hashTag from HashTag hashTag left join fetch hashTag.tweets where hashTag in :hashTags", HashTag.class)
            .setParameter(HASHTAGS_PARAMETER, hashTags)
            .getResultList();
        Collections.sort(result, (o1, o2) -> Integer.compare(order.get(o1.getId()), order.get(o2.getId())));
        return result;
    }

    HashTag fetchMentions(HashTag result) {
        return entityManager
            .createQuery("select hashTag from HashTag hashTag left join fetch hashTag.mentions where hashTag.id = :id", HashTag.class)
            .setParameter(ID_PARAMETER, result.getId())
            .getSingleResult();
    }

    List<HashTag> fetchMentions(List<HashTag> hashTags) {
        HashMap<Object, Integer> order = new HashMap<>();
        IntStream.range(0, hashTags.size()).forEach(index -> order.put(hashTags.get(index).getId(), index));
        List<HashTag> result = entityManager
            .createQuery("select hashTag from HashTag hashTag left join fetch hashTag.mentions where hashTag in :hashTags", HashTag.class)
            .setParameter(HASHTAGS_PARAMETER, hashTags)
            .getResultList();
        Collections.sort(result, (o1, o2) -> Integer.compare(order.get(o1.getId()), order.get(o2.getId())));
        return result;
    }
}
