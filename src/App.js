
import React from 'react';
import './App.css';
import Header from './compoments/Layout/Header'
import TodoList from './compoments/TodoList';

function App() {
 return (
    <div className="todo-container">
      <div className="todo-body">
        <div className="todo-main">
          <Header />
          <TodoList />
        </div>
      </div>
    </div>
 ); 
}

export default App;
