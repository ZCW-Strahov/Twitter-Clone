package com.strahov.twitterclone.web.rest;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry
            .addMapping("/api/**") // Allow CORS for specific endpoint
            .allowedOrigins("http://localhost:3001") // Allow requests from this origin
            .allowedMethods("GET", "POST", "PUT", "DELETE") // Allowed HTTP methods
            .allowedHeaders("*"); // Allowed headers
    }
}
