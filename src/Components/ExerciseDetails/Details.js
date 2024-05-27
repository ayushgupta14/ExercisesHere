import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

import exer from './exer';

import Bodyimg from '../../Assets/icons/body-part.png';
import target from '../../Assets/icons/target.png';
import equip from '../../Assets/icons/equipment.png';

import SimilarExercise from '../ExerciseComps/SimilarExercise';



const Details = () => {
  const { exerciseId } = useParams();
  const exes = exer.find(ex => ex.id === exerciseId);

  if (!exes) {
    return <Typography variant="h5">Exercise not found</Typography>;
  }

  return (
    <Box>
      <Stack gap='60px' sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
        <img src={exes.src} className='detail-image' alt={exes.alt} />
        <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
          <Typography fontWeight={600} sx={{ fontSize: { lg: '60px', xs: '30px' } }}>
            {exes.text}
          </Typography>

          <Typography sx={{ fontSize: { lg: '18px', xs: '15px' } }}>
            {exes.description}
          </Typography>

          <Stack direction='row' alignItems='center' gap='20px'>
            <Button sx={{ background: '#FFF2DB', height: '100px', width: '100px', borderRadius: '50%' }}>
              <img src={Bodyimg} alt="" style={{ height: '45px', width: '45px' }} />
            </Button>
            <Typography sx={{ fontSize: { lg: '20px', xs: '15px' } }}>
              {exes.bodypart}
            </Typography>
          </Stack>
          <Stack direction='row' alignItems='center' gap='20px'>
            <Button sx={{ background: '#FFF2DB', height: '100px', width: '100px', borderRadius: '50%' }}>
              <img src={target} alt="" style={{ height: '45px', width: '45px' }} />
            </Button>
            <Typography sx={{ fontSize: { lg: '20px', xs: '15px' } }}>
              {exes.target}
            </Typography>
          </Stack>
          <Stack direction='row' alignItems='center' gap='20px'>
            <Button sx={{ background: '#FFF2DB', height: '100px', width: '100px', borderRadius: '50%' }}>
              <img src={equip} alt="" style={{ height: '45px', width: '45px' }} />
            </Button>
            <Typography sx={{ fontSize: { lg: '20px', xs: '15px' } }}>
              {exes.equipment}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <SimilarExercise />
    </Box>
  )
}

export default Details
