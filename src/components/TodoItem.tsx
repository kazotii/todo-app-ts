import type { TodoItemProps } from "../functions/types";
import { useTheme } from "../functions/useTheme";

function TodoItem({ item, deleteFunc, toggleFunc }: TodoItemProps) {
  const { theme } = useTheme();
  return (
    <li
      className={`${theme} li-todo-list ${
        item.completed ? "li-completed" : ""
      }`}
    >
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => {
          toggleFunc(item.id);
        }}
      />
      <span>{item.text}</span>
      <button
        className={`${theme} delete-button`}
        onClick={() => {
          deleteFunc(item.id);
        }}
      >
        <span>x</span>
      </button>
    </li>
  );
}
export default TodoItem;
