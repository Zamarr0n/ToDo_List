export function TodoItem({completed,id, title, key, toggleToDo, DeleteToDo }){
    return(
    <li key={key}>
        <label>
        <input 
        type="checkbox" 
        checked = {completed} 
        onChange={e => toggleToDo(id, e.target.checked)}
        />
        {title} 
        </label>
        <button 
        onClick={() => DeleteToDo(id)} 
        className="btn-styling btn btn-danger">  Delete  </button>
    </li>
        
    );
} 