package com.strahov.twitterclone.web.rest;

import com.strahov.twitterclone.service.TweetService;
import com.strahov.twitterclone.service.dto.TweetDTO;
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
    public ResponseEntity<List<TweetDTO>> getTweetsByUsername(@PathVariable String username) {
        List<TweetDTO> tweets = tweetService.findTweetsByUsername(username);
        return ResponseEntity.ok(tweets);
    }
}
