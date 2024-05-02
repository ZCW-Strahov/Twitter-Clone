package com.strahov.twitterclone.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import java.io.Serializable;
import java.time.Instant;
import java.util.HashSet;
import java.util.Set;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

/**
 * A Tweet.
 */
@Entity
@Table(name = "tweet")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
@SuppressWarnings("common-java:DuplicatedBlocks")
public class Tweet implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Lob
    @Column(name = "content", nullable = false)
    private String content;

    @Lob
    @Column(name = "picture")
    private byte[] picture;

    @Column(name = "picture_content_type")
    private String pictureContentType;

    @Column(name = "created_on")
    private Instant createdOn;

    @Column(name = "hashtag")
    private String hashtag;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnoreProperties(value = { "user" }, allowSetters = true)
    private UserProfile userProfile;

    @ManyToMany(fetch = FetchType.LAZY, mappedBy = "tweets")
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    @JsonIgnoreProperties(value = { "tweets", "mentions" }, allowSetters = true)
    private Set<HashTag> hashtags = new HashSet<>();

    @ManyToMany(fetch = FetchType.LAZY, mappedBy = "tweets")
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    @JsonIgnoreProperties(value = { "tweets", "hashtags" }, allowSetters = true)
    private Set<Mention> mentions = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public Tweet id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getContent() {
        return this.content;
    }

    public Tweet content(String content) {
        this.setContent(content);
        return this;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public byte[] getPicture() {
        return this.picture;
    }

    public Tweet picture(byte[] picture) {
        this.setPicture(picture);
        return this;
    }

    public void setPicture(byte[] picture) {
        this.picture = picture;
    }

    public String getPictureContentType() {
        return this.pictureContentType;
    }

    public Tweet pictureContentType(String pictureContentType) {
        this.pictureContentType = pictureContentType;
        return this;
    }

    public void setPictureContentType(String pictureContentType) {
        this.pictureContentType = pictureContentType;
    }

    public Instant getCreatedOn() {
        return this.createdOn;
    }

    public Tweet createdOn(Instant createdOn) {
        this.setCreatedOn(createdOn);
        return this;
    }

    public void setCreatedOn(Instant createdOn) {
        this.createdOn = createdOn;
    }

    public String getHashtag() {
        return this.hashtag;
    }

    public Tweet hashtag(String hashtag) {
        this.setHashtag(hashtag);
        return this;
    }

    public void setHashtag(String hashtag) {
        this.hashtag = hashtag;
    }

    public UserProfile getUserProfile() {
        return this.userProfile;
    }

    public void setUserProfile(UserProfile userProfile) {
        this.userProfile = userProfile;
    }

    public Tweet userProfile(UserProfile userProfile) {
        this.setUserProfile(userProfile);
        return this;
    }

    public Set<HashTag> getHashtags() {
        return this.hashtags;
    }

    public void setHashtags(Set<HashTag> hashTags) {
        if (this.hashtags != null) {
            this.hashtags.forEach(i -> i.removeTweet(this));
        }
        if (hashTags != null) {
            hashTags.forEach(i -> i.addTweet(this));
        }
        this.hashtags = hashTags;
    }

    public Tweet hashtags(Set<HashTag> hashTags) {
        this.setHashtags(hashTags);
        return this;
    }

    public Tweet addHashtag(HashTag hashTag) {
        this.hashtags.add(hashTag);
        hashTag.getTweets().add(this);
        return this;
    }

    public Tweet removeHashtag(HashTag hashTag) {
        this.hashtags.remove(hashTag);
        hashTag.getTweets().remove(this);
        return this;
    }

    public Set<Mention> getMentions() {
        return this.mentions;
    }

    public void setMentions(Set<Mention> mentions) {
        if (this.mentions != null) {
            this.mentions.forEach(i -> i.removeTweet(this));
        }
        if (mentions != null) {
            mentions.forEach(i -> i.addTweet(this));
        }
        this.mentions = mentions;
    }

    public Tweet mentions(Set<Mention> mentions) {
        this.setMentions(mentions);
        return this;
    }

    public Tweet addMention(Mention mention) {
        this.mentions.add(mention);
        mention.getTweets().add(this);
        return this;
    }

    public Tweet removeMention(Mention mention) {
        this.mentions.remove(mention);
        mention.getTweets().remove(this);
        return this;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Tweet)) {
            return false;
        }
        return getId() != null && getId().equals(((Tweet) o).getId());
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Tweet{" +
            "id=" + getId() +
            ", content='" + getContent() + "'" +
            ", picture='" + getPicture() + "'" +
            ", pictureContentType='" + getPictureContentType() + "'" +
            ", createdOn='" + getCreatedOn() + "'" +
            ", hashtag='" + getHashtag() + "'" +
            "}";
    }
}
