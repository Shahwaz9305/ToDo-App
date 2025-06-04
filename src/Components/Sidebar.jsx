import { Box, Stack, Typography } from '@mui/material';
import React from 'react'
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import ReorderOutlinedIcon from '@mui/icons-material/ReorderOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Link } from 'react-router-dom';

function Sidebar() {


  return (
    <Box position={'relative'} sx={{width:"20vw",height:'89vh',color:'white',backgroundColor:"#121212"}}>
      <Stack spacing={'1'}>
              <Link className="link" to={'/'}>
              <Stack  padding={'1rem'} display={'flex'} alignItems={'center'} justifyContent={'flex-start'} spacing={1} direction={'row'} sx={{  '&:hover': {
              backgroundColor: '#262F37',
              color:'#42A5F5',
              borderRadius:'6px'
              }}}>
              <WbSunnyOutlinedIcon/>
              <Typography component={'p'} sx={{fontSize:'12px'}}>My Day</Typography>
              </Stack>
              </Link>
              <Link className="link" to={'/important'}>
              <Stack  padding={'1rem'} display={'flex'} alignItems={'center'} justifyContent={'flex-start'} spacing={1} direction={'row'} sx={{  '&:hover': {
              backgroundColor: '#262F37',
              color:'#42A5F5',
              borderRadius:'6px'
              }}}>
              <StarBorderPurple500OutlinedIcon/>
              <Typography component={'p'} sx={{fontSize:'12px'}}>Important</Typography>
              </Stack>
</Link>
              <Link className="link" to={'/planned'}>
              <Stack  padding={'1rem'} display={'flex'} alignItems={'center'} justifyContent={'flex-start'} spacing={1} direction={'row'} sx={{  '&:hover': {
              backgroundColor: '#262F37',
              color:'#42A5F5',
              borderRadius:'6px'
              }}}>
              <ReorderOutlinedIcon/>
              <Typography component={'p'} sx={{fontSize:'12px'}}>Planned</Typography>
              </Stack>
              </Link>
              <Link className="link" to={'/assignedtome'}>
              <Stack  padding={'1rem'} display={'flex'} alignItems={'center'} justifyContent={'flex-start'} spacing={1} direction={'row'} sx={{  '&:hover': {
              backgroundColor: '#262F37',
              color:'#42A5F5',
              borderRadius:'6px'
              }}}>
              <PermIdentityOutlinedIcon/>
              <Typography component={'p'} sx={{fontSize:'12px'}}>Assigned to me</Typography>
              </Stack>
              </Link>
              <Link className="link" to={'/tasks'}>
                  <Stack  padding={'1rem'} display={'flex'} alignItems={'center'} justifyContent={'flex-start'} spacing={1} direction={'row'} sx={{  '&:hover': {
              backgroundColor: '#262F37',
              color:'#42A5F5',
              borderRadius:'6px'
              }}}>
              <HomeOutlinedIcon/>
              <Typography component={'p'} sx={{fontSize:'12px'}}>Tasks</Typography>
              </Stack>
              </Link>
      </Stack>
      
    </Box>
  );
}

export default Sidebar
