import { TodoItem } from "./todoItem"

export default function TodoList ({todos, toggleToDo, DeleteToDo}){

    return(
        <ul className="list">
    {todos.map (todo => {
        return (
        <TodoItem 
        {...todo }
        key = {todo.id} 
        toggleToDo = {toggleToDo}
        DeleteToDo = {DeleteToDo} 
        />
    )
    })}
    </ul>

    )

} 