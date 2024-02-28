package com.api.url.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.api.url.Entity.UrlEntity;

public interface UrlRepo extends JpaRepository<UrlEntity, Long> {
    // No need for any additional methods at the moment
}

