import { Grid, Pagination, Stack } from '@mui/material';
import TaskCard from './TaskCard';
import React, { useContext, useState } from 'react'; // Import useContext
import { SearchContext } from '../SearchContext'; // Import the context

function TaskContainer({data}) {
console.log(data)
  const { searchQuery } = useContext(SearchContext);
  const [currentPage,setCurrentPage] = useState(1);
  const taskPerPage = 5;

  
const filteredTasks = Array.isArray(data)? data.filter(task =>task.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

const totalPages = Math.ceil(filteredTasks.length/taskPerPage);
const indexOfLastTask = currentPage * taskPerPage;
const indexOfFirstTask = indexOfLastTask-taskPerPage;
const currentTasks = filteredTasks.slice(indexOfFirstTask,indexOfLastTask);

const handlePageChange = (event,value)=>{
  setCurrentPage(value);
} 
  

  return (

      <Stack direction={'column'}
        sx={{
          position:'absolute',
          top:0,
          left:'5vw',
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
      <Grid >
        {currentTasks.map((task) => (
          <Grid size={12}  key={task.id}> 
            <TaskCard task={task} /> 
          </Grid>
        ))}
      </Grid>{totalPages>1 &&(
      <Pagination 
      count = {totalPages}
      page = {currentPage}
      onChange={handlePageChange}
      color='primary'
      sx={{
        marginTop:'1rem',
        paddingBottom:'1rem',
      }}
      />
      )}
      </Stack>
    
  )
}

export default TaskContainer
