package com.sahil.feedback.BEANS;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.sql.Timestamp;

@Entity
public class feedbackBEAN {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
   private String Username;
   private String feedback;
   private Timestamp timestamp;

    public feedbackBEAN() {
    }

    public feedbackBEAN(Long id, String username, String feedback, Timestamp timestamp) {
        this.id = id;
        Username = username;
        this.feedback = feedback;
        this.timestamp = timestamp;
    }

    public void setTimestamp(Timestamp timestamp) {
        this.timestamp = timestamp;
    }
}
