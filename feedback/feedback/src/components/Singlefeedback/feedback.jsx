import React, { useState, useEffect } from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Nav from '../navbar/navbar';
import { useParams } from 'react-router-dom';

export default function SignupCard() {
  const { id } = useParams();
  const [feedbackData, setFeedbackData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define a function to fetch data from your API
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/feedback/${id}`)
        setFeedbackData(response);
        console.log(response)
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();

    // Cleanup function to cancel any pending fetch requests if the component unmounts
    return () => {
      // Cleanup logic (optional)
    };
  }, [id]); // Re-run effect whenever the id parameter changes

  return (
    <>
      <Nav title="Feedback Form" />
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            {loading ? (
              <Text>Loading...</Text>
            ) : feedbackData ? (
              <>
                <Box width={20}>{feedbackData.id}</Box>
                <Box width={20}>{feedbackData.feedback}</Box>
              </>
            ) : (
              <Text>No data found</Text>
            )}
          </Stack>
        </Box>
      </Flex>
    </>
  );
}
