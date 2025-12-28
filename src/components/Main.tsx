import Item from "./Item";
import type { Item as TodoItem } from "../functions/types";
import FilterButton from "./FilterButton";
import type { FilterStatus } from "../functions/types";

interface MainProps {
  theme: string;
  counter: number;
  activeFilter: FilterStatus;
  filteredTodos: TodoItem[];
  ToggleTodo: (id: number) => void;
  DeleteTodo: (id: number) => void;
  setFilter: (status: FilterStatus) => void;
  ClearCompleted: () => void;
}

const Main = ({
  theme,
  counter,
  activeFilter,
  filteredTodos,
  ToggleTodo,
  DeleteTodo,
  setFilter,
  ClearCompleted,
}: MainProps) => {
  return (
    <main className={theme}>
      <div className="todo-list">
        <Item
          tasks={filteredTodos}
          deleteFunc={DeleteTodo}
          toggleFunc={ToggleTodo}
        />
      </div>
      <div className="todo-condition">
        <div className="todo-count">
          <span className="todo-list-count">{counter} items left</span>
        </div>
        <div className="todo-condition-buttons">
          <FilterButton
            text="All"
            value="all"
            setFil={setFilter}
            activeFilter={activeFilter}
          />
          <FilterButton
            text="Active"
            value="active"
            setFil={setFilter}
            activeFilter={activeFilter}
          />
          <FilterButton
            text="Completed"
            value="completed"
            setFil={setFilter}
            activeFilter={activeFilter}
          />
        </div>
        <button className="clear-completed" onClick={ClearCompleted}>
          Clear completed
        </button>
      </div>
    </main>
  );
};
export default Main;