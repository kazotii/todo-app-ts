import type { Item } from "./types";
import { useReducer } from "react";
import { myReducer } from "./myReducer";

export function useTodoFunctions(){
    const [todo, dispatch] = useReducer(myReducer, [], () => {
    const savedTodo = localStorage.getItem("todo");
    if (savedTodo) {
      return JSON.parse(savedTodo) as Item[];
    }
    return [];
    });

    function AddTodo(text:string){
      const newTodo = { text: text, id: Date.now(), completed: false };
      dispatch({ type: "ADD", payload: newTodo });
    }

    function DuplicateTodo(id: number) {
    dispatch({ type: "DUPLICATE", payload: id });
    }

    function ToggleTodo(id: number) {
    dispatch({ type: "TOGGLED", payload: id });
    }

    function DeleteTodo(id: number) {
    dispatch({ type: "DELETED", payload: id });
    }

    function ClearCompleted() {
    dispatch({ type: "CLEARED" });
    }

    return{
      todo, dispatch, DuplicateTodo, ToggleTodo, DeleteTodo, ClearCompleted, AddTodo
    }
}