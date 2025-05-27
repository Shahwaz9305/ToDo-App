import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { Box } from '@mui/material';
import Sidebar from './Components/Sidebar';
import Tasks from './Components/Tasks';
import Myday from './Components/Myday';
import Important from './Components/Important';
import Planned from './Components/Planned';
import AssignedToMe from './Components/AssignedToMe';
import ThemeSelector from './Components/ThemeSelector';


function App() {
  return (
 <>
      <BrowserRouter>
        <Navbar/>

        <Box display={'flex'}>
          <Box flex={2}>
              <Sidebar/>
          </Box>
        <Box flex={8}>
          <ThemeSelector/>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Home/>
            }
          />
          <Route
            path="/tasks"
            exact
            element={
              <Tasks/>
            }
          />
          <Route
            path="/myday"
            exact
            element={
              <Myday/>
            }
          />
          <Route
            path="/important"
            exact
            element={
              <Important/> 
            }
          />
          <Route
            path="/planned"
            exact
            element={
              <Planned/>
            }
          />
          <Route
            path="/assignedtome"
            exact
            element={
              <AssignedToMe/>
            }
          />
        </Routes>
        </Box>

        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
