
import React from 'react'
import tasksData from '../Assets/Data/task_data.json'
import TaskContainer from './TaskContainer';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import { Box,Typography } from '@mui/material';

function Important() {

    const data = Array.isArray(tasksData) ? tasksData.filter(task => task.important === true) : [];
  return (
    <Box sx={{position:'absolute',top:'11vh',left:'20vw'}}>
              <Box  padding={'1rem'} display={'flex'} alignItems={'center'} justifyContent={'flex-start'}  >
              <StarBorderPurple500OutlinedIcon/>
              <Typography variant='h6' >Important</Typography>
              </Box>
       <TaskContainer data={data} important={true}/>
    </Box>
  )
}

export default Important
