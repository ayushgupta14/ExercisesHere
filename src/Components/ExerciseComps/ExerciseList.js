import React from 'react';
import { Box, Typography, Stack, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import { useDispatch } from 'react-redux';
import { addToDo } from '../../ReduxComps/Features/TodoSlice';

import Archerpushups from '../../Assets/ExerciseGif/ArcherPushups.gif';
import assistedpullups from '../../Assets/ExerciseGif/assistedpullups.gif';
import benchpress from '../../Assets/ExerciseGif/benchpress.gif';
import pulldowns from '../../Assets/ExerciseGif/pulldowns.gif';
import quadstrech from '../../Assets/ExerciseGif/quadstrech.gif';
import situps from '../../Assets/ExerciseGif/situps.gif';

const exercises = [
  { id: 'Archerpushups', src: Archerpushups, alt: 'Archer Pushups', text: 'Archer Pushups' },
  { id: 'Assistedpullups', src: assistedpullups, alt: 'Assisted Pullups', text: 'Assisted Pullups' },
  { id: 'Benchpress', src: benchpress, alt: 'Barbell Benchpress', text: 'Barbell Benchpress' },
  { id: 'Pulldown', src: pulldowns, alt: 'Cable Pulldowns', text: 'Cable Pulldowns' },
  { id: 'Quadstrech', src: quadstrech, alt: 'Quad Stretch', text: 'Quad Stretch' },
  { id: 'Situps', src: situps, alt: 'Half Situps', text: 'Half Situps' }
];

const ExerciseList = () => {
  const dispatch = useDispatch();

  const notify = () => toast.success("Exercise Added");


  return (
    <Box id='#exercise'>
      <Stack direction='row' flexWrap='wrap' justifyContent='center' sx={{ gap: { lg: '107px', xs: '50px' } }}>
        {exercises.map((exercise, index) => (
          <Box display='flex' flexDirection='column' alignItems='center'
          >
            <Link
              key={index}
              to={`/exercise/${exercise.id}`}
              onClick={(e) => {
                // e.preventDefault();
                window.scrollTo(0, 0);
              }}
              className='ex-box'
              style={{ textDecoration: 'none', textAlign: 'center' }}>

              <img src={exercise.src} alt={exercise.alt} />

              <Typography ml="21px" color="#000" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize">
                {exercise.text}
              </Typography>

            </Link>

            <Button sx={{
              mt: '12px'
            }} variant='outlined' color='error' onClick={() => {
              dispatch(addToDo({ id: exercise.id, text: exercise.text, src: exercise.src }));
              notify();
            }}>Add to list</Button>
            
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseList;

