import { useState } from 'react';
import shortid from 'shortid';
import { createContainer } from 'unstated-next';

// useStore Hook
export const useStore = () => {
  // Construct a list that contains two default tasks
  const list = [
    { id: 1, title: 'Write code' },
    { id: 2, title: 'Practice guitar' }
  ];

  const [input, setValue] = useState('');
  // Let's set a legend -- wait for it -- dary default name that updates on form submit
  const [name, setName] = useState('Ifycode');
  const [todos, addTodo] = useState(list);
  const [item, setTodoItem] = useState('');

  //-- Used inside Form component --
  const handleInput = event => {
    setValue(event.target.value);
  };

  const updateName = event => {
    event.preventDefault();
    setName(input);
    setValue('');
  };
  //--------------------------------

  //-- Used inside Todo component --
  const handleTodo = event => {
    setTodoItem(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const value = {
      id: shortid.generate(),
      title: item
    }
    addTodo(todos.concat(value));
    setTodoItem('');
  };
  //---------------------------------

  return {
    input,
    name,
    handleInput,
    updateName,
    todos,
    item,
    handleTodo,
    handleSubmit
  };
}

// Create a container for use across our application
export const StoreContainer = createContainer(useStore);