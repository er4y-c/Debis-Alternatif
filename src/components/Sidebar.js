import { Box, Stack, IconButton } from '@mui/material';
import {categoryNames} from '../utils/constants';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {NavLink } from 'react-router-dom';

const Sidebar = (props) => {

    return (
        <Stack
            direction= 'column'
            sx={{
                width: props.isVisible ? '250px':'60px',
                height: '100%',
                position: 'fixed',
                top: '70px',
                left: 0
            }}
        >
            <Box className='sidebar-category'>
                {categoryNames.map((category) => (
                    <NavLink 
                        className='sidebar-btn'
                        activeclassName='active' 
                        to={category.path}
                    >
                            <div className='category-icon'>{category.icon}</div>
                            <div className='category-name' style={{display: props.isVisible ? "flex" : "none"}}>{category.name}</div>
                    </NavLink>
                ))}
            </Box>
        </Stack>
    );
}

export default Sidebar 
