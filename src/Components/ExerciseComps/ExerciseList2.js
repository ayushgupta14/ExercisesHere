import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import bicepcurls from '../../Assets/ExerciseGif/bicepcurls.gif';
import burpee from '../../Assets/ExerciseGif/burpee.gif';
import astridejumps from '../../Assets/ExerciseGif/astridejumps.gif';

const exercises = [
  { id: 'Bicepcurls', src: bicepcurls, alt: "Bicep curls", text: "Bicep Curls"},
  { id: 'Burpees', src: burpee, alt: "Burpees", text: "Burpee"},
  { id: 'Astridejumps', src: astridejumps, alt: "Astride Jumps", text: "Astride Jumps"}
]

const ExerciseList2 = () => {
  return (
    <Box mt='50px'>
      <Stack direction='row' flexWrap='wrap' justifyContent='center' sx={{ gap: { lg: '107px', xs: '50px' } }}>
        {exercises.map((exercise, index) => (
          <Link key={index} to={`/exercise/${exercise.id}`}
          onClick={(e) => {
            // e.preventDefault();
            window.scrollTo(0, 0);
          }} 
           className='ex-box' style={{ textDecoration: 'none', textAlign: 'center'}} >
            <img src={exercise.src} alt={exercise.alt} />
            <Typography ml="21px" color="#000" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize">
          {exercise.text}
        </Typography>
          </Link>
        ))}

      </Stack>
    </Box>
  )
}

export default ExerciseList2
