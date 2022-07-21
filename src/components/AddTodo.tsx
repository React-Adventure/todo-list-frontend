import classNames from 'classnames';
import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  Input,
  IconButton,
} from '@chakra-ui/react';
import {
  EditIcon,
} from '@chakra-ui/icons';
import { TodoListProps } from '../utils/types';

const AddTodo: React.FC = ({ addTodo, todos }) => {
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
    <FormControl className="add-todo-form">
      <FormLabel justifyContent="center">Add new todo</FormLabel>
      <div className="add-todo">
        <Input
          type="text"
          value={input}
          onChange={handleInputChange}
        />
        <IconButton
          aria-label="Add todo"
          onClick={createTodo}
          icon={<EditIcon />}
          marginLeft="30px"
        />
      </div>
      {!isError ? (
        <FormHelperText>
          We wll never share your email. Just do it
        </FormHelperText>
      ) : (
        <FormErrorMessage>
          Email is required.
        </FormErrorMessage>
      )}
      {/* <Button
        mt={4}
        colorScheme="teal"
        isLoading={props.isSubmitting}
        type="submit"
      >
        Submit
      </Button> */}
    </FormControl>
  );
};

export default AddTodo;