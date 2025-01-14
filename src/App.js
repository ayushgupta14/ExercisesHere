import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Box } from '@mui/material';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Exercises from './Components/Exercises';

import Details from './Components/ExerciseDetails/Details';


function App() {
  return (
    <Box width='400px' sx={{ width: { xl: '1488px' } }} m='auto'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercises' element={<Exercises />} />
        <Route path='/exercise/:exerciseId' element={<Details />}/>
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
