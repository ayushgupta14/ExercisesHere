import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
// import runimg from '../../Assets/images/run.jpg';

const ExerciseBanner = () => {
    return (
        <Box
            position='relative'
            p='20px'
            mb='70px'
            sx={{ mt: { lg: '112px', sm: '70px' }, ml: { sm: '50px' } }}>
            <Typography
                color='#ff2625'
                fontWeight={600}
                fontSize='26px'>ExerciseHere</Typography>

            <Typography
                fontWeight={700}
                fontSize='26px'
                fontFamily="sans-serif"
                mb='23px'
                mt='30px'
                sx={{ fontSize: { lg: '44px', xs: '40px' } }} >Sweat Smile Repeat</Typography>


<Typography
        fontSize='20px'
        lineHeight='35px' >Choose from a wide variety of exercises.</Typography>

            {/* <Typography fontSize='20px' lineHeight='35px' fontWeight={500} sx={{ fontSize: { lg: '40px', xs: '25px' } }}></Typography> */}

            <Stack>
                <Link to='/list' style={{ fontSize: '22px', textDecoration: 'none', textTransform: 'none', textAlign: 'center', padding: '14px', color: '#fff', backgroundColor: '#ff2625', width: '200px', borderRadius: '8px', marginTop: '44px' }}>
                    To-Do List
                </Link>
            </Stack>

            <Typography className='typo' fontWeight={700} fontSize='200px' sx={{ opacity: 0.09, display: { lg: 'block', xs: 'none' } }}>ExerciseHere</Typography>

            {/* <img src={runimg} className='exer-img' alt="" /> */}

        </Box>
    )
}

export default ExerciseBanner
