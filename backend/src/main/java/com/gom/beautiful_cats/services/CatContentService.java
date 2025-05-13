package com.gom.beautiful_cats.services;

import com.gom.beautiful_cats.model.CatContent;
import com.gom.beautiful_cats.repositories.CatContentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CatContentService {

    @Autowired
    private CatContentRepository catContentRepository;

    public List<CatContent> findAll() {
        return catContentRepository.findAll();
    }

    public CatContent addContent(CatContent obj) {
        return catContentRepository.save(obj);
    }
}
