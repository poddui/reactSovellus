import React, { useState } from 'react';
import Todolist from './Todolist';
import Welcome from './Welcome';
import '../App.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function Home() {
  const [value, setValue] = useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label="Welcome" variant="fullWidth" />
            <Tab label="TodoList" variant="fullWidth" />
          </Tabs>
        </Box>
        {value === 0 && <Welcome />}
        {value === 1 && <Todolist />}
      </Box>
    </>
  );
}