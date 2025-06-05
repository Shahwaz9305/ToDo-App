import { Grid, Stack } from '@mui/material';
import TaskCard from './TaskCard';
import React, { useContext } from 'react'; // Import useContext
import { SearchContext } from '../SearchContext'; // Import the context

function TaskContainer({data}) {
console.log(data)
  const { searchQuery } = useContext(SearchContext);

  
const filteredTasks = Array.isArray(data)? data.filter(task =>task.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (

      <Stack direction={'column'}
        sx={{
          position:'absolute',
          top:0,left:'5vw',
          marginTop:"3rem",
          zIndex: 100,
          maxHeight: '60vh',
          overflowY: 'auto',
          width:"70vw",
          alignItems: 'center',

          backgroundColor: 'transparent', // Stack background itself is transparent
          // --- Scrollbar styling for WebKit browsers (Chrome, Safari, Edge, etc.) ---
          '&::-webkit-scrollbar': {
            width: '8px', // Adjust width of the scrollbar
            backgroundColor: 'transparent', // Make the entire scrollbar area transparent
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0, 0, 0, 0.2)', // Semi-transparent thumb (the draggable part)
            borderRadius: '10px', // Rounded corners for the thumb
            border: '2px solid transparent', // Optional: adds a transparent border to make it smaller than the track
            backgroundClip: 'padding-box', // Crucial to make the transparent border work
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: 'transparent', // Make the scrollbar track transparent
          },
          // --- Scrollbar styling for Firefox ---
          scrollbarWidth: 'thin', // "auto" or "thin"
          scrollbarColor: 'rgba(0, 0, 0, 0.2) transparent', // thumb color track color
        }}>
      <Grid size={12} container  >
        {filteredTasks.map((task) => (
          <Grid size={12}  key={task.id}> 
            <TaskCard task={task} /> 
          </Grid>
        ))}
      </Grid>
      </Stack>
    
  )
}

export default TaskContainer
