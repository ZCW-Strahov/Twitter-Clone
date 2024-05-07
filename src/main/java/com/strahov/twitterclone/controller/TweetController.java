package com.strahov.twitterclone.controller;

import com.strahov.twitterclone.domain.Tweet;
import com.strahov.twitterclone.service.TweetService;
import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class TweetController {

    private final TweetService tweetService;

    public TweetController(TweetService tweetService) {
        this.tweetService = tweetService;
    }

    @GetMapping("/tweets/by-username/{username}")
    public ResponseEntity<List<Tweet>> getTweetsByUsername(@PathVariable String username) {
        List<Tweet> tweets = tweetService.findTweetsByUsername(username);
        return ResponseEntity.ok(tweets);
    }
}
