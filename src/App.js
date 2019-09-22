import React, { useState } from "react";
import Todos from "./todos";
import AddTask from "./AddTask";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Caller from "./components/Caller";

function App() {
  const [todos, setTodos] = useState([{ id: 0, content: "buy batteries" }]);

  const deleteTodo = todoId => {
    setTodos(todos.filter(todo => {
      return todo.id !== todoId;
    }))
  };

  const addTask = newTask => {
    newTask.id = todos.length + 1;
    setTodos([...todos, newTask]);
  };

  return (
    <BrowserRouter>
      <div className="todo-App">
        <Navbar />
        <Route exact path="/About" component={About} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Caller" component={Caller} />
        <div className="container">
          <h1>
            At the end of the day... can you say you're proud of yourself?
          </h1>
          <Todos
            todos={todos}
            deleteTodo={deleteTodo}
            key={todos.id}
          />
          <AddTask addTask={addTask} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
