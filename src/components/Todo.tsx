import useTodoLogic from "../functions/useTodoLogic";
import { useTodoFunctions } from "../functions/useTodoFunctions";
import Header from "./Header";
import Main from "./Main";

function Todo() {
  const { todo, AddTodo, ToggleTodo, DeleteTodo, ClearCompleted } =
    useTodoFunctions();

  const {
    SetNewTodo,
    setFilter,
    handleTextChange,
    ToggleTheme,
    filteredTodos,
    activeFilter,
    theme,
    text,
    counter,
    inputRef,
  } = useTodoLogic(todo, AddTodo);

  return (
    <>
      <Header
        theme={theme}
        text={text}
        SetNewTodo={SetNewTodo}
        handleTextChange={handleTextChange}
        ToggleTheme={ToggleTheme}
        inputRef={inputRef}
      />
      <Main
        theme={theme}
        counter={counter}
        activeFilter={activeFilter}
        filteredTodos={filteredTodos}
        ToggleTodo={ToggleTodo}
        DeleteTodo={DeleteTodo}
        setFilter={setFilter}
        ClearCompleted={ClearCompleted}
      />
    </>
  );
}

export default Todo;