package com.gom.beautiful_cats.repositories;

import com.gom.beautiful_cats.model.CatContent;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CatContentRepository extends JpaRepository<CatContent, Long> {
}
