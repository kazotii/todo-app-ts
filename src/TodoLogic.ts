import { useMemo, useReducer, useState } from "react";
import { useEffect } from "react";
import { useTheme } from "./ThemeContext";
import { useInputFocus } from "./InputFocus";
import { myReducer } from "./reducer";
import type { Item } from "./types";
import type { FilterStatus } from "./types";
import React from "react";

function useTodoLogic() {
  const { theme, ToggleTheme } = useTheme();
  const { inputRef, focusInput } = useInputFocus();
  const [text, setText] = useState("");
  const [activeFilter, setFilter] = useState<FilterStatus>("all");
  const [todo, dispatch] = useReducer(myReducer, [], () => {
    const savedTodo = localStorage.getItem("todo");
    if (savedTodo) {
      return JSON.parse(savedTodo) as Item[];
    }
    return [];
  });

  function SetNewTodo(e: React.FormEvent) {
    e.preventDefault();
    const newTodo = { text: text, id: Date.now(), completed: false };
    dispatch({ type: "ADD", payload: newTodo });
    setText("");
    focusInput();
  }

  function DuplicateTodo(id: number) {
    dispatch({ type: "DUPLICATE", payload: id });
  }

  function ToggleId(id: number) {
    dispatch({ type: "TOGGLED", payload: id });
  }

  function DeleteId(id: number) {
    dispatch({ type: "DELETED", payload: id });
  }

  function ClearCompleted() {
    dispatch({ type: "CLEARED" });
  }

  const counter = useMemo(() => {
    console.log("счетчик пошел");
    return todo.filter((task) => task.completed === false).length;
  }, [todo]);

  const filteredTodos = useMemo(() => {
    let resultTodo = todo;
    switch (activeFilter) {
      case "all":
        resultTodo = todo;
        break;
      case "active":
        resultTodo = todo.filter((task) => task.completed === false);
        break;
      case "completed":
        resultTodo = todo.filter((task) => task.completed === true);
        break;
    }
    return resultTodo;
  }, [activeFilter, todo]);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  useEffect(() => {
    focusInput();
  }, [focusInput]);

  function handleTextChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  return {
    useEffect,
    handleTextChange,
    DeleteId,
    ToggleId,
    SetNewTodo,
    DuplicateTodo,
    setFilter,
    setText,
    ClearCompleted,
    ToggleTheme,
    useTheme,
    focusInput,
    theme,
    text,
    counter,
    activeFilter,
    filteredTodos,
    inputRef,
  };
}

export default useTodoLogic;