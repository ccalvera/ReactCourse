import React from "react";
import "./App.css";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";

const defaultTodos = [
  { text: "cortar cebolla", completed: "false" },
  { text: "lalalal", completed: "true" },
];

function App() {
  return (
    //Tambien se puede usar el React.Fragment con solo las flechas vacias <>
    <React.Fragment>
      <TodoCounter completed={16} total={20} />

      <TodoSearch />

      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
