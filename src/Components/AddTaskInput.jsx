import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../Store/taskSlice';
import { v4 as uuidv4 } from 'uuid';

// Material-UI Imports
import { Box, TextField, IconButton, InputAdornment, Checkbox, FormControlLabel, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add'; // Plus icon
import StarBorderIcon from '@mui/icons-material/StarBorder'; // Outline star icon
import StarIcon from '@mui/icons-material/Star'; // Filled star icon

function AddTaskInput() {
  const [taskDescription,setTaskDescription] = useState('');
  const [dueDate,setDueDate]= useState('');
  const [dueTime,setDueTime]= useState('');
  const [isImportant,setIsImportant]=useState(false);
  const dispatch = useDispatch();

  const getTodayDate =()=>{
    const today = new Date();
    const year= today.getFullYear();
    const month= String(today.getMonth +1).padStart(2,'0');
    const day = String(today.getDay).padStart(2,'0');
    return `${year}-${month}-${day}`;
  }

  const getCurrentTime =()=>{
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  React.useEffect(()=>{
        setDueDate(getTodayDate());
    setDueTime(getCurrentTime());
  },[]);

  const handleInputChange=(e)=>{
    setTaskDescription(e.target.value);
  }

  const handleDateChange=(e)=>{
    setDueDate(e.target.value);
  }
  const handleTimeChange=(e)=>{
    setDueTime(e.target.value);
  }
  const handleImportantChange=(e)=>{
    setIsImportant(e.target.checked);
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(taskDescription.trim()){
      dispatch(
        addTask({
          id: uuidv4(),
          description:taskDescription.trim(),
          completed: false,
          dueDate:dueDate,
          dueTime:dueTime,
          isImportant: isImportant,
        })
      );
      setTaskDescription('');
      setDueDate(getTodayDate());
      setDueTime(getCurrentTime());
       setIsImportant(false);
    }
  }

  return (
    <Box
    component={'form'}
    onSubmit={handleSubmit}
    sx={{
      marginLeft:'2rem',
      marginRight:'2rem',
        position:'absolute',
        bottom: 0,
        left:'33vw',
        right:'20vw',
        // justifyContent:'center',/
        margin: '20px auto', // Center the component and add margin
        width: '60vw',
        maxWidth: 600, // Max width for better layout on larger screens
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'rgba(36, 35, 35, 0.51)', // Semi-transparent background
        // backgroundColor:'black',
        borderRadius: '8px', // Slightly more rounded corners
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)', // Enhanced shadow
        padding: '8px 16px', // Adjust padding
        transition: 'box-shadow 0.3s ease-in-out', // Smooth transition for hover/focus
        '&:hover': {
          boxShadow: '0 6px 16px rgba(0, 0, 0, 0.4)', // Slightly larger shadow on hover
        },
    }}
    >
      <TextField
      fullWidth
      variant='standard'
      placeholder='Add a task'
      value={taskDescription}
      onChange={handleInputChange}
    inputProps={{
        disableUndisableUnderline: true,
        startAdornment:(
            <InputAdornment position='start'>
              <IconButton
                type="submit" // Make the icon button trigger form submission
                aria-label="add task"
                sx={{ color: 'black' }} // Icon color
              >
                <AddIcon />
              </IconButton>
            </InputAdornment>
        ),
                  sx: {
            color: '#fff', // Text color for the input
            fontSize: '1.1em', // Font size
            '&::placeholder': { // Styling for placeholder text
              color: 'rgba(255, 255, 255, 0.7)',
              opacity: 1, // Ensure placeholder is visible in Edge
            },
            // Style for the input element itself
            '& .MuiInputBase-input': {
              padding: '10px 0', // Adjust vertical padding for input text
            },
          },
        }}
        // InputLabelProps for styling the placeholder (if it were a label)
        InputLabelProps={{
          sx: {
            color: 'rgba(255, 255, 255, 0.7)',
          },
    }}

      />
      <Box
      sx={{
          display: 'flex',
          gap: '10px', // Space between date and time fields
          width: '100%', // Full width on small screens
          '@media (min-width:600px)': {
            width: 'auto', // Auto width on larger screens
            flexShrink: 0, // Prevent shrinking
            alignItems: 'center', // Align date and time inputs
          },
        }}
      >
{/* Date Input */}
        <TextField
          type="date"
          variant="standard"
          value={dueDate}
          onChange={handleDateChange}
          sx={{
            color: '#fff', // Text color for date
            '& .MuiInputBase-input': {
              color: '#fff',
              padding: '8px 0',
              fontSize: '0.9em',
            },
            '& .MuiInputLabel-root': { // Label (if used)
              color: 'rgba(255, 255, 255, 0.7)',
            },
            '& .MuiInput-underline:before': {
              borderBottomColor: 'rgba(255, 255, 255, 0.3)',
            },
            '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
              borderBottomColor: 'rgba(255, 255, 255, 0.5)',
            },
            '& .MuiInput-underline:after': {
              borderBottomColor: '#6a0dad', // Purple focus color
            },
            '& .MuiSvgIcon-root': { // Calendar icon color
              color: 'rgba(255, 255, 255, 0.7)',
            },
          }}
          InputLabelProps={{
            shrink: true, // Always show label as if focused
          }}
        />

        {/* Time Input */}
        <TextField
          type="time"
          variant="standard"
          value={dueTime}
          onChange={handleTimeChange}
          sx={{
            color: '#fff', // Text color for time
            '& .MuiInputBase-input': {
              color: '#fff',
              padding: '8px 0',
              fontSize: '0.9em',
            },
            '& .MuiInputLabel-root': {
              color: 'rgba(255, 255, 255, 0.7)',
            },
            '& .MuiInput-underline:before': {
              borderBottomColor: 'rgba(255, 255, 255, 0.3)',
            },
            '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
              borderBottomColor: 'rgba(255, 255, 255, 0.5)',
            },
            '& .MuiInput-underline:after': {
              borderBottomColor: '#6a0dad', // Purple focus color
            },
            '& .MuiSvgIcon-root': { // Clock icon color
              color: 'rgba(255, 255, 255, 0.7)',
            },
          }}
          InputLabelProps={{
            shrink: true,
          }}
        />

        
        {/* Is Important Checkbox */}
        <FormControlLabel
          control={
            <Checkbox
              checked={isImportant}
              onChange={handleImportantChange}
              icon={<StarBorderIcon sx={{ color: 'rgba(255, 255, 255, 0.7)' }} />}
              checkedIcon={<StarIcon sx={{ color: '#FFD700' }} />} // Gold color for checked star
              sx={{ padding: '4px', '& .MuiSvgIcon-root': { fontSize: '1.5rem' } }} // Adjust size and padding
            />
          }
          label={<Typography sx={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9em' }}>Important</Typography>}
          sx={{
            marginRight: 0, // Remove default right margin
            marginLeft: 'auto', // Push to the right on larger screens if space allows
            '@media (min-width:600px)': {
              marginLeft: '10px', // Small margin when horizontal
            },
          }}
        />
      </Box>
    </Box>
  )
}

export default AddTaskInput
