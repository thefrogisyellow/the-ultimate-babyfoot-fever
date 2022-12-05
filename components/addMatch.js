import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Stack,
  Box,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
} from '@chakra-ui/react';
import { AddIcon} from '@chakra-ui/icons';

export const AddMatch = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();
  // TODO: Ajouter la logique d'ajout d'un match
  return (
    <>
      <Button leftIcon={<AddIcon />} colorScheme='teal' onClick={onOpen}>
        Match
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px'>
            Ajouter un match
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing='24px'>
              <Box>
                <FormLabel htmlFor='username'>Nom du match</FormLabel>
                <Input
                  ref={firstField}
                  id='username'
                  defaultValue="match n°3"
                />
              </Box>

              <Box>
                <FormLabel htmlFor='url'>Url</FormLabel>
                <InputGroup>
                  <InputLeftAddon>http://</InputLeftAddon>
                  <Input
                    type='url'
                    id='url'
                    placeholder='Please enter domain'
                  />
                  <InputRightAddon>.com</InputRightAddon>
                </InputGroup>
              </Box>

              <Box>
                <FormLabel htmlFor='owner'>Selection du joueur</FormLabel>
                <Select id='owner' defaultValue='segun'>
                  <option value='segun'>Joueur 1</option>
                  <option value='kola'>Joueur 2</option>
                </Select>
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth='1px'>
            <Button variant='outline' mr={3} onClick={onClose}>
              Annuler
            </Button>
            <Button colorScheme='blue'>Ajouter</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};