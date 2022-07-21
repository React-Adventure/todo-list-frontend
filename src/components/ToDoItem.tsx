import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import {
  Flex, Stack, Checkbox, Box, Text,
} from '@chakra-ui/react';
import {
  DeleteIcon, MinusIcon, TriangleUpIcon, ChevronDownIcon,
} from '@chakra-ui/icons';
import { IToDo } from '../utils/interfaces';
import { TodoListProps } from '../utils/types';

const ToDoItem: React.FC<TodoListProps> = (props: TodoListProps) => {
  const { onRemove, onToggle, todos } = props;

  const removeHandler = (event: React.MouseEvent, id: number) => {
    event.preventDefault();
    onRemove(id);
  };

  return (
    <ul className="todo-list list-size">
      {todos.map((todo) => {
        return (
          <Stack
            key={todo.id}
            className={classNames('todo', {
              'todo-completed': todo.completed,
            })}
            direction="row"
          >
            <Box display="flex" alignItems="center">
              <Checkbox
                // icon={<ChevronDownIcon />}
                iconColor="whiteAlpha.700"
                className="todo-chbx"
                isChecked={todo.completed}
                sx={{ '[data-checked]': { borderColor: 'red' } }}
                onChange={onToggle.bind(null, todo.id)} 
              />
              <Text textOverflow="ellipsis" className="">{todo.title}</Text>
            </Box>
            <DeleteIcon color="red" onClick={(event) => removeHandler(event, todo.id)} />
          </Stack>
        );
      })}
    </ul>
  );
};

export default ToDoItem;