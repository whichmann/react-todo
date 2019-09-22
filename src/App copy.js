import React, { Component } from "react";
import Todos from "./todos";
import AddTask from "./AddTask";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Caller from "./components/Caller";

class App extends Component {
  state = {
    todos: [
      { id: 0, content: "buy batteries" }
      // { id: 2, content: "check Heat Signature" }
    ]
  };

  deleteTodo = todoId => {
    let todos = this.state.todos.filter(todo => {
      return todo.id !== todoId;
    });
    this.setState({
      todos: todos
    });
  };

  addTask = newTask => {
    newTask.id = this.state.todos.length + 1;
    let todos = [...this.state.todos, newTask];
    this.setState({
      todos: todos
    });
  };

  render() {
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
            <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} key={this.state.todos.id}/>
            <AddTask addTask={this.addTask} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
