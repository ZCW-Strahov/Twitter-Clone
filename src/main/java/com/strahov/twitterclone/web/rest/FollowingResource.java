package com.strahov.twitterclone.web.rest;

import com.strahov.twitterclone.domain.Following;
import com.strahov.twitterclone.repository.FollowingRepository;
import com.strahov.twitterclone.web.rest.errors.BadRequestAlertException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import tech.jhipster.web.util.HeaderUtil;
import tech.jhipster.web.util.ResponseUtil;

/**
 * REST controller for managing {@link com.strahov.twitterclone.domain.Following}.
 */
@RestController
@RequestMapping("/api/followings")
@Transactional
public class FollowingResource {

    private final Logger log = LoggerFactory.getLogger(FollowingResource.class);

    private static final String ENTITY_NAME = "following";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final FollowingRepository followingRepository;

    public FollowingResource(FollowingRepository followingRepository) {
        this.followingRepository = followingRepository;
    }

    /**
     * {@code POST  /followings} : Create a new following.
     *
     * @param following the following to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new following, or with status {@code 400 (Bad Request)} if the following has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("")
    public ResponseEntity<Following> createFollowing(@RequestBody Following following) throws URISyntaxException {
        log.debug("REST request to save Following : {}", following);
        if (following.getId() != null) {
            throw new BadRequestAlertException("A new following cannot already have an ID", ENTITY_NAME, "idexists");
        }
        following = followingRepository.save(following);
        return ResponseEntity.created(new URI("/api/followings/" + following.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, false, ENTITY_NAME, following.getId().toString()))
            .body(following);
    }

    /**
     * {@code PUT  /followings/:id} : Updates an existing following.
     *
     * @param id the id of the following to save.
     * @param following the following to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated following,
     * or with status {@code 400 (Bad Request)} if the following is not valid,
     * or with status {@code 500 (Internal Server Error)} if the following couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/{id}")
    public ResponseEntity<Following> updateFollowing(
        @PathVariable(value = "id", required = false) final Long id,
        @RequestBody Following following
    ) throws URISyntaxException {
        log.debug("REST request to update Following : {}, {}", id, following);
        if (following.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, following.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!followingRepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        following = followingRepository.save(following);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, false, ENTITY_NAME, following.getId().toString()))
            .body(following);
    }

    /**
     * {@code PATCH  /followings/:id} : Partial updates given fields of an existing following, field will ignore if it is null
     *
     * @param id the id of the following to save.
     * @param following the following to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated following,
     * or with status {@code 400 (Bad Request)} if the following is not valid,
     * or with status {@code 404 (Not Found)} if the following is not found,
     * or with status {@code 500 (Internal Server Error)} if the following couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PatchMapping(value = "/{id}", consumes = { "application/json", "application/merge-patch+json" })
    public ResponseEntity<Following> partialUpdateFollowing(
        @PathVariable(value = "id", required = false) final Long id,
        @RequestBody Following following
    ) throws URISyntaxException {
        log.debug("REST request to partial update Following partially : {}, {}", id, following);
        if (following.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, following.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!followingRepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        Optional<Following> result = followingRepository
            .findById(following.getId())
            .map(existingFollowing -> {
                if (following.getSince() != null) {
                    existingFollowing.setSince(following.getSince());
                }

                return existingFollowing;
            })
            .map(followingRepository::save);

        return ResponseUtil.wrapOrNotFound(
            result,
            HeaderUtil.createEntityUpdateAlert(applicationName, false, ENTITY_NAME, following.getId().toString())
        );
    }

    /**
     * {@code GET  /followings} : get all the followings.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of followings in body.
     */
    @GetMapping("")
    public List<Following> getAllFollowings() {
        log.debug("REST request to get all Followings");
        return followingRepository.findAll();
    }

    /**
     * {@code GET  /followings/:id} : get the "id" following.
     *
     * @param id the id of the following to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the following, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/{id}")
    public ResponseEntity<Following> getFollowing(@PathVariable("id") Long id) {
        log.debug("REST request to get Following : {}", id);
        Optional<Following> following = followingRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(following);
    }

    /**
     * {@code DELETE  /followings/:id} : delete the "id" following.
     *
     * @param id the id of the following to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFollowing(@PathVariable("id") Long id) {
        log.debug("REST request to delete Following : {}", id);
        followingRepository.deleteById(id);
        return ResponseEntity.noContent()
            .headers(HeaderUtil.createEntityDeletionAlert(applicationName, false, ENTITY_NAME, id.toString()))
            .build();
    }
}
