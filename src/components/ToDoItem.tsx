import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import {
  Flex, Stack, Checkbox, Box, Text, Tooltip, Heading, Input,
} from '@chakra-ui/react';
import {
  DeleteIcon, MinusIcon, TriangleUpIcon, ChevronDownIcon,
} from '@chakra-ui/icons';
import { IToDo } from '../utils/interfaces';
import { TodoListProps } from '../utils/types';
import { Priority, PriorityColor } from '../utils/enums';

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
            <Box display="flex" alignItems="center" width="80%">
              <Checkbox
                // icon={<ChevronDownIcon />}
                iconColor="whiteAlpha.700"
                className="todo-chbx"
                isChecked={todo.completed}
                sx={{ '[data-checked]': { borderColor: 'red' } }}
                onChange={onToggle.bind(null, todo.id)}
              />
              <Box width="90%">
                <Heading textOverflow="ellipsis" as="h4" size="md" className="">{todo.title}</Heading>
                <Text textOverflow="ellipsis" className="">{todo.descr || 'sdfisdofijsoidfjs sdiofjsodifj'}</Text>
                <Input type="text"></Input>
              </Box>
            </Box>
            <Box display="flex" alignItems="center">
              <Tooltip hasArrow label="Search places" placement="top">
                <span style={{
                  flexShrink: '0', width: '16px', height: '16px', backgroundColor: `${PriorityColor[todo.priority] || PriorityColor.Minor}`, borderRadius: '5px', marginRight: '10px',
                }}
                />
              </Tooltip>
              <DeleteIcon color="#d68383" onClick={(event) => removeHandler(event, todo.id)} />
            </Box>
          </Stack>
        );
      })}
    </ul>
  );
};

export default ToDoItem;