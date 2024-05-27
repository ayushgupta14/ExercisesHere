import React from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../Assets/images/Logo.png'

const Navbar = () => {
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
            fontSize='24px'
            gap='40px'>
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
                
            </Stack>
        </Stack>
    )
}

export default Navbar
