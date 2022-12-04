import React, { useState } from "react";
import {
  FormControl,
  Stack,
  Box,
  Flex,
  useColorModeValue,
  Image,
  Input,
  InputGroup,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";

import { includes } from "ramda";

export const NeedItem = ({
  title,
  description,
  image,
  selectedNeed,
  setSelectedNeed,
}) => (
  <Flex
    borderRadius='lg'
    m={6}
    p={3}
    bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
    cursor='pointer'
    border='2px'
    borderColor={includes(title, selectedNeed) ? "#38a169" : "transparent"}
    _hover={{ border: "2px", borderColor: "#38a169" }}
    onClick={() => setSelectedNeed(title)}
  >
    <Image
      borderColor='whiteAlpha.800'
      borderWidth={2}
      borderStyle='solid'
      w='120px'
      h='120px'
      mr='4'
      display='inline-block'
      borderRadius='full'
      objectFit='cover'
      src={image}
      alt='Profile image'
    />
    <Flex flexDirection='column'>
      <Box flexGrow={1}>{title}</Box>
      <Box flexGrow={1}>{description}</Box>
    </Flex>
  </Flex>
);

export const ContactForm = ({ sendContactForm }) => {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);

  const isError = input === "";
  return (
    <Box mt={6}>
      <form onSubmit={sendContactForm}>
        <Stack spacing={4}>
          <FormControl isRequired>
            <InputGroup display='flex' flexDirection='column'>
              <FormLabel htmlFor='email'>Email</FormLabel>
              <Input
                id='email'
                type='email'
                value={input}
                onChange={handleInputChange}
              />
            </InputGroup>

            <InputGroup display='flex' flexDirection='column' mt={2}>
              <FormLabel htmlFor='subject'>Objet</FormLabel>
              <Input
                id='subject'
                type='subject'
                value={input}
                onChange={handleInputChange}
                disabled={true}
                placeholder='Développement informatique'
              />
            </InputGroup>

            <InputGroup display='flex' flexDirection='column' mt={2}>
              <FormLabel htmlFor='text'>Message</FormLabel>
              <Textarea placeholder='Here is a sample placeholder' />
            </InputGroup>
          </FormControl>
        </Stack>
      </form>
    </Box>
  );
};
