import React from "react";
import "./style.css";

export const App = () => {
  return (
    <>
      <div>
        <input placeholder="ToDoを入力" />
        <button>追加</button>
      </div>
      <div>
        <p>ToDo</p>
        <ul>
          <div>
            <li>永田</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div>
        <p>Done</p>
        <ul>
          <div>
            <li>永田</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
};
