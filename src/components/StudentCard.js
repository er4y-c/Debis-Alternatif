import { Card, Box, Typography } from '@mui/material';

const StudentCard = () => {
    return (
        <Card sx=
      {{
        width: '300px',
        height: '400px',
        marginTop: '20px',
        marginLeft: '40px',
        marginRight: 0,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Box className='student-card'
        sx={{
          position: 'absolute',
          top: '40px',
          textAlign:'center'
        }}>
          <Box className='student-card-header'>
            <img className='student-card-picture' src='https://fotograf.sabis.sakarya.edu.tr/Fotograf/153a9eab0b4a91e0764c7f0f56cf60dd' />
            <Typography variant='h6' color='#3F4254' fontWeight='bold'>Eray Aynacı</Typography>
            <Typography variant='body2' color='#94949a' fontWeight='bold'>2020280128</Typography>
          </Box>
          <Box className='student-card-body' 
              sx={{
                color:'#717382',
                fontSize:'15px',
                fontWeight:'500',
                marginTop:'20px',
                textAlign:'center',
                right:0,
                left:0
              }}>
          <Typography variant='body3' sx={{display:'block'}}>Fen Fakültesi</Typography>
          <Typography variant='body3' sx={{display:'block'}}>Bilgisayar Bilimleri Bölümü</Typography>
          <Typography variant='body3' sx={{display:'block'}}>Bilgisayar Bilimleri PR.</Typography>
        </Box>
      </Box>
    </Card>
    )
}

export default StudentCard