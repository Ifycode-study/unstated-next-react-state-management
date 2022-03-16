import React, { useState } from 'react';
import { createContainer } from 'unstated-next';

// useForm hook
const useForm = () => {
  const [input, setInputValue] = useState('');
  const [name, setName] = useState('Ifycode');

  const handleInput = event => {
    setInputValue(event.target.value);
  };

  const updateName = event => {
    event.preventDefault();
    setName(input);
    setInputValue('');
  };

  return {
    input,
    name,
    handleInput,
    updateName,
  };
};

// Create a container for use across our application
const FormContainer = createContainer(useForm);

// Form component
const Form = () => {
  const form = FormContainer.useContainer();
  return (
    <div>
      <p>Hello! {form.name}</p>
      <div>
        <input
          type="text"
          value={form.input}
          onChange={form.handleInput}
        />
        <button onClick={form.updateName}>Save</button>
      </div>
    </div>
  );
};

// App component
function App() {
  return (
    <FormContainer.Provider>
      <Form />
   </FormContainer.Provider>
  );
}

export default App;
