package com.api.url.Controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.api.url.Entity.UrlEntity;
import com.api.url.Service.UrlService;

import java.util.List;

@RestController
@RequestMapping("/api/urls")
@CrossOrigin(origins = "*")
public class UrlController {
    private final UrlService urlService;

    public UrlController(UrlService urlService) {
        this.urlService = urlService;
    }

    @PostMapping("/save")
    public ResponseEntity<UrlEntity> saveUrl(@RequestBody UrlEntity urlEntity) {
        if (urlEntity == null || urlEntity.getUrl() == null || urlEntity.getUrl().isEmpty()) {
            return ResponseEntity.badRequest().build(); // Return 400 Bad Request if the URL is null or empty
        }

        UrlEntity savedUrl = urlService.saveUrl(urlEntity.getUrl());
        return ResponseEntity.status(HttpStatus.CREATED).body(savedUrl);
    }

    @GetMapping("/all")
    public ResponseEntity<List<UrlEntity>> getAllUrls() {
        List<UrlEntity> urls = urlService.getAllUrls();
        if (urls.isEmpty()) {
            return ResponseEntity.noContent().build(); // Return 204 No Content if there are no URLs
        }
        return ResponseEntity.ok(urls);
    }
}
