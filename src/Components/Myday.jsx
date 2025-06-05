import React from 'react'
import { Box,Typography } from '@mui/material'
import TaskContainer from './TaskContainer'
// import tasksData from '../Assets/Data/task_data.json'
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import { useSelector } from 'react-redux';

function Myday() {
  const tasksData= useSelector(store=> store.task)
     // Get today's date in YYYY-MM-DD format for comparison
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
  const day = String(today.getDate()).padStart(2, '0');
  const todayDateString = `${year}-${month}-${day}`;
  const data = Array.isArray(tasksData) ? tasksData.filter(task => task.dueDate === todayDateString) : [];
  // console.log(data)
  // console.log(data);
  return (
    <Box sx={{ display:'flex', justifyContent:'center',alignItems:'center',position:'absolute',top:'11vh',left:'20vw', }} >
              <Box  padding={'1rem'} display={'flex'} alignItems={'center'} justifyContent={'flex-start'}  >
              <WbSunnyOutlinedIcon/>
              <Typography variant='h6' >My Day</Typography>
              </Box>
          <TaskContainer data={data}/>
    </Box>
  )
}

export default Myday
