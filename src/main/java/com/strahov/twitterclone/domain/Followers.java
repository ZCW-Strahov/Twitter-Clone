package com.strahov.twitterclone.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import java.io.Serializable;
import java.time.Instant;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

/**
 * A Followers.
 */
@Entity
@Table(name = "followers")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
@SuppressWarnings("common-java:DuplicatedBlocks")
public class Followers implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "since")
    private Instant since;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnoreProperties(value = { "user", "followings", "followers" }, allowSetters = true)
    private UserProfile follower;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnoreProperties(value = { "user", "followings", "followers" }, allowSetters = true)
    private UserProfile userProfile;

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public Followers id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Instant getSince() {
        return this.since;
    }

    public Followers since(Instant since) {
        this.setSince(since);
        return this;
    }

    public void setSince(Instant since) {
        this.since = since;
    }

    public UserProfile getFollower() {
        return this.follower;
    }

    public void setFollower(UserProfile userProfile) {
        this.follower = userProfile;
    }

    public Followers follower(UserProfile userProfile) {
        this.setFollower(userProfile);
        return this;
    }

    public UserProfile getUserProfile() {
        return this.userProfile;
    }

    public void setUserProfile(UserProfile userProfile) {
        this.userProfile = userProfile;
    }

    public Followers userProfile(UserProfile userProfile) {
        this.setUserProfile(userProfile);
        return this;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Followers)) {
            return false;
        }
        return getId() != null && getId().equals(((Followers) o).getId());
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Followers{" +
            "id=" + getId() +
            ", since='" + getSince() + "'" +
            "}";
    }
}
