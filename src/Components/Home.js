import React from 'react'
import { Box } from '@mui/material'
import HeroBanner from './HomeComps/HeroBanner'
// import Exercises from './Exercises'
import ExerciseList from './ExerciseComps/ExerciseList';

const Home = () => {
  return (
    <Box>
        <HeroBanner />
        <ExerciseList />
    </Box>
  )
}

export default Home
