import { Stack } from '@mui/material';
import { StudentCard, DuyuruCard } from '../components';

const Home = () => {
  return (
    <Stack direction='row'>
      <StudentCard />
      <DuyuruCard />
    </Stack>
  )
}

export default Home

