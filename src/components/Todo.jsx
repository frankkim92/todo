import React from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

// import { TfiCheck, TfiCheckBox } from "react-icons/tfi";

import "./Todo.css";
const Todo = ({
  todo,
  onCheckToggle,
  onInsertToggle,
  setTodos,
  onChangeSelectedTodo,
}) => {
  const { text, checked, id } = todo;

  // 삭제하기
  // const onClickDelete = () => {
  //   setTodos((prev) =>
  //     prev.filter((t) => {
  //       return t.id !== id;
  //     })
  //   );
  // };

  return (
    <div className="Todo">
      {/* content라는 클래스도 넣을거고, 조건에 따라서 checked도 추가 할꺼임 */}
      <div className={`content ${checked ? "checked" : ""}`}>
        {checked ? (
          <MdCheckBox
            onClick={() => {
              onCheckToggle(id);
            }}
          />
        ) : (
          <MdCheckBoxOutlineBlank
            onClick={() => {
              onCheckToggle(id);
            }}
          />
        )}
        <div
          className="text"
          onClick={() => {
            console.log(todo);
            onChangeSelectedTodo(todo);

            onInsertToggle();
          }}
        >
          {" "}
          {text}
        </div>
        <button onClick={() => onInsertToggle()}>수정</button>
        {/* 삭제하기 */}
        {/* <button onClick={onClickDelete}>삭제</button> */}
      </div>
    </div>
  );
};

export default Todo;
