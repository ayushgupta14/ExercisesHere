import React from 'react';
import { Box, Typography } from '@mui/material';
import ExerciseList from './ExerciseComps/ExerciseList';
import ExerciseList2 from './ExerciseComps/ExerciseList2';

const Exercises = () => {
  return (
    <Box>

      <Typography fontWeight={500} textAlign='center' mt='50px' mb='20px' sx={{ fontSize: {lg: '40px', xs: '25px'}}}>Choose from a wide variety of exercises</Typography>
      
      <Typography fontWeight={400} textAlign='center' mt='10px' mb='70px' sx={{ fontSize: {lg: '20px', xs: '15px'}}}>Choose from a wide variety of exercises Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique doloribus doloremque cupiditate eligendi amet? Asperiores minus optio delectus cum autem Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, nostrum.</Typography>

      <ExerciseList />
      <ExerciseList2 />
    </Box>
  )
}

export default Exercises
