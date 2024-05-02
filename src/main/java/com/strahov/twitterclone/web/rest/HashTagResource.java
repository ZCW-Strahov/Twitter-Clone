package com.strahov.twitterclone.web.rest;

import com.strahov.twitterclone.domain.HashTag;
import com.strahov.twitterclone.repository.HashTagRepository;
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
 * REST controller for managing {@link com.strahov.twitterclone.domain.HashTag}.
 */
@RestController
@RequestMapping("/api/hash-tags")
@Transactional
public class HashTagResource {

    private final Logger log = LoggerFactory.getLogger(HashTagResource.class);

    private static final String ENTITY_NAME = "hashTag";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final HashTagRepository hashTagRepository;

    public HashTagResource(HashTagRepository hashTagRepository) {
        this.hashTagRepository = hashTagRepository;
    }

    /**
     * {@code POST  /hash-tags} : Create a new hashTag.
     *
     * @param hashTag the hashTag to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new hashTag, or with status {@code 400 (Bad Request)} if the hashTag has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("")
    public ResponseEntity<HashTag> createHashTag(@RequestBody HashTag hashTag) throws URISyntaxException {
        log.debug("REST request to save HashTag : {}", hashTag);
        if (hashTag.getId() != null) {
            throw new BadRequestAlertException("A new hashTag cannot already have an ID", ENTITY_NAME, "idexists");
        }
        hashTag = hashTagRepository.save(hashTag);
        return ResponseEntity.created(new URI("/api/hash-tags/" + hashTag.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, false, ENTITY_NAME, hashTag.getId().toString()))
            .body(hashTag);
    }

    /**
     * {@code PUT  /hash-tags/:id} : Updates an existing hashTag.
     *
     * @param id the id of the hashTag to save.
     * @param hashTag the hashTag to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated hashTag,
     * or with status {@code 400 (Bad Request)} if the hashTag is not valid,
     * or with status {@code 500 (Internal Server Error)} if the hashTag couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/{id}")
    public ResponseEntity<HashTag> updateHashTag(@PathVariable(value = "id", required = false) final Long id, @RequestBody HashTag hashTag)
        throws URISyntaxException {
        log.debug("REST request to update HashTag : {}, {}", id, hashTag);
        if (hashTag.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, hashTag.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!hashTagRepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        hashTag = hashTagRepository.save(hashTag);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, false, ENTITY_NAME, hashTag.getId().toString()))
            .body(hashTag);
    }

    /**
     * {@code PATCH  /hash-tags/:id} : Partial updates given fields of an existing hashTag, field will ignore if it is null
     *
     * @param id the id of the hashTag to save.
     * @param hashTag the hashTag to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated hashTag,
     * or with status {@code 400 (Bad Request)} if the hashTag is not valid,
     * or with status {@code 404 (Not Found)} if the hashTag is not found,
     * or with status {@code 500 (Internal Server Error)} if the hashTag couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PatchMapping(value = "/{id}", consumes = { "application/json", "application/merge-patch+json" })
    public ResponseEntity<HashTag> partialUpdateHashTag(
        @PathVariable(value = "id", required = false) final Long id,
        @RequestBody HashTag hashTag
    ) throws URISyntaxException {
        log.debug("REST request to partial update HashTag partially : {}, {}", id, hashTag);
        if (hashTag.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, hashTag.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!hashTagRepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        Optional<HashTag> result = hashTagRepository
            .findById(hashTag.getId())
            .map(existingHashTag -> {
                if (hashTag.getDescription() != null) {
                    existingHashTag.setDescription(hashTag.getDescription());
                }

                return existingHashTag;
            })
            .map(hashTagRepository::save);

        return ResponseUtil.wrapOrNotFound(
            result,
            HeaderUtil.createEntityUpdateAlert(applicationName, false, ENTITY_NAME, hashTag.getId().toString())
        );
    }

    /**
     * {@code GET  /hash-tags} : get all the hashTags.
     *
     * @param eagerload flag to eager load entities from relationships (This is applicable for many-to-many).
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of hashTags in body.
     */
    @GetMapping("")
    public List<HashTag> getAllHashTags(@RequestParam(name = "eagerload", required = false, defaultValue = "true") boolean eagerload) {
        log.debug("REST request to get all HashTags");
        if (eagerload) {
            return hashTagRepository.findAllWithEagerRelationships();
        } else {
            return hashTagRepository.findAll();
        }
    }

    /**
     * {@code GET  /hash-tags/:id} : get the "id" hashTag.
     *
     * @param id the id of the hashTag to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the hashTag, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/{id}")
    public ResponseEntity<HashTag> getHashTag(@PathVariable("id") Long id) {
        log.debug("REST request to get HashTag : {}", id);
        Optional<HashTag> hashTag = hashTagRepository.findOneWithEagerRelationships(id);
        return ResponseUtil.wrapOrNotFound(hashTag);
    }

    /**
     * {@code DELETE  /hash-tags/:id} : delete the "id" hashTag.
     *
     * @param id the id of the hashTag to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteHashTag(@PathVariable("id") Long id) {
        log.debug("REST request to delete HashTag : {}", id);
        hashTagRepository.deleteById(id);
        return ResponseEntity.noContent()
            .headers(HeaderUtil.createEntityDeletionAlert(applicationName, false, ENTITY_NAME, id.toString()))
            .build();
    }
}
