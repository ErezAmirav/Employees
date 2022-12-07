import React from 'react';
import { Box } from '@mui/system';
import Title from '../components/Title';
function NotFound() {
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
      <Title text={'Error 404'} />
      <Title text={'Page Not Found'} />

      <img src="https://64.media.tumblr.com/49f8e0816a456ea8281f1f24abebccbc/tumblr_opg8s5PrzL1rpduwho1_500.gif" />
    </Box>
  );
}

export default NotFound;
