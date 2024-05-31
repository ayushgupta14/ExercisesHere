import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Stack, IconButton } from '@mui/material';

import Logo from '../Assets/images/Logo.png'

import { ThemeContext } from '../Context/theme';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const Navbar = () => {

    const {toggleTheme, themeMode} = useContext(ThemeContext);


    return (
        <Stack
            direction='row'
            justifyContent='space-around'
            sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }}
            px='20px'>
            <Link to='/'>
                <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0px 20px' }} />
            </Link>
            <Stack
            direction='row'
            alignItems='flex-end'
            sx={{
                fontSize: {
                    lg: '24px',
                    xs: '20px'
                },
                gap: {
                    lg: '40px',
                    xs: '20px'
                }
            }}>
                <NavLink to='/' style={({isActive}) => ({
                    textDecoration: 'none',
                    color:'#3A1212',
                    borderBottom: isActive ? '2px solid #FF2625' : 'none'
                })} >Home</NavLink>
                <NavLink to='/exercises' style={({isActive}) => ({
                    textDecoration: 'none',
                    color:'#3A1212',
                    borderBottom: isActive ? '2px solid #FF2625' : 'none'
                })}>
                    Exercises
                </NavLink>

                <NavLink to='/list' style={({ isActive }) => ({
                    textDecoration: 'none',
                    color: '#3A1212',
                    borderBottom: isActive ? '2px solid #FF2625' : 'none'
                })}>
                    To-Do List
                </NavLink>

                <IconButton onClick={toggleTheme}>
                    {themeMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
                
                
            </Stack>
        </Stack>
    )
}

export default Navbar
