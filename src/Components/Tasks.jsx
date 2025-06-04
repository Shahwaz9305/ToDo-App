import { Box,Typography } from '@mui/material'
import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

import TaskContainer from './TaskContainer'
import tasksData from '../Assets/Data/task_data.json'
function Tasks() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(today.getDate()).padStart(2, '0');
    const todayDateString = `${year}-${month}-${day}`;
    const data = Array.isArray(tasksData) ? tasksData.filter(task => task.date !== todayDateString&&task.important !== true) : [];
  // const data = tasksData;
  return (
    <Box sx={{position:'absolute',top:'11vh',left:'20vw'}}>
              <Box  padding={'1rem'} display={'flex'} alignItems={'center'} justifyContent={'flex-start'}  >
               <HomeOutlinedIcon/>
              <Typography variant='h6' >Tasks</Typography>
              </Box>
      <TaskContainer data={data}/>
    </Box>
  )
}

export default Tasks
