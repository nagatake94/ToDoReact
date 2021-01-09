import React, { useState } from "react";
import "./style.css";
import { InputTodo } from "./components/InputTodo";
import { ToDos } from "./components/ToDos";
import { Dones } from "./components/Dones";

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
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={toDo.length >= 5}
      />
      {toDo.length >= 5 && (
        <p style={{ color: "red" }}>※上限は5個まで。消化せなあかん！</p>
      )}
      <ToDos
        todos={toDo}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <Dones todos={dones} onClickBack={onClickBack} />
    </>
  );
};
