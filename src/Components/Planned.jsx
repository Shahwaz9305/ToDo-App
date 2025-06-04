import { Box,Typography } from '@mui/material'
import React from 'react'
import ReorderOutlinedIcon from '@mui/icons-material/ReorderOutlined';

function Planned() {
  return (
    <Box sx={{position:'absolute',top:'11vh',left:'20vw'}}>
      
              <Box  padding={'1rem'} display={'flex'} alignItems={'center'} justifyContent={'flex-start'}  >
              <ReorderOutlinedIcon/>
              <Typography variant='h6' >Planned</Typography>
              </Box>
    </Box>
  )
}

export default Planned
