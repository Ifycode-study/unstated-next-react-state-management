import Form from './components/Form';
import Todo from './components/Todo';
import { StoreContainer } from './components/hooks/store';

// App component
function App() {
  return (
    <StoreContainer.Provider>
        <Form />
        <Todo />
      </StoreContainer.Provider>
  );
}

export default App;
