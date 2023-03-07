import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import { useRef } from 'react';

export default function Todolist() {

  const [todo, setTodo] = useState({ desc: '', date: '' });
  const [todos, setTodos] = useState([]);
  const gridRef = useRef();


  const deleteEvent = () => {
    if (gridRef.current.getSelectedNodes().length > 0) {
      setTodos(todos.filter((todo, index) =>
          index !== gridRef.current.getSelectedNodes()[0].childIndex))
  }
  else {
      alert('Select row first');
  }
}

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
  }

  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  }

  const columns = [
    { headerName: 'Tehtävä', field: 'desc', sortable: true, floatingFilter: true, filter: true },
    { headerName: 'Päivämäärä', field: 'date', sortable: true, floatingFilter: true, filter: true },
  ]

  return (
    <>
      <form onSubmit={addTodo}>
        <label htmlFor="text">Tehtävä: </label>
        <input type="text" name="desc" id="desc" value={todo.desc} onChange={inputChanged} />
        <label htmlFor="date"> Päivämäärä: </label>
        <input type="date" name="date" id="date" value={todo.date} onChange={inputChanged} />
        <input type="submit" id="submit" value="Add" />
      </form>
      <button onClick={deleteEvent}>Delete</button>
      
      <div
        className="ag-theme-material"
        style={{
          height: '1200px',
          width: '80%',
          margin: 'auto'
        }}
      >
        <AgGridReact
          ref={gridRef}
          onGridReady={ params => gridRef.current = params.api }
          rowSelection="single"
          columnDefs={columns}
          rowData={todos}
          animateRows={true}
        >
        </AgGridReact>
      </div>
    </>
  );
}