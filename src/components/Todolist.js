import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import { useRef } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

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

  const handleDateChange = (date) => {
    setTodo({ ...todo, date: date });
  }

  const columns = [
    { headerName: 'Tehtävä', field: 'desc', sortable: true, floatingFilter: true, filter: true },
    { headerName: 'Päivämäärä', field: 'date', sortable: true, floatingFilter: true, filter: true },
  ]

  return (
    <>
    <div class="pickers">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <form onSubmit={addTodo}>
      <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
        <TextField
            label="Description"
            variant="standard"
            name="desc" value={todo.desc}
            onChange={inputChanged}/>
          <DatePicker
               label="Date"
               value={todo.date}
               onChange={handleDateChange}
          />


        <Button onClick={addTodo} variant="contained">Add</Button>
        <Button onClick={deleteEvent}variant="contained">Delete</Button>
      </Stack>
      </form>
      </LocalizationProvider>
      </div>
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