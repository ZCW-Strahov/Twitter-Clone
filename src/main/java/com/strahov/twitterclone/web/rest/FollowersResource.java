package com.strahov.twitterclone.web.rest;

import com.strahov.twitterclone.domain.Followers;
import com.strahov.twitterclone.repository.FollowersRepository;
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
 * REST controller for managing {@link com.strahov.twitterclone.domain.Followers}.
 */
@RestController
@RequestMapping("/api/followers")
@Transactional
public class FollowersResource {

    private final Logger log = LoggerFactory.getLogger(FollowersResource.class);

    private static final String ENTITY_NAME = "followers";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final FollowersRepository followersRepository;

    public FollowersResource(FollowersRepository followersRepository) {
        this.followersRepository = followersRepository;
    }

    /**
     * {@code POST  /followers} : Create a new followers.
     *
     * @param followers the followers to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new followers, or with status {@code 400 (Bad Request)} if the followers has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("")
    public ResponseEntity<Followers> createFollowers(@RequestBody Followers followers) throws URISyntaxException {
        log.debug("REST request to save Followers : {}", followers);
        if (followers.getId() != null) {
            throw new BadRequestAlertException("A new followers cannot already have an ID", ENTITY_NAME, "idexists");
        }
        followers = followersRepository.save(followers);
        return ResponseEntity.created(new URI("/api/followers/" + followers.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, false, ENTITY_NAME, followers.getId().toString()))
            .body(followers);
    }

    /**
     * {@code PUT  /followers/:id} : Updates an existing followers.
     *
     * @param id the id of the followers to save.
     * @param followers the followers to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated followers,
     * or with status {@code 400 (Bad Request)} if the followers is not valid,
     * or with status {@code 500 (Internal Server Error)} if the followers couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/{id}")
    public ResponseEntity<Followers> updateFollowers(
        @PathVariable(value = "id", required = false) final Long id,
        @RequestBody Followers followers
    ) throws URISyntaxException {
        log.debug("REST request to update Followers : {}, {}", id, followers);
        if (followers.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, followers.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!followersRepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        followers = followersRepository.save(followers);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, false, ENTITY_NAME, followers.getId().toString()))
            .body(followers);
    }

    /**
     * {@code PATCH  /followers/:id} : Partial updates given fields of an existing followers, field will ignore if it is null
     *
     * @param id the id of the followers to save.
     * @param followers the followers to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated followers,
     * or with status {@code 400 (Bad Request)} if the followers is not valid,
     * or with status {@code 404 (Not Found)} if the followers is not found,
     * or with status {@code 500 (Internal Server Error)} if the followers couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PatchMapping(value = "/{id}", consumes = { "application/json", "application/merge-patch+json" })
    public ResponseEntity<Followers> partialUpdateFollowers(
        @PathVariable(value = "id", required = false) final Long id,
        @RequestBody Followers followers
    ) throws URISyntaxException {
        log.debug("REST request to partial update Followers partially : {}, {}", id, followers);
        if (followers.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, followers.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!followersRepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        Optional<Followers> result = followersRepository
            .findById(followers.getId())
            .map(existingFollowers -> {
                if (followers.getSince() != null) {
                    existingFollowers.setSince(followers.getSince());
                }

                return existingFollowers;
            })
            .map(followersRepository::save);

        return ResponseUtil.wrapOrNotFound(
            result,
            HeaderUtil.createEntityUpdateAlert(applicationName, false, ENTITY_NAME, followers.getId().toString())
        );
    }

    /**
     * {@code GET  /followers} : get all the followers.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of followers in body.
     */
    @GetMapping("")
    public List<Followers> getAllFollowers() {
        log.debug("REST request to get all Followers");
        return followersRepository.findAll();
    }

    /**
     * {@code GET  /followers/:id} : get the "id" followers.
     *
     * @param id the id of the followers to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the followers, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/{id}")
    public ResponseEntity<Followers> getFollowers(@PathVariable("id") Long id) {
        log.debug("REST request to get Followers : {}", id);
        Optional<Followers> followers = followersRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(followers);
    }

    /**
     * {@code DELETE  /followers/:id} : delete the "id" followers.
     *
     * @param id the id of the followers to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFollowers(@PathVariable("id") Long id) {
        log.debug("REST request to delete Followers : {}", id);
        followersRepository.deleteById(id);
        return ResponseEntity.noContent()
            .headers(HeaderUtil.createEntityDeletionAlert(applicationName, false, ENTITY_NAME, id.toString()))
            .build();
    }
}
