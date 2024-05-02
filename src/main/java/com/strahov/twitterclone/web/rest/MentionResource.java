package com.strahov.twitterclone.web.rest;

import com.strahov.twitterclone.domain.Mention;
import com.strahov.twitterclone.repository.MentionRepository;
import com.strahov.twitterclone.web.rest.errors.BadRequestAlertException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import tech.jhipster.web.util.HeaderUtil;
import tech.jhipster.web.util.PaginationUtil;
import tech.jhipster.web.util.ResponseUtil;

/**
 * REST controller for managing {@link com.strahov.twitterclone.domain.Mention}.
 */
@RestController
@RequestMapping("/api/mentions")
@Transactional
public class MentionResource {

    private final Logger log = LoggerFactory.getLogger(MentionResource.class);

    private static final String ENTITY_NAME = "mention";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final MentionRepository mentionRepository;

    public MentionResource(MentionRepository mentionRepository) {
        this.mentionRepository = mentionRepository;
    }

    /**
     * {@code POST  /mentions} : Create a new mention.
     *
     * @param mention the mention to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new mention, or with status {@code 400 (Bad Request)} if the mention has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("")
    public ResponseEntity<Mention> createMention(@RequestBody Mention mention) throws URISyntaxException {
        log.debug("REST request to save Mention : {}", mention);
        if (mention.getId() != null) {
            throw new BadRequestAlertException("A new mention cannot already have an ID", ENTITY_NAME, "idexists");
        }
        mention = mentionRepository.save(mention);
        return ResponseEntity.created(new URI("/api/mentions/" + mention.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, false, ENTITY_NAME, mention.getId().toString()))
            .body(mention);
    }

    /**
     * {@code PUT  /mentions/:id} : Updates an existing mention.
     *
     * @param id the id of the mention to save.
     * @param mention the mention to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated mention,
     * or with status {@code 400 (Bad Request)} if the mention is not valid,
     * or with status {@code 500 (Internal Server Error)} if the mention couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/{id}")
    public ResponseEntity<Mention> updateMention(@PathVariable(value = "id", required = false) final Long id, @RequestBody Mention mention)
        throws URISyntaxException {
        log.debug("REST request to update Mention : {}, {}", id, mention);
        if (mention.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, mention.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!mentionRepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        mention = mentionRepository.save(mention);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, false, ENTITY_NAME, mention.getId().toString()))
            .body(mention);
    }

    /**
     * {@code PATCH  /mentions/:id} : Partial updates given fields of an existing mention, field will ignore if it is null
     *
     * @param id the id of the mention to save.
     * @param mention the mention to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated mention,
     * or with status {@code 400 (Bad Request)} if the mention is not valid,
     * or with status {@code 404 (Not Found)} if the mention is not found,
     * or with status {@code 500 (Internal Server Error)} if the mention couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PatchMapping(value = "/{id}", consumes = { "application/json", "application/merge-patch+json" })
    public ResponseEntity<Mention> partialUpdateMention(
        @PathVariable(value = "id", required = false) final Long id,
        @RequestBody Mention mention
    ) throws URISyntaxException {
        log.debug("REST request to partial update Mention partially : {}, {}", id, mention);
        if (mention.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, mention.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!mentionRepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        Optional<Mention> result = mentionRepository
            .findById(mention.getId())
            .map(existingMention -> {
                if (mention.getContent() != null) {
                    existingMention.setContent(mention.getContent());
                }
                if (mention.getPicture() != null) {
                    existingMention.setPicture(mention.getPicture());
                }
                if (mention.getPictureContentType() != null) {
                    existingMention.setPictureContentType(mention.getPictureContentType());
                }

                return existingMention;
            })
            .map(mentionRepository::save);

        return ResponseUtil.wrapOrNotFound(
            result,
            HeaderUtil.createEntityUpdateAlert(applicationName, false, ENTITY_NAME, mention.getId().toString())
        );
    }

    /**
     * {@code GET  /mentions} : get all the mentions.
     *
     * @param pageable the pagination information.
     * @param eagerload flag to eager load entities from relationships (This is applicable for many-to-many).
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of mentions in body.
     */
    @GetMapping("")
    public ResponseEntity<List<Mention>> getAllMentions(
        @org.springdoc.core.annotations.ParameterObject Pageable pageable,
        @RequestParam(name = "eagerload", required = false, defaultValue = "true") boolean eagerload
    ) {
        log.debug("REST request to get a page of Mentions");
        Page<Mention> page;
        if (eagerload) {
            page = mentionRepository.findAllWithEagerRelationships(pageable);
        } else {
            page = mentionRepository.findAll(pageable);
        }
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), page);
        return ResponseEntity.ok().headers(headers).body(page.getContent());
    }

    /**
     * {@code GET  /mentions/:id} : get the "id" mention.
     *
     * @param id the id of the mention to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the mention, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/{id}")
    public ResponseEntity<Mention> getMention(@PathVariable("id") Long id) {
        log.debug("REST request to get Mention : {}", id);
        Optional<Mention> mention = mentionRepository.findOneWithEagerRelationships(id);
        return ResponseUtil.wrapOrNotFound(mention);
    }

    /**
     * {@code DELETE  /mentions/:id} : delete the "id" mention.
     *
     * @param id the id of the mention to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMention(@PathVariable("id") Long id) {
        log.debug("REST request to delete Mention : {}", id);
        mentionRepository.deleteById(id);
        return ResponseEntity.noContent()
            .headers(HeaderUtil.createEntityDeletionAlert(applicationName, false, ENTITY_NAME, id.toString()))
            .build();
    }
}
