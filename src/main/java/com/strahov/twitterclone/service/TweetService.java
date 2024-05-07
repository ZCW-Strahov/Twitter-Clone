package com.strahov.twitterclone.service;

import com.strahov.twitterclone.domain.Tweet;
import com.strahov.twitterclone.repository.TweetRepository;
import com.strahov.twitterclone.service.dto.TweetDTO;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class TweetService {

    private final TweetRepository tweetRepository;

    @Autowired
    public TweetService(TweetRepository tweetRepository) {
        this.tweetRepository = tweetRepository;
    }

    public List<TweetDTO> findTweetsByUsername(String username) {
        return tweetRepository.findByUsername(username).stream().map(this::convertToDto).collect(Collectors.toList());
    }

    private TweetDTO convertToDto(Tweet tweet) {
        TweetDTO dto = new TweetDTO();
        dto.setId(tweet.getId());
        dto.setContent(tweet.getContent());
        dto.setUsername(tweet.getUserProfile().getUser().getLogin());
        return dto;
    }
}
