package com.gom.beautiful_cats.controllers;

import com.gom.beautiful_cats.model.CatContent;
import com.gom.beautiful_cats.services.CatContentService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cats")
public class CatContentController {

    @Autowired
    private CatContentService catContentService;

    @GetMapping
    public ResponseEntity<List<CatContent>> findAll() {
        List<CatContent> catContents = catContentService.findAll();

        return ResponseEntity.ok(catContents);
    }

    @PostMapping("/add")
    public ResponseEntity<CatContent> addContent(@RequestBody CatContent catContent) {
        CatContent newContent = catContentService.addContent(catContent);
        return ResponseEntity.status(HttpStatus.CREATED).body(newContent);
    }
}
