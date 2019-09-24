import React from "react";

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <span
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            <p>
              <label>
                <input type="checkbox" />
                <span>{todo.content}</span>
              </label>
            </p>
          </span>
        </div>
      );
    })
  ) : (
      <p className="center">You have no todo's left, yay!</p>
    );
  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
