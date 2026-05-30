package com.project.fitness.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


import org.springframework.http.ResponseEntity;


@RestController
public class HealthController {

    @GetMapping("/")
    public String home() {
        return "Fitness Tracker Backend API is Running";
    }

    @GetMapping("/health")
    public String health() {
        return "OK";
    }
}