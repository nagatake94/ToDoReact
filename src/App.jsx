import React from "react";
import "./style.css";

export const App = () => {
  return (
    <>
      <div className="input-area">
        <input placeholder="ToDoを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">ToDo</p>
        <ul>
          <div className="list-row">
            <li>永田</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">Done</p>
        <ul>
          <div className="list-row">
            <li>永田</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
};
