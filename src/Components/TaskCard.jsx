import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import StarIcon from '@mui/icons-material/Star'; // Filled star
import StarBorderIcon from '@mui/icons-material/StarBorder'; // Outlined star
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField'; // For editable task description
import EditIcon from '@mui/icons-material/Edit'; // Edit icon
import DeleteIcon from '@mui/icons-material/Delete'; // Delete icon
import SaveIcon from '@mui/icons-material/Save'; // Save icon
import CancelIcon from '@mui/icons-material/Cancel'; // Cancel icon
import Box from '@mui/material/Box'; // For layout

function TaskCard({ task, onEdit, onDelete }) {
  const [isFavorite, setIsFavorite] = useState(task.important);
  const [checked, setChecked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.taskDescription);

  // Toggle favorite status
  const handleToggleFavorite = () => {
    const newFavoriteStatus = !isFavorite;
    setIsFavorite(newFavoriteStatus);
    // Call onEdit to update the parent's state for 'important' status
    if (onEdit) {
      onEdit(task.id, { ...task, important: newFavoriteStatus });
    }
  };

  // Handle checkbox change for task completion
  const handleChangeCheckbox = (event) => {
    setChecked(event.target.checked);
  };

  // Handle edit button click
  const handleEditClick = () => {
    setIsEditing(true);
  };

  // Handle save button click during editing
  const handleSaveClick = () => {
    if (onEdit) {
      onEdit(task.id, { ...task, taskDescription: editedDescription });
    }
    setIsEditing(false); // Corrected: Set to false to exit editing mode
  };

  // Handle cancel button click during editing
  const handleCancelClick = () => {
    setEditedDescription(task.taskDescription); // Revert to original description
    setIsEditing(false);
  };

  // Handle delete button click
  const handleDeleteClick = () => {
    if (onDelete) {
      onDelete(task.id);
    }
  };

  return (
    <Card sx={{ display: 'flex', alignItems: 'center', width: 'auto', p: 1, my: 1, borderRadius: '8px', boxShadow: 3 }}>
      {/* Checkbox for task completion */}
      <Checkbox
        checked={checked}
        onChange={handleChangeCheckbox}
        inputProps={{ 'aria-label': 'controlled' }}
      />

      {/* Task Description Area */}
      <CardContent sx={{ flexGrow: 1, p: 1, '&:last-child': { pb: 1 } }}>
        {isEditing ? (
          // Render TextField when in editing mode
          <TextField
            fullWidth
            variant="outlined"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            size="small"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px',
                backgroundColor: '#f5f5f5',
              },
            }}
          />
        ) : (
          // Render Typography when not in editing mode
          <Typography
            variant="body1" // Changed to body1 for better readability
            color="text.primary" // Changed to text.primary
            sx={{
              textDecoration: checked ? 'line-through' : 'none',
              wordBreak: 'break-word', // Ensures long text wraps
              fontSize: '1rem', // Adjust font size as needed
            }}
          >
            {task.taskDescription}
          </Typography>
        )}
      </CardContent>

      {/* Action Buttons */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', ml: 1 }}  >
        {isEditing ? (
          <>
            {/* Save Button */}
            <IconButton onClick={handleSaveClick} color="primary" aria-label="save task">
              <SaveIcon sx={{ fontSize: '1.5rem' }} />
            </IconButton>
            {/* Cancel Button */}
            <IconButton onClick={handleCancelClick} color="error" aria-label="cancel edit">
              <CancelIcon sx={{ fontSize: '1.5rem' }} />
            </IconButton>
          </>
        ) : (
          <>
            {/* Edit Button */}
            <IconButton onClick={handleEditClick} color="inherit" aria-label="edit task">
              <EditIcon sx={{ color: '#7c7b7b', fontSize: '1.5rem' }} />
            </IconButton>
            {/* Delete Button */}
            <IconButton onClick={handleDeleteClick} color="inherit" aria-label="delete task">
              <DeleteIcon sx={{ color: '#7c7b7b', fontSize: '1.5rem' }} />
            </IconButton>
          </>
        )}

        {/* Favorite Star Icon */}
        <IconButton onClick={handleToggleFavorite} color="inherit" aria-label="toggle favorite">
          {isFavorite ? (
            <StarIcon sx={{ color: '#FFD700', fontSize: '1.5rem' }} />
          ) : (
            <StarBorderIcon sx={{ color: '#7c7b7b', fontSize: '1.5rem' }} />
          )}
        </IconButton>
      </Box>
    </Card>
  );
}

export default TaskCard;
