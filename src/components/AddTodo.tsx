import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  Input,
  IconButton,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Modal,
  Select,
} from '@chakra-ui/react';
import {
  EditIcon,
} from '@chakra-ui/icons';
import { TodoListProps } from '../utils/types';
import { Priority } from '../utils/enums';

const AddTodo: React.FC = ({ addTodo, todos }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const selectRef = React.useRef(null);
  const errorRef = useRef(null);

  const validateName = (value: string) => {
    let error = '';

    if (!value) {
      error = 'Name is required';
    } else if (value.length > 50) {
      error = 'Todo name more than 50 characters. Make it shoter using decsription for additional info';
    }
    return error;
  };

  const [todoName, setTodoName] = useState('');
  const [todoDesc, setTodoDesc] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoName(e.target.value);
    setError(validateName(e.target.value));
  };

  const createTodo = () => {
    const todo = {
      id: Math.random(),
      completed: false,
      title: todoName,
      descr: todoDesc,
      priority: selectRef.current.value,
    };

    addTodo([todo, ...todos]);
    setTodoName('');
    setTodoDesc('');
    setError('');
  };

  // useEffect(() => {
  //   if (!error && todoName) {
  //     createTodo();
  //   }
  // }, [error, todoName]);

  return (
    <>
      <IconButton
        aria-label="Add todo"
        onClick={onOpen}
        icon={<EditIcon />}
        marginLeft="30px"
      />

      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add todo</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl isInvalid>
              <FormLabel>Name</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Todo name"
                value={todoName}
                onChange={handleInputChange}
              />
              {error
                && (
                <FormErrorMessage>
                  {error}
                </FormErrorMessage>
                )}
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Description (optional)</FormLabel>
              <Input
                value={todoDesc}
                placeholder="Description"
                onChange={(e) => {
                  setTodoDesc(e.target.value);
                }}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Priority</FormLabel>
              <Select
                ref={selectRef}
              >
                <option value="Minor">Minor</option>
                <option value="Major">Major</option>
                <option value="Critical">Critical</option>
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                setError(validateName(todoName));
                if (!error && todoName) {
                  createTodo();
                }
              }}
            >
              Add
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddTodo;