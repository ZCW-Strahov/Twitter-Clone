package com.strahov.twitterclone.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

/**
 * A UserProfile.
 */
@Entity
@Table(name = "user_profile")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
@SuppressWarnings("common-java:DuplicatedBlocks")
public class UserProfile implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "fname")
    private String fname;

    @Column(name = "lname")
    private String lname;

    @Column(name = "handle")
    private String handle;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(unique = true)
    private User user;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "userProfile")
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    @JsonIgnoreProperties(value = { "followed", "userProfile" }, allowSetters = true)
    private Set<Following> followings = new HashSet<>();

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "userProfile")
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    @JsonIgnoreProperties(value = { "follower", "userProfile" }, allowSetters = true)
    private Set<Followers> followers = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public UserProfile id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFname() {
        return this.fname;
    }

    public UserProfile fname(String fname) {
        this.setFname(fname);
        return this;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public String getLname() {
        return this.lname;
    }

    public UserProfile lname(String lname) {
        this.setLname(lname);
        return this;
    }

    public void setLname(String lname) {
        this.lname = lname;
    }

    public String getHandle() {
        return this.handle;
    }

    public UserProfile handle(String handle) {
        this.setHandle(handle);
        return this;
    }

    public void setHandle(String handle) {
        this.handle = handle;
    }

    public User getUser() {
        return this.user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public UserProfile user(User user) {
        this.setUser(user);
        return this;
    }

    public Set<Following> getFollowings() {
        return this.followings;
    }

    public void setFollowings(Set<Following> followings) {
        if (this.followings != null) {
            this.followings.forEach(i -> i.setUserProfile(null));
        }
        if (followings != null) {
            followings.forEach(i -> i.setUserProfile(this));
        }
        this.followings = followings;
    }

    public UserProfile followings(Set<Following> followings) {
        this.setFollowings(followings);
        return this;
    }

    public UserProfile addFollowing(Following following) {
        this.followings.add(following);
        following.setUserProfile(this);
        return this;
    }

    public UserProfile removeFollowing(Following following) {
        this.followings.remove(following);
        following.setUserProfile(null);
        return this;
    }

    public Set<Followers> getFollowers() {
        return this.followers;
    }

    public void setFollowers(Set<Followers> followers) {
        if (this.followers != null) {
            this.followers.forEach(i -> i.setUserProfile(null));
        }
        if (followers != null) {
            followers.forEach(i -> i.setUserProfile(this));
        }
        this.followers = followers;
    }

    public UserProfile followers(Set<Followers> followers) {
        this.setFollowers(followers);
        return this;
    }

    public UserProfile addFollowers(Followers followers) {
        this.followers.add(followers);
        followers.setUserProfile(this);
        return this;
    }

    public UserProfile removeFollowers(Followers followers) {
        this.followers.remove(followers);
        followers.setUserProfile(null);
        return this;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof UserProfile)) {
            return false;
        }
        return getId() != null && getId().equals(((UserProfile) o).getId());
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "UserProfile{" +
            "id=" + getId() +
            ", fname='" + getFname() + "'" +
            ", lname='" + getLname() + "'" +
            ", handle='" + getHandle() + "'" +
            "}";
    }
}
