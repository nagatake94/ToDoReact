import React, { useState } from "react";
import "./style.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [toDo, setToDo] = useState(["永田"]);
  const [dones, setDone] = useState(["永田"]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodo = [...toDo, todoText];
    setToDo(newTodo);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodo = [...toDo];
    newTodo.splice(index, 1);
    setToDo(newTodo);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodo = [...toDo];
    newIncompleteTodo.splice(index, 1);

    const newCompleteTodo = [...dones, toDo[index]];
    setToDo(newIncompleteTodo);
    setDone(newCompleteTodo);
  };

  const onClickBack = (index) => {
    const newDone = [...dones];
    newDone.splice(index, 1);

    const newBackTodo = [...toDo, dones[index]];
    setDone(newDone);
    setToDo(newBackTodo);
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="ToDoを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">ToDo</p>
        <ul>
          {toDo.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">Done</p>
        <ul>
          {dones.map((done, index) => {
            return (
              <div className="list-row">
                <li>{done}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
