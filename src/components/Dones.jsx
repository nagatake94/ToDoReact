import React from "react";

export const Dones = (props) => {
  const { todos, onClickBack } = props;

  return (
    <div className="complete-area">
      <p className="title">Done</p>
      <ul>
        {todos.map((done, index) => {
          return (
            <div className="list-row">
              <li>{done}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
