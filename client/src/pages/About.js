import React from 'react';
import { Box } from '@mui/system';
import Title from '../components/Title';
import { Typography } from '@mui/material';

function About() {
  return (
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
      <Title text={'About'} />

      <Typography sx={{ fontFamily: 'Rubik', color: 'white' }}>
        The project was made for practicing CRUD commands in React & MongoDB and
        connecting the Frontend to the Backend with Axios library.
        <br />
        The entire Frontend was created using Material-UI components.
        <br />
        <br />
        Created by Erez Amirav
      </Typography>
    </Box>
  );
}

export default About;
