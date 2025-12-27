import { useState } from "react"
import { useEffect } from "react"
import { useTheme } from "./ThemeContext"
import { useInputFocus } from "./InputFocus"
import type { Item } from "./types"
import type { FilterStatus } from "./types"
import React from "react"

function useTodoLogic(){
    const {theme, ToggleTheme} = useTheme()
    const {inputRef, focusInput} = useInputFocus()
    const [text, setText] = useState("")
    const [activeFilter, setFilter] = useState<FilterStatus>("all")
    const [todo, setTodo] = useState<Item[]>(() => {
        const savedTodo = localStorage.getItem('todo')
        if(savedTodo){
            return JSON.parse(savedTodo) as Item[]
        }
        return[]
    })
    
    function SetNewTodo(e: React.FormEvent){
        e.preventDefault()
        const newTodo = {text: text, id: Date.now(), completed: false}
        setTodo([...todo, newTodo])
        setText("")
        focusInput()
    }

    const counter = todo.filter((task) => task.completed === false).length
    let filteredTodos = todo
    switch(activeFilter){
        case 'all':
            filteredTodos = todo
            break;
        case 'active':
            filteredTodos = todo.filter((task) => task.completed === false) 
            break;
        case 'completed':
            filteredTodos = todo.filter((task) => task.completed === true)
            break
    }
    
    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(todo))
    }, [todo])

    useEffect(() => {
        focusInput()
    })

    function ToggleId(id:number){
        setTodo(
            todo.map((task) => {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
            } else {
                return task;
                }
            })
        )
    }

    function DeleteId(id:number){
        setTodo(
            todo.filter((task) => 
                task.id !== id)
        )
    }

    function ClearCompleted(){
        setTodo(todo.filter((task) => task.completed === false))
    }

    function handleTextChange(e: React.ChangeEvent<HTMLInputElement>){
        setText(e.target.value)
    }

    return(
        {useEffect, handleTextChange, DeleteId, ToggleId, SetNewTodo, setFilter, setText, ClearCompleted, ToggleTheme, useTheme, theme, text, counter, activeFilter, filteredTodos, focusInput, inputRef}
    )
}

export default useTodoLogic