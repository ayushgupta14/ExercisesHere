import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import bannerImg from '../../Assets/images/banner.jpg'

const HeroBanner = () => {
  return (
    <Box 
    position='relative' 
    p='20px' 
    sx={{ mt: {lg: '112px', sm: '70px'}, ml: { sm: '50px'} }}>
        <Typography 
        color='#ff2625' 
        fontWeight={600} 
        fontSize='26px'>ExerciseHere</Typography>

        <Typography 
        fontWeight={700} 
        fontSize='26px' 
        mb='23px' 
        mt='30px' 
        sx={{ fontSize: { lg: '44px', xs: '40px'}}} >Sweat Smile <br /> Repeat</Typography>

        <Typography
        fontSize='20px'
        lineHeight='35px' >Explore the exercises that you need to reach your daily fitness goal.</Typography>

        <Stack>
            <a href="/exercises" style={{ fontSize: '22px', textDecoration: 'none', textTransform: 'none', textAlign: 'center', padding: '14px', color: '#fff', backgroundColor: '#ff2625', width: '200px', borderRadius: '8px', marginTop: '44px'}}>Exercise</a>
        </Stack>

        <Typography fontWeight={700} fontSize='200px' sx={{ opacity: 0.1, display: {lg: 'block', xs: 'none'}}}>Exercise</Typography>
        
        <img src={bannerImg} alt="" className='banner-img' />

        <Typography fontWeight={700} textAlign='center' mt='50px' mb='70px' sx={{ fontSize: {lg: '44px', xs: '25px'}}}>Awesome exercises for you to explore.</Typography>
    </Box>
  )
}

export default HeroBanner
