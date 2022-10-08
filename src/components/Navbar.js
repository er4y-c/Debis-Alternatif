import { Stack, Box, Button, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
import { Link } from "react-router-dom";
import Sidebar from '../components/Sidebar';

const Navbar = () => {

    const [isVisible, setIsVisible] = useState(true);
    const showSidebar = () => setIsVisible(!isVisible);
  return (
    <>
    <Stack
        direction='row'
        sx={{
            backgroundColor: '#181C32',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'fixed',
            height: '70px',
            width: '100%',
            top: 0,
            left: 0,
            zIndex: 3
        }}
    >
            <Box 
                className='navbar-left' 
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Box 
                className='sidebar-header'
                sx={{
                    backgroundColor: '#181C32',
                    width: '250px',
                    height: '70px',
                }}
            >
                <IconButton
                    onClick={showSidebar}
                    sx={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        left: isVisible ? '199px':'10px',
                        top: '10px'
                    }}
                >
                    <MenuIcon color='primary' fontSize='large'/>
                </IconButton>
                </Box>
            </Box>
            <Box 
                className='navbar-right'
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative'
                }}
            >
                <IconButton
                    sx={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        right: '20px'
                    }}
                >
                    <Typography 
                        variant='body1'
                        color='primary'
                        fontSize='small' 
                        sx={{
                            marginRight: '10px',
                            fontWeight: '700'
                        }}
                    >Eray Aynacı</Typography>
                    <AccountCircleIcon color='primary' fontSize='medium'/>
                </IconButton>
            </Box>
    </Stack>
    <Sidebar isVisible={isVisible}/>
    </>    
  );
}

export default Navbar