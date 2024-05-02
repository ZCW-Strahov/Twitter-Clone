package com.strahov.twitterclone.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

/**
 * A HashTag.
 */
@Entity
@Table(name = "hash_tag")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
@SuppressWarnings("common-java:DuplicatedBlocks")
public class HashTag implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "description")
    private String description;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name = "rel_hash_tag__tweet",
        joinColumns = @JoinColumn(name = "hash_tag_id"),
        inverseJoinColumns = @JoinColumn(name = "tweet_id")
    )
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    @JsonIgnoreProperties(value = { "userProfile", "hashtags", "mentions" }, allowSetters = true)
    private Set<Tweet> tweets = new HashSet<>();

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name = "rel_hash_tag__mention",
        joinColumns = @JoinColumn(name = "hash_tag_id"),
        inverseJoinColumns = @JoinColumn(name = "mention_id")
    )
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    @JsonIgnoreProperties(value = { "tweets", "hashtags" }, allowSetters = true)
    private Set<Mention> mentions = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public HashTag id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return this.description;
    }

    public HashTag description(String description) {
        this.setDescription(description);
        return this;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Set<Tweet> getTweets() {
        return this.tweets;
    }

    public void setTweets(Set<Tweet> tweets) {
        this.tweets = tweets;
    }

    public HashTag tweets(Set<Tweet> tweets) {
        this.setTweets(tweets);
        return this;
    }

    public HashTag addTweet(Tweet tweet) {
        this.tweets.add(tweet);
        return this;
    }

    public HashTag removeTweet(Tweet tweet) {
        this.tweets.remove(tweet);
        return this;
    }

    public Set<Mention> getMentions() {
        return this.mentions;
    }

    public void setMentions(Set<Mention> mentions) {
        this.mentions = mentions;
    }

    public HashTag mentions(Set<Mention> mentions) {
        this.setMentions(mentions);
        return this;
    }

    public HashTag addMention(Mention mention) {
        this.mentions.add(mention);
        return this;
    }

    public HashTag removeMention(Mention mention) {
        this.mentions.remove(mention);
        return this;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof HashTag)) {
            return false;
        }
        return getId() != null && getId().equals(((HashTag) o).getId());
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "HashTag{" +
            "id=" + getId() +
            ", description='" + getDescription() + "'" +
            "}";
    }
}
