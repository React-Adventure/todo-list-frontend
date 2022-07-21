import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import TodosPage from '../pages/ToDoPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<TodosPage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
