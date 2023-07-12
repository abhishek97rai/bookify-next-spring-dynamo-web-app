package com.abhishek.bookservice.config;

import com.amazonaws.auth.AWSCredentialsProvider;
import com.amazonaws.auth.DefaultAWSCredentialsProviderChain;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AWSConfig {

    @Bean
    AWSCredentialsProvider getAwsCredentialsProvider() {
        return DefaultAWSCredentialsProviderChain.getInstance();
    }

}
