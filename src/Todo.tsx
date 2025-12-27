import Item from "./Item";
import FilterButton from "./FilterButton";
import useTodoLogic from "./TodoLogic";

function Todo(){
    const {
        filteredTodos,
        DeleteId,
        ToggleId,
        ClearCompleted,
        SetNewTodo,
        setFilter,
        handleTextChange,
        ToggleTheme,
        activeFilter,
        theme,
        text,
        counter,
        inputRef
    } = useTodoLogic()

    return(
        <> 
            <header className={theme}>
                <div className="header-h1">
                    <h1>TODO</h1>
                    <button className={`${theme} button-change-theme`} onClick={ToggleTheme}>Theme change: {theme}</button>
                </div>
                <div className="todo-starter">
                    <form className="starter-task" onSubmit={SetNewTodo} >
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
            <main className={theme}>
                <div className="todo-list">
                    <Item tasks={filteredTodos} deleteFunc={DeleteId} toggleFunc={ToggleId}/>
                </div>

                <div className="todo-condition">
                    <div className="todo-count">
                        <span className="todo-list-count">{counter} items left</span>
                    </div>
                    <div className="todo-condition-buttons">
                        <FilterButton text='All' value='all' setFil={setFilter} activeFilter={activeFilter}/>
                        <FilterButton text='Active' value='active' setFil={setFilter} activeFilter={activeFilter}/>
                        <FilterButton text='Completed' value='completed' setFil={setFilter} activeFilter={activeFilter}/>
                    </div>
                    <button className="clear-completed" onClick={ClearCompleted}>Clear completed</button>
                </div>
            </main>
        </>
    )
}

export default Todo