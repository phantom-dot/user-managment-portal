import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "../navbar/navbar";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
} from "@chakra-ui/react";
import { DeleteIcon} from "@chakra-ui/icons";

export default function Feedbacks() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [feedbacksPerPage] = useState(7); // Number of feedbacks to display per page

  useEffect(() => {
    async function fetchFeedbacks() {
      try {
        const response = await axios.get("http://localhost:8080/feedbacks");
        setFeedbacks(response.data);
      } catch (error) {
        console.error("Error fetching feedbacks:", error);
      }
    }
    fetchFeedbacks();
  }, []);

  // Get current feedbacks
  const indexOfLastFeedback = currentPage * feedbacksPerPage;
  const indexOfFirstFeedback = indexOfLastFeedback - feedbacksPerPage;
  const currentFeedbacks = feedbacks.slice(
    indexOfFirstFeedback,
    indexOfLastFeedback
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Delete feedback
  const deleteFeedback = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/delete/${id}`);
      setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id));
    } catch (error) {
      console.error("Error deleting feedback:", error);
    }
  };

  return (
    <div>
      <Nav title={<a href={`/`}>Add more feedbacks</a>} />
      <TableContainer>
        <Table size="lg">
          <Thead>
            <Tr>
              <Th>Username</Th>
              <Th>Feedback</Th>
              <Th>Timestamp</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {currentFeedbacks.map((feedback) => (
              <Tr key={feedback.id}>
                <Td>{feedback.username}</Td>
                <Td>{feedback.feedback}</Td>
                <Td>{feedback.timestamp}</Td>
                <Td>
                  <Button onClick={() => deleteFeedback(feedback.id)}>
                    <DeleteIcon color={"red"} />
                  </Button>
                </Td>
              
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <div>
        {/* Pagination buttons */}
        {Array.from({
          length: Math.ceil(feedbacks.length / feedbacksPerPage),
        }).map((_, index) => (
          <Button m={4} key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </Button>
        ))}
      </div>
    </div>
  );
}
