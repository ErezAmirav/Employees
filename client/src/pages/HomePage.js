import React from 'react';
import NewEmployeeCard from '../components/NewEmployeeCard';
import EmployeesList from '../components/EmployeesList';
import { Box } from '@mui/material';

function HomePage() {
  return (
    <>
      <Box
        sx={{
          textAlign: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(25deg, #0a1e80,#a72ca8)',
          borderRadius: 5,
          padding: 2,
          alignItems: 'center',
        }}
      >
        <NewEmployeeCard />
      </Box>
      <Box
        sx={{
          textAlign: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(25deg, #0a1e80,#a72ca8)',
          backgroundOpacity: '0.5',
          borderRadius: 5,
          padding: 2,
          alignItems: 'center',
          mt: 1,
        }}
      >
        <EmployeesList />
      </Box>
    </>
  );
}

export default HomePage;
