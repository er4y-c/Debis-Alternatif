import { Card, Box, Typography } from '@mui/material';
import {duyurular} from '../utils/duyurular';

const DuyuruCard = () => {
  return (
    <Box sx={{
        backgroundColor:'white',
        marginTop: '20px',
        marginLeft:'30px',
        paddingLeft:'40px',
        paddingRight:'40px',
        paddingBottom:'40px',
        position:'relative',
        width:'70%',
        
    }}>
        <Box className='duyuru-card-header'
            sx={{
                borderBottom: '1px solid #E4E6EF',
                padding:'20px'
            }}
        >
            <Typography
                variant='h6' 
                sx={{
                    fontWeight:'600',
                    fontSize:'18px',
                }}>
                Duyurular
            </Typography>
        </Box>
        <Box className='duyuru-container'
                sx={{
                    backgroundColor:'#F3F6F9',
                    top:'100px',
                    borderRadius:'20px',
                }}
            > 
            {duyurular.map((duyuru) => (
                <>
                    <Typography variant='body1' color='primary' sx={{backgroundColor:'white',padding:'25px 0px 12px 12px'}}>{duyuru.date}</Typography>  
                    <Typography variant='h5' sx={{margin:'20px 0px 20px 20px'}}>{duyuru.title}</Typography>
                    <Typography variant='body2' sx={{margin:'20px 0px 20px 20px'}}>{duyuru.content}</Typography>
                </>    
            ))}
        </Box>  
    </Box>
  )
}

export default DuyuruCard