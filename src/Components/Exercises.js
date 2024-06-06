import React from 'react';
import { Box } from '@mui/material';

import ExerciseList from './ExerciseComps/ExerciseList';
import ExerciseList2 from './ExerciseComps/ExerciseList2';
import ExerciseBanner from './ExerciseComps/ExerciseBanner';


const Exercises = () => {
  return (

    <Box>
      <ExerciseBanner />
      <ExerciseList />
      <ExerciseList2 />
    </Box>
  )
}

export default Exercises

