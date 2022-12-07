import React from 'react';
import { Box } from '@mui/system';
import Title from '../components/Title';
import { Button, Avatar, Grid } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ProfileImg from '../assets/imgs/meImg.jpg';

function Contact() {
  return (
    <>
      <Box
        sx={{
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',

          background: 'linear-gradient(25deg, #0a1e80,#a72ca8)',
          borderRadius: 5,
          padding: 2,
          alignItems: 'center',
        }}
      >
        <Title text={'Contact Us'} />
        <Box
          sx={{
            textAlign: 'left',
            justifyContent: 'center',
            display: 'flex',
            borderRadius: 5,
            padding: 2,
            alignItems: 'center',
          }}
        >
          <Avatar
            alt="Erez Amirav"
            sx={{
              width: '100px',
              height: '100px',
              border: '4px solid',
              borderColor: 'rgb(255, 255, 255, 0.2)',
            }}
            src={ProfileImg}
          />
          <Grid>
            <Grid item>
              <Button
                variant="filled"
                href={'tel:+972509324402'}
                sx={{
                  color: 'white',
                  fontFamily: 'Rubik',
                  ':hover': {
                    color: 'lime',
                  },
                }}
              >
                <LocalPhoneIcon fontSize="small" sx={{ mr: 1 }} />
                +972 50-932-4402
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="filled"
                sx={{
                  color: 'white',
                  fontFamily: 'Rubik',
                  ':hover': {
                    color: 'lime',
                  },
                }}
                href={'mailto:erezamirav@gmail.com'}
              >
                <EmailIcon fontSize="small" sx={{ mr: 1 }} />
                erezamirav@gmail.com
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="filled"
                sx={{
                  color: 'white',
                  fontFamily: 'Rubik',
                  ':hover': {
                    color: 'lime',
                  },
                }}
                target="_blank"
                href={'https://www.linkedin.com/in/erez-amirav/'}
              >
                <LinkedInIcon fontSize="small" sx={{ mr: 1 }} />
                Erez Amirav
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default Contact;
