import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeToDo } from '../../ReduxComps/Features/TodoSlice';
import { Box, Stack, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const ToDoList = () => {

    const todoList = useSelector(state => state.todo.todoList);
    const dispatch = useDispatch();


    return (
        <Box height='100vh'>
            <Typography variant='h4' textAlign='center' mt='45px' mb='50px'>
                To-Do List
            </Typography>

            <Stack direction='row' flexWrap='wrap' justifyContent='center' sx={{ gap: { lg: '107px', xs: '50px' } }}>
                {todoList.map((item, index) => (
                    <Box key={index} display='flex' flexDirection='column' alignItems='center' >
                        <Box className='ex-box' style={{ textDecoration: 'none', textAlign: 'center' }}>

                        
                        <Link style={{ textDecoration: 'none' }} to={`/exercise/${item.id}`}>
                            <img src={item.src} alt="Image" />
                            <Typography ml='21px' color='#000' fontWeight='bold' sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize">
                                {item.text}
                            </Typography>
                        </Link>
                        </Box>

                        <Button sx={{
                            mt: '12px'
                        }} variant="contained" color="error" onClick={() => dispatch(removeToDo(item.id))}>
                            Remove
                        </Button>
                    </Box>
                ))}
            </Stack>
        </Box>
    );
};

export default ToDoList
