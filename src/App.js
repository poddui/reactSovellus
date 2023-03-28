import React, { useState }  from 'react';
import Todolist from './components/Todolist';
import Home from './components/Home';
import './App.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function App() {

  const [value, setValue] = useState(0);
  
  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <Box sx={{ width: '100%',  }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} centered>
              <Tab label="Welcome" variant="fullWidth"/>
              <Tab label="TodoList" variant="fullWidth"/>
            </Tabs>
          </Box>
          {value === 0 && <Home/>}
          {value === 1 && <Todolist/>}
      </Box>
    </div>
  );
}

export default App;
