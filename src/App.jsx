import { useState } from "react"
import "./styles.css"

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e){
    e.preventDefault();
    setTodos(currentTodos => {
      return [...currentTodos, {id: crypto.randomUUID(), title: newItem, completed: false}]
    });
    setNewItem("");
  }


  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input id="item" value={newItem} onChange={e => setNewItem(e.target.value)} type="text" />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {
          todos.map((item) => {
            return (
              <li>
                <label>
                  <input type="checkbox"/>
                  { item.title }
                </label>
                <button className="btn btn-danger">Delete</button>
              </li>
            );
          })
        }
      </ul>
    </>
  )
}