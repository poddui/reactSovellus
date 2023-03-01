import React, { useState } from 'react';
import TodoTable from './TodoTable.js'

export default function Todolist(){

  const[todo, setTodo] = useState({desc: '', date: ''});
  const[todos, setTodos] = useState([]);

  const deleteEvent = (index) => {
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);
  }

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
  }

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  return (
      <>
        <form onSubmit={addTodo}>
            <label htmlFor="text">Tehtävä: </label>
            <input type="text" name="desc" id="desc" value={todo.desc} onChange={inputChanged}/>
            <label htmlFor="date"> Päivämäärä: </label>
            <input type="date" name="date" id="date" value={todo.date} onChange={inputChanged}/>
            <input type="submit" value="Add"/>
          </form>
          <TodoTable todos={todos} deleteEvent={deleteEvent}/>
      </>
  );
}