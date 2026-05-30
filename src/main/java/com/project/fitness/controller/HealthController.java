package com.project.fitness.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class HealthController {

    @GetMapping("/")
    public Map<String, String> home() {

        Map<String, String> response = new HashMap<>();

        response.put("project", "Fitness Tracker Backend API");
        response.put("status", "Running");
        response.put("developer", "Pragya Dwivedi");
        response.put("swagger",
                "https://fitness-track-backend-vcwk.onrender.com/swagger-ui/index.html");

        return response;
    }
}