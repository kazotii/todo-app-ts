import { useMemo, useState } from "react";
import { useEffect } from "react";
import { useTheme } from "./useTheme";
import { useInputFocus } from "./useInputFocus";
import type { Item } from "./types";
import type { FilterStatus } from "./types";
import React from "react";

function useTodoLogic(todo:Item[], AddTodo:(text:string) => void) {
  const { theme, ToggleTheme } = useTheme();
  const { inputRef, focusInput } = useInputFocus();
  const [text, setText] = useState("");
  const [activeFilter, setFilter] = useState<FilterStatus>("all");

  function SetNewTodo(e: React.FormEvent) {
    e.preventDefault();
    AddTodo(text)
    setText("");
    focusInput();
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
    SetNewTodo,
    setFilter,
    setText,
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