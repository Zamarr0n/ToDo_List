import { useEffect, useState } from "react"
import { NewTodoForm } from "./newTodoForm"
import TodoList from "./TodoList"

export default function App(){
  const [todos, setToDos] = useState(() => {
    const LocalItems = localStorage.getItem("ITEMS")
    if(LocalItems == null ) return []

    return JSON.parse(LocalItems)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodos(title){
    setToDos ((currentToDo) =>{
      return [...currentToDo, {
          id: Math.random(),
          title,
          completed: false,
      }, ]
  } )
  } 



  function toggleToDo (id, completed){
    setToDos(currentToDos =>{
      return currentToDos.map(todo =>{
        if (todo.id === id ){
          return {...todo, completed}
        }
        return todo;
      })
    }
    )
  } 


  function DeleteToDo (id) {
    setToDos(currentToDos =>{
      return currentToDos.filter(todo => todo.id !== id) 
    } )
  } 

  return (
  <>
  <NewTodoForm onSubmit={addTodos} />

  <h1 className="header"> ToDo List </h1>
  
  <TodoList 
  todos={todos} 
  toggleToDo={toggleToDo}  
  DeleteToDo={DeleteToDo} 
  />
  
  </>
  )
}
