package com.strahov.twitterclone.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

/**
 * A Mention.
 */
@Entity
@Table(name = "mention")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
@SuppressWarnings("common-java:DuplicatedBlocks")
public class Mention implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Lob
    @Column(name = "content")
    private String content;

    @Lob
    @Column(name = "picture")
    private byte[] picture;

    @Column(name = "picture_content_type")
    private String pictureContentType;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name = "rel_mention__tweet",
        joinColumns = @JoinColumn(name = "mention_id"),
        inverseJoinColumns = @JoinColumn(name = "tweet_id")
    )
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    @JsonIgnoreProperties(value = { "userProfile", "hashtags", "mentions" }, allowSetters = true)
    private Set<Tweet> tweets = new HashSet<>();

    @ManyToMany(fetch = FetchType.LAZY, mappedBy = "mentions")
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    @JsonIgnoreProperties(value = { "tweets", "mentions" }, allowSetters = true)
    private Set<HashTag> hashtags = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public Mention id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getContent() {
        return this.content;
    }

    public Mention content(String content) {
        this.setContent(content);
        return this;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public byte[] getPicture() {
        return this.picture;
    }

    public Mention picture(byte[] picture) {
        this.setPicture(picture);
        return this;
    }

    public void setPicture(byte[] picture) {
        this.picture = picture;
    }

    public String getPictureContentType() {
        return this.pictureContentType;
    }

    public Mention pictureContentType(String pictureContentType) {
        this.pictureContentType = pictureContentType;
        return this;
    }

    public void setPictureContentType(String pictureContentType) {
        this.pictureContentType = pictureContentType;
    }

    public Set<Tweet> getTweets() {
        return this.tweets;
    }

    public void setTweets(Set<Tweet> tweets) {
        this.tweets = tweets;
    }

    public Mention tweets(Set<Tweet> tweets) {
        this.setTweets(tweets);
        return this;
    }

    public Mention addTweet(Tweet tweet) {
        this.tweets.add(tweet);
        return this;
    }

    public Mention removeTweet(Tweet tweet) {
        this.tweets.remove(tweet);
        return this;
    }

    public Set<HashTag> getHashtags() {
        return this.hashtags;
    }

    public void setHashtags(Set<HashTag> hashTags) {
        if (this.hashtags != null) {
            this.hashtags.forEach(i -> i.removeMention(this));
        }
        if (hashTags != null) {
            hashTags.forEach(i -> i.addMention(this));
        }
        this.hashtags = hashTags;
    }

    public Mention hashtags(Set<HashTag> hashTags) {
        this.setHashtags(hashTags);
        return this;
    }

    public Mention addHashtag(HashTag hashTag) {
        this.hashtags.add(hashTag);
        hashTag.getMentions().add(this);
        return this;
    }

    public Mention removeHashtag(HashTag hashTag) {
        this.hashtags.remove(hashTag);
        hashTag.getMentions().remove(this);
        return this;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Mention)) {
            return false;
        }
        return getId() != null && getId().equals(((Mention) o).getId());
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Mention{" +
            "id=" + getId() +
            ", content='" + getContent() + "'" +
            ", picture='" + getPicture() + "'" +
            ", pictureContentType='" + getPictureContentType() + "'" +
            "}";
    }
}
