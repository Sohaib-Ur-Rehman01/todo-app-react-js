import { useState } from "react";
import Addtodos from "./Components/AddTodo";
import DeleteTodo from "./Components/DeleteTodo";
import TodoList from "./TodoList";

import "./App.css";
import TodoItem from "./Components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);
  const addTodos = (inputText) => {
    if (inputText.trim() === "") return;
    const newTodo = {
      id: Date.now(),
      text: inputText,
    };
    setTodos([...todos, newTodo]);
    // setInput("");
    console.log(Date.now());
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const updateTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  return (
    <>
      <div className="container">
        <Addtodos onAdd={addTodos} />

        <TodoList todos={todos} onDelete={deleteTodo} onUpdate={updateTodo} />
      </div>
    </>
  );
}

export default App;
