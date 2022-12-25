import React from "react";
import Todo from "./Todo";
import "./TodoList.css";

const TodoList = ({
  todos,
  onCheckToggle,
  onInsertToggle,
  setTodos,
  onChangeSelectedTodo,
  selectedTodo,
}) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => {
        console.log(todo);
        return (
          <Todo
            todo={todo}
            key={todo.id}
            setTodos={setTodos}
            onCheckToggle={onCheckToggle}
            onInsertToggle={onInsertToggle}
            onChangeSelectedTodo={onChangeSelectedTodo}
            selectedTodo={selectedTodo}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
