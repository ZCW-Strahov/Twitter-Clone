package com.strahov.twitterclone.service;

import com.strahov.twitterclone.domain.Tweet;
import com.strahov.twitterclone.repository.TweetRepository;
import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class TweetService {

    private final TweetRepository tweetRepository;

    public TweetService(TweetRepository tweetRepository) {
        this.tweetRepository = tweetRepository;
    }

    public List<Tweet> findTweetsByUsername(String username) {
        return tweetRepository.findByUsername(username);
    }
}
