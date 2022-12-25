import React, { useEffect, useState } from "react";
import "./TodoInsert.css";
import { MdAddCircle } from "react-icons/md";
import { TiTrash, TiPencil } from "react-icons/ti";
import { v4 as uuidv4 } from "uuid";
const TodoInsert = ({
  onInsertToggle,
  setTodos,
  selectedTodo,
  onRemove,
  onUpdate,
}) => {
  const [title, setTitle] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      id: uuidv4(),
      text: title,
      checked: false,
    };

    setTodos((prev) => {
      return [...prev, newTodo];
    });
    onInsertToggle();
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  // selectedTodo
  useEffect(() => {
    if (selectedTodo) {
      setTitle(selectedTodo.text);
    }
  }, [selectedTodo]);

  return (
    <>
      <div className="background" onClick={onInsertToggle}>
        background
      </div>
      <form
        onSubmit={
          selectedTodo
            ? () => {
                onUpdate(selectedTodo.id, selectedTodo.text);
              }
            : onSubmitHandler
        }
      >
        <input
          placeholder="TODO를 입력해주세요"
          value={title}
          onChange={onChangeTitle}
        />
        {selectedTodo ? (
          <div className="rewrite">
            <TiPencil
              onClick={() => onUpdate(selectedTodo.id, selectedTodo.text)}
            />
            <TiTrash
              onClick={() => {
                onRemove(selectedTodo.id);
              }}
            />
          </div>
        ) : (
          <button type="submit">
            <MdAddCircle />
          </button>
        )}
      </form>
    </>
  );
};

export default TodoInsert;
