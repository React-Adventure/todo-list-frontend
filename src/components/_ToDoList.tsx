import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { IToDo } from '../utils/interfaces';
import { TodoListProps } from '../utils/types';

const ToDoList: React.FC<TodoListProps> = (props: TodoListProps) => {
  const { onRemove, onToggle, todos } = props;
  if (todos.length === 0) {
    return <p className="center">No todos yet</p>;
  }

  const removeHandler = (event: React.MouseEvent, id: number) => {
    event.preventDefault();
    onRemove(id);
  };

  return (
    <ul className="todo-list list-size">
      {todos.map((todo) => {
        return (
          <li
            key={todo.id}
            className={classNames('todo', {
              completed: todo.completed,
            })}
          >
            <label>
              <input type="checkbox" checked={todo.completed} onChange={onToggle.bind(null, todo.id)} />
              <span className="">{todo.title}</span>
              <i className="material-icons red-text" onClick={(event) => removeHandler(event, todo.id)}>delete</i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default ToDoList;