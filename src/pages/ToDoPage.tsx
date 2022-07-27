import React, { useState, useEffect } from 'react';
import { Icon, Wrap, WrapItem } from '@chakra-ui/react';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import TodoList from '../components/_ToDoList';
// import { TodoForm } from "../components/TodoForm";
import { IToDo } from '../utils/interfaces';
import ToDoItem from '../components/ToDoItem';
import AddTodo from '../components/AddTodo';

declare let confirm: (question: string) => boolean;

const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<IToDo[]>([]);

  const getTodos = async () => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as IToDo[];

    if (!saved.length) {
      const fetchedRes = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=20');
      const fetched = await fetchedRes.json();
      setTodos(fetched);
    } else {
      setTodos(saved);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addHandler = (title: string) => {
    const newTodo: IToDo = {
      title,
      id: Date.now(),
      completed: false,
    };

    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  };

  const toggleHandler = (id: number) => {
    setTodos((prev) => prev.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  };

  const removeHandler = (id: number) => {
    const shouldRemove = confirm('Are you sure that you want to delete element?');

    if (shouldRemove) {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }
  };

  return (
    <Wrap bgColor="#D7D5DB" padding="50px" justify="center" direction="column" align="center">
      {/* <TodoList
        todos={todos}
        onToggle={toggleHandler}
        onRemove={removeHandler}
      />
      <Icon as={MdSettings} /> */}

      <WrapItem width="100%" display="flex" justifyContent="center">
        <AddTodo addTodo={setTodos} todos={todos} />
      </WrapItem>

      <WrapItem>
        <ToDoItem
          todos={todos}
          onToggle={toggleHandler}
          onRemove={removeHandler}
        />
      </WrapItem>
    </Wrap>
  );
};

export default TodosPage;