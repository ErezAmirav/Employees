import React, { useState, useEffect } from 'react';
import { TextField, Box, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Title from './Title';
import Axios from 'axios';

function NewEmployeeCard() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [position, setPosition] = useState('');
  const [phone, setPhone] = useState(0);
  const [empList, setEmpList] = useState([]);

  const addToList = () => {
    Axios.post('http://localhost:3001/insert', {
      firstName: firstName,
      lastName: lastName,
      position: position,
      phone: phone,
    }).then(() => {
      setEmpList([
        ...empList,
        {
          firstName: firstName,
          lastName: lastName,
          position: position,
          phone: phone,
        },
      ]);
    });
  };

  return (
    <>
      <Title text={'New Employee'} />
      <Box
        sx={{
          '& .MuiTextField-root': { m: 1, width: '20ch' },
        }}
      >
        <TextField
          required
          id="outlined-required"
          label="First Name"
          variant="filled"
          sx={{
            background: 'linear-gradient(45deg, #b9c0c3,#90b1c2)',
            borderRadius: 2,
          }}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />

        <TextField
          required
          id="outlined-required"
          label="Last Name"
          variant="filled"
          sx={{
            background: 'linear-gradient(45deg, #b9c0c3,#90b1c2)',
            borderRadius: 2,
          }}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <TextField
          required
          id="outlined-required"
          label="Position"
          variant="filled"
          sx={{
            background: 'linear-gradient(45deg, #b9c0c3,#90b1c2)',
            borderRadius: 2,
          }}
          onChange={(e) => {
            setPosition(e.target.value);
          }}
        />
        <TextField
          required
          id="outlined-required"
          label="Phone"
          variant="filled"
          sx={{
            background: 'linear-gradient(45deg, #b9c0c3,#90b1c2)',
            borderRadius: 2,
          }}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <Button
          variant="contained"
          sx={{
            fontFamily: 'Rubik',
            background: 'linear-gradient(45deg, #3f5efb, #fc466b)',
            borderRadius: 5,
            mt: 1,
            p: 2,
            ':hover': {
              color: 'lime',
            },
          }}
          onClick={addToList}
        >
          <AddIcon />
          Add
        </Button>
      </Box>
    </>
  );
}

export default NewEmployeeCard;
