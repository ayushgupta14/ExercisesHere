import React from 'react';
import { Box, Typography } from '@mui/material';


const Footer = () => {
  return (
    <Box mt='80px' bgcolor='#FFF3F4'>
        <Typography variant='h6' mt='40px' textAlign='center' p='10px' sx={{ fontSize: { xs: '20px'}}} >
            All copyrights reserved to ExerciseHere.com
        </Typography>
    </Box>
  )
}

export default Footer
