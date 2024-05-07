package com.strahov.twitterclone.web.rest;

import com.strahov.twitterclone.domain.Tweet;
import com.strahov.twitterclone.repository.TweetRepository;
import com.strahov.twitterclone.web.rest.errors.BadRequestAlertException;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
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
 * REST controller for managing {@link com.strahov.twitterclone.domain.Tweet}.
 */
@RestController
@RequestMapping("/api/tweets")
@Transactional
public class TweetResource {

    private final Logger log = LoggerFactory.getLogger(TweetController.class);

    private static final String ENTITY_NAME = "tweet";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final TweetRepository tweetRepository;

    public TweetResource(TweetRepository tweetRepository) {
        this.tweetRepository = tweetRepository;
    }

    /**
     * {@code POST  /tweets} : Create a new tweet.
     *
     * @param tweet the tweet to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new tweet, or with status {@code 400 (Bad Request)} if the tweet has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("")
    public ResponseEntity<Tweet> createTweet(@Valid @RequestBody Tweet tweet) throws URISyntaxException {
        log.debug("REST request to save Tweet : {}", tweet);
        if (tweet.getId() != null) {
            throw new BadRequestAlertException("A new tweet cannot already have an ID", ENTITY_NAME, "idexists");
        }
        tweet = tweetRepository.save(tweet);
        return ResponseEntity.created(new URI("/api/tweets/" + tweet.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, false, ENTITY_NAME, tweet.getId().toString()))
            .body(tweet);
    }

    /**
     * {@code PUT  /tweets/:id} : Updates an existing tweet.
     *
     * @param id the id of the tweet to save.
     * @param tweet the tweet to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated tweet,
     * or with status {@code 400 (Bad Request)} if the tweet is not valid,
     * or with status {@code 500 (Internal Server Error)} if the tweet couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/{id}")
    public ResponseEntity<Tweet> updateTweet(@PathVariable(value = "id", required = false) final Long id, @Valid @RequestBody Tweet tweet)
        throws URISyntaxException {
        log.debug("REST request to update Tweet : {}, {}", id, tweet);
        if (tweet.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, tweet.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!tweetRepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        tweet = tweetRepository.save(tweet);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, false, ENTITY_NAME, tweet.getId().toString()))
            .body(tweet);
    }

    /**
     * {@code PATCH  /tweets/:id} : Partial updates given fields of an existing tweet, field will ignore if it is null
     *
     * @param id the id of the tweet to save.
     * @param tweet the tweet to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated tweet,
     * or with status {@code 400 (Bad Request)} if the tweet is not valid,
     * or with status {@code 404 (Not Found)} if the tweet is not found,
     * or with status {@code 500 (Internal Server Error)} if the tweet couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PatchMapping(value = "/{id}", consumes = { "application/json", "application/merge-patch+json" })
    public ResponseEntity<Tweet> partialUpdateTweet(
        @PathVariable(value = "id", required = false) final Long id,
        @NotNull @RequestBody Tweet tweet
    ) throws URISyntaxException {
        log.debug("REST request to partial update Tweet partially : {}, {}", id, tweet);
        if (tweet.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, tweet.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!tweetRepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        Optional<Tweet> result = tweetRepository
            .findById(tweet.getId())
            .map(existingTweet -> {
                if (tweet.getContent() != null) {
                    existingTweet.setContent(tweet.getContent());
                }
                if (tweet.getPicture() != null) {
                    existingTweet.setPicture(tweet.getPicture());
                }
                if (tweet.getPictureContentType() != null) {
                    existingTweet.setPictureContentType(tweet.getPictureContentType());
                }
                if (tweet.getCreatedOn() != null) {
                    existingTweet.setCreatedOn(tweet.getCreatedOn());
                }
                if (tweet.getHashtag() != null) {
                    existingTweet.setHashtag(tweet.getHashtag());
                }

                return existingTweet;
            })
            .map(tweetRepository::save);

        return ResponseUtil.wrapOrNotFound(
            result,
            HeaderUtil.createEntityUpdateAlert(applicationName, false, ENTITY_NAME, tweet.getId().toString())
        );
    }

    /**
     * {@code GET  /tweets} : get all the tweets.
     *
     * @param pageable the pagination information.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of tweets in body.
     */
    @GetMapping("")
    public ResponseEntity<List<Tweet>> getAllTweets(@org.springdoc.core.annotations.ParameterObject Pageable pageable) {
        log.debug("REST request to get a page of Tweets");
        Page<Tweet> page = tweetRepository.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), page);
        return ResponseEntity.ok().headers(headers).body(page.getContent());
    }

    /**
     * {@code GET  /tweets/:id} : get the "id" tweet.
     *
     * @param id the id of the tweet to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the tweet, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/{id}")
    public ResponseEntity<Tweet> getTweet(@PathVariable("id") Long id) {
        log.debug("REST request to get Tweet : {}", id);
        Optional<Tweet> tweet = tweetRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(tweet);
    }

    /**
     * {@code DELETE  /tweets/:id} : delete the "id" tweet.
     *
     * @param id the id of the tweet to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTweet(@PathVariable("id") Long id) {
        log.debug("REST request to delete Tweet : {}", id);
        tweetRepository.deleteById(id);
        return ResponseEntity.noContent()
            .headers(HeaderUtil.createEntityDeletionAlert(applicationName, false, ENTITY_NAME, id.toString()))
            .build();
    }
}
