import { useState } from 'react';
import axios from 'axios';
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

export default function SignupCard() {
  const [username, setUsername] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async () => {
    setIsLoading(true);
    setSubmitError('');

    try {
      const response = await axios.post('http://localhost:8080/add', {
        "username":username,
        "feedback":feedback
      });
      console.log('Feedback submitted:', response.data.id);
      if(response.data.id){
        
      }
      // Display success message to the user
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setSubmitError('Failed to submit feedback. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Nav title="Feedback Form" />
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Feedback Form
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="Username" isRequired>
                <FormLabel>User Name</FormLabel>
                <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
              </FormControl>
              <FormControl id="feedback" isRequired>
                <FormLabel>Feedback</FormLabel>
                <Input
                  width={400}
                  height={200}
                  type="text"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                />
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  isLoading={isLoading}
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  onClick={handleSubmit}>
                  <a href={`/feedbacks`}>Submit feedback</a>
                </Button>
                {submitError && (
                  <Text color="red.500" textAlign="center">
                    {submitError}
                  </Text>
                )}
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
