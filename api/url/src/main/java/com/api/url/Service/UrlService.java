package com.api.url.Service;

import org.springframework.stereotype.Service;
import com.api.url.Entity.UrlEntity;
import com.api.url.Repository.UrlRepo;

import java.util.List;

@Service
public class UrlService {
    private final UrlRepo repo;

    public UrlService(UrlRepo repo) {
        this.repo = repo;
    }

    public UrlEntity saveUrl(String url) {
        if (url == null || url.trim().isEmpty()) {
            throw new IllegalArgumentException("URL cannot be null or empty");
        }
        UrlEntity urlEntity = new UrlEntity();
        urlEntity.setUrl(url);
        return repo.save(urlEntity);
    }

    public List<UrlEntity> getAllUrls() {
        return repo.findAll();
    }
}
