import React from 'react'
import { Box, Stack, Typography } from '@mui/material';

import ExerciseList2 from './ExerciseList2';

const SimilarExercise = () => {
    return (
        <Box mt='50px' p='25px'>
            <Typography fontWeight={600} pb='20px' sx={{ fontSize: { lg: '40px'}}}>
                Similar Exercises to Explore:
            </Typography>
            <Stack sx={{ flexDirection: { lg: 'row' } }}>
                <ExerciseList2 />
            </Stack>
        </Box>
    )
}

export default SimilarExercise
