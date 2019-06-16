import React, { Component } from "react";
import Todos from "./todos";
import AddTask from "./AddTask";
class App extends Component {
  state = {
    todos: [
      { id: 0, content: "buy batteries" },
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

  addTask = (newTask)=> {
    newTask.id = this.state.todos.length + 1;
    let todos = [...this.state.todos, newTask];
    this.setState({
      todos: todos
    })
  }

  render() {
    return (
      <div className="todo-App container">
        <h1 className="blue-text">
          At the end of the day... can you say you're proud of yourself? 
        </h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTask addTask={this.addTask}/>
      </div>
    );
  }
}

export default App;
