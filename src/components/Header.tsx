interface HeaderProps {
  text: string;
  theme: string;
  inputRef: React.RefObject<HTMLInputElement | null>;
  ToggleTheme: () => void;
  SetNewTodo: (e: React.FormEvent) => void;
  handleTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Header = ({
  text,
  theme,
  ToggleTheme,
  SetNewTodo,
  handleTextChange,
  inputRef,
}: HeaderProps) => {
  return (
    <header className={theme}>
      <div className="header-h1">
        <h1>TODO</h1>
        <button
          className={`${theme} button-change-theme`}
          onClick={ToggleTheme}
        >
          Theme change: {theme}
        </button>
      </div>
      <div className="todo-starter">
        <form className="starter-task" onSubmit={SetNewTodo}>
          <input
            ref={inputRef}
            className="create-new-todo"
            placeholder="Create a new todo"
            onChange={handleTextChange}
            value={text}
          />
        </form>
      </div>
    </header>
  );
};

export default Header;
