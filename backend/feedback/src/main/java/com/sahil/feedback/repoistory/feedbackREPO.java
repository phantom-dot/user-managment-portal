package com.sahil.feedback.repoistory;

import com.sahil.feedback.BEANS.feedbackBEAN;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface feedbackREPO  extends JpaRepository<feedbackBEAN,Long> {
}
