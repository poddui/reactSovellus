import React, {useState} from 'react';
import './App.css';
import Todotable from './components/Todolist'

function App() {
  const[todo, setTodo] = useState({desc: '', date: ''});
  const[todos, setTodos] = useState([]);

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
  }

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }


  return (
      <div className="App">
        <form onSubmit={addTodo}>
            <label htmlFor="text">Tehtävä: </label>
            <input type="text" name="desc" id="desc" value={todo.desc} onChange={inputChanged}/>
            <label htmlFor="date"> Päivämäärä: </label>
            <input type="date" name="date" id="text" value={todo.date} onChange={inputChanged}/>
            <input type="submit" value="Add"/>
          </form>
          <Todotable todos={todos} setTodos={setTodos}/>
      </div>
  );
}

export default App;
