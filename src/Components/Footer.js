import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { ThemeContext } from '../Context/theme';


const Footer = () => {

  const themeMode = useContext(ThemeContext);

  return (
    <Box 
    // component='footer'
    mt='80px'
    width='100%'
    bgcolor= {themeMode === 'light' ? '#FFF3F4' : "#333"}
    color={themeMode === 'light' ? '#000' : '#FFF'}
    >
        <Typography variant='h6' mt='40px' textAlign='center' p='10px' sx={{ fontSize: { xs: '20px'}}} >
            All copyrights reserved to ExerciseHere.com
        </Typography>
    </Box>
  )
}

export default Footer
