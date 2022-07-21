import classNames from 'classnames';
import React, { useState } from 'react';
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import {
  EditIcon,
} from '@chakra-ui/icons';
import { TodoListProps } from '../utils/types';

const Modal: React.FC = ({ addTodo, todos }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const validateName = (value: string) => {
    let error = '';
    if (!value) {
      error = 'Name is required';
    } else if (value.toLowerCase() !== 'naruto') {
      error = "Jeez! You're not a fan 😱";
    }
    return error;
  };

  const [input, setInput] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const isError = input === '';

  const createTodo = () => {
    const todo = {
      id: Math.random(),
      completed: false,
      title: input,
    };

    addTodo([todo, ...todos]);
    setInput('');
  };

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Button ml={4} ref={finalRef}>
        I will receive focus on close
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input ref={initialRef} placeholder="First name" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input placeholder="Last name" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Modal;