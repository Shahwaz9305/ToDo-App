import { Box , Typography} from '@mui/material';
import React from 'react';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import data from '../Assets/Data/task_data.json';
import TaskContainer from './TaskContainer';
function AssignedToMe() {
  return (
    <Box sx={{position:'absolute',top:'11vh',left:'20vw'}}>
              <Box  padding={'1rem'} display={'flex'} alignItems={'center'} justifyContent={'flex-start'}  >
               <PermIdentityOutlinedIcon/>
              <Typography variant='h6' >Assigned to me</Typography>
              </Box>
            <TaskContainer data={data}/>
    </Box>
  )
}

export default AssignedToMe
