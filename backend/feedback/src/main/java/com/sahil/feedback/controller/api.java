package com.sahil.feedback.controller;


import com.sahil.feedback.BEANS.feedbackBEAN;
import com.sahil.feedback.repoistory.feedbackREPO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@RestController()
@CrossOrigin(origins = "http://localhost:5173")
public class  api {

    @Autowired
    private feedbackREPO repo;

    @PostMapping("/add")
    public feedbackBEAN NewFeedback(@RequestBody feedbackBEAN feedback){
    feedback.setTimestamp(Timestamp.valueOf(LocalDateTime.now()));
    return repo.save(feedback);
    }

    @GetMapping("/feedbacks")
    public List<feedbackBEAN> feedbacks(){
        return repo.findAll();
    }

     @CrossOrigin(origins = "http://localhost:5173")
    @DeleteMapping("/delete/{id}")
    public void Delete(@PathVariable String id){
        repo.deleteById(Long.parseLong(id));
    }

    @GetMapping("/feedback/{id}")
    public feedbackBEAN getbyid(@PathVariable String id) {
       return repo.findById(Long.parseLong(id)).get();
    }

}
