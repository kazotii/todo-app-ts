import TodoItem from "./TodoItem";
import type { ItemProps } from "./types";

function Item({tasks, deleteFunc, toggleFunc}: ItemProps){
  return (
    <ul className="ul-todo-list">
      {tasks.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          deleteFunc={deleteFunc}
          toggleFunc={toggleFunc}
        />
      ))}
    </ul>
  );
}

export default Item;