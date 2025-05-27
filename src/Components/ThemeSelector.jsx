// import React from 'react'
import React, { useState } from 'react';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { Box, Button, Grid, Typography, Paper, IconButton, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { PhotoCamera, Palette as PaletteIcon, Close as CloseIcon } from '@mui/icons-material'; 

// Define a custom theme for Material UI.
const customTheme = createTheme({
    Typography:{
        fontFamily: 'Inter, sans-serif',
    },
    palette:{
        primary:{
            main:'#1976d2',
        },
        secondary:{
            main: '#dc004e',
        }
    },
    
    

});

// Styled Box component for the main content area, allowing background image/color
const BackgroundBox = styled(Box)(({ theme, backgroundImage }) => ({
  minHeight: '89vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position:'relative',
  // zIndex:-1,
  backgroundRepeat: 'no-repeat',
  transition: 'background-color 0.5s ease-in-out, background-image 0.5s ease-in-out',
  ...(backgroundImage && {
    backgroundImage: `url(${backgroundImage})`,
  }),
}));


function ThemeSelector() {
const [backgroundStyle, setBackgroundStyle]= useState('#BBDEFB');
  const [openThemeDialog, setOpenThemeDialog] = useState(false);

  const colors = [
    '#FFCDD2', '#F8BBD0', '#E1BEE7', '#D1C4E9', '#C5CAE9', '#BBDEFB',
    '#B3E5FC', '#B2EBF2', '#B2DFDB', '#C8E6C9', '#DCEDC8', '#F0F4C3',
    '#FFF9C4', '#FFECB3', '#FFE0B2', '#FFCCBC', '#D7CCC8', '#CFD8DC',
  ];
    const imageThumbnails = [
    'https://plus.unsplash.com/premium_photo-1672234253746-99ac19181f0b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1672115680958-54438df0ab82?q=80&w=2084&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1673002094195-f18084be89ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Added more images
    'https://plus.unsplash.com/premium_vector-1697729712812-ebae343e0035?q=80&w=2294&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];

    // Function to handle color selection
    const handleColorSelect=(color)=>{
        setBackgroundStyle(color);
    };

    // Function to handle image selection (from predefined thumbnails)
    const handleImageSelect=(imageUrl)=>{
        setBackgroundStyle(imageUrl);
    };

    // Function to handle custom image upload
    const handleImageUpload=(event)=>{
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBackgroundStyle(reader.result); // Set background to the base64 encoded image
      };
      reader.readAsDataURL(file); // Read file as data URL
    }
    };

  // Handlers for opening and closing the theme dialog
  const handleOpenThemeDialog = () => {
    setOpenThemeDialog(true);
  };

  const handleCloseThemeDialog = () => {
    setOpenThemeDialog(false);
  };


  return (
    <ThemeProvider theme={customTheme} >
      <BackgroundBox
              // Determine if the backgroundStyle is an image URL (starts with data:image or http)
        backgroundImage={backgroundStyle.startsWith('data:image') || backgroundStyle.startsWith('http') ? backgroundStyle : null}
        // If it's not an image, assume it's a color and apply it as backgroundColor
        sx={{ backgroundColor: backgroundStyle.startsWith('#') ? backgroundStyle : 'transparent' }}
      >
        <Paper elevation={6}
        className='p-6 rounded-lg shadow-xl mt-8 bg-white bg-opacity-90 backdrop-blur-sm'
        >
            {/* Theme selection icon button */}
          <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
            <IconButton
              color="primary"
              aria-label="select theme"
              onClick={handleOpenThemeDialog}
              sx={{
                background: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(5px)',
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.9)',
                },
              }}
            >
              <PaletteIcon />
            </IconButton>
          </Box>
            
        </Paper>

                {/* Theme Selection Dialog (Pop-up) */}
        <Dialog open={openThemeDialog} onClose={handleCloseThemeDialog} maxWidth="md" fullWidth sx={{zIndex:100}}>
          <DialogTitle>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="h5" component="h3">Theme</Typography>
              <IconButton aria-label="close" onClick={handleCloseThemeDialog}>
                <CloseIcon />
              </IconButton>
            </Box>
          </DialogTitle>
          <DialogContent dividers>
            {/* Color Palette Section */}
            <Typography variant="subtitle1" className="mb-2 text-gray-700">
              Select a Color:
            </Typography>
            <Grid container spacing={1} className="mb-4 justify-center">
              {colors.map((color, index) => (
                <Grid item key={index}>
                  <Box
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: '8px',
                      backgroundColor: color,
                      cursor: 'pointer',
                      // Highlight the currently selected color
                      border: backgroundStyle === color ? '2px solid #1976d2' : '1px solid #ccc',
                      transition: 'border 0.2s ease-in-out',
                      '&:hover': {
                        boxShadow: '0 0 0 3px rgba(25, 118, 210, 0.3)', // Hover effect
                      },
                    }}
                    onClick={() => handleColorSelect(color)}
                  />
                </Grid>
              ))}
            </Grid>

            {/* Image Palette Section */}
            <Typography variant="subtitle1" className="mb-2 text-gray-700">
              Select an Image:
            </Typography>
            <Grid container spacing={1} className="mb-4 justify-center">
              {imageThumbnails.map((imageUrl, index) => (
                <Grid item key={index}>
                  <Box
                    sx={{
                      width: 100,
                      height: 70,
                      borderRadius: '8px',
                      backgroundImage: `url(${imageUrl})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      cursor: 'pointer',
                      // Highlight the currently selected image
                      border: backgroundStyle === imageUrl ? '2px solid #1976d2' : '1px solid #ccc',
                      transition: 'border 0.2s ease-in-out',
                      '&:hover': {
                        boxShadow: '0 0 0 3px rgba(25, 118, 210, 0.3)', // Hover effect
                      },
                    }}
                    onClick={() => handleImageSelect(imageUrl)}
                  />
                </Grid>
              ))}
            </Grid>

            {/* Custom Image Upload Section */}
            <Typography variant="subtitle1" className="mb-2 text-gray-700">
              Upload Custom Image:
            </Typography>
            {/* Hidden input for file selection, triggered by the button */}
            <input
              accept="image/*" // Only accept image files
              style={{ display: 'none' }} // Hide the default file input
              id="icon-button-file"
              type="file"
              onChange={handleImageUpload}
            />
            {/* Label acts as a clickable area for the hidden input */}
            <label htmlFor="icon-button-file">
              <Button variant="outlined" component="span" startIcon={<PhotoCamera />}>
                Upload Image
              </Button>
            </label>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseThemeDialog} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </BackgroundBox>
    </ThemeProvider>
  )
}

export default ThemeSelector
