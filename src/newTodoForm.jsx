import { useState } from "react"

export function NewTodoForm ({onSubmit}) {
    const [newItem, setNewItem] = useState("");
    function handleSubmit (e){
        e.preventDefault()
    if (newItem === "") return
        onSubmit(newItem)
    setNewItem("")
} 
    return(
        <>
    <div className='div_form'>
    <form onSubmit={handleSubmit} className="new-item-form">
    <div className="form-row">
    <label className="title_form" htmlFor="item"> New Item: </label>
    <input value={newItem} 
    onChange={event => setNewItem(event.target.value)}
    type="text" id='item'/>
    </div>
    <div className="btn-styling">
    <button className="btn"> Add </button>
    </div>
    </form>
    </div>
        </>
    );
}