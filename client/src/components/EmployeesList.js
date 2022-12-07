import React, { useEffect, useState } from 'react';
import Title from './Title';
import Axios from 'axios';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import { Box } from '@mui/system';
import { Button, TextField, Typography } from '@mui/material';

function EmployeesList() {
  const [empList, setEmpList] = useState([]);
  const [newPosition, setNewPosition] = useState('');

  useEffect(() => {
    Axios.get('http://localhost:3001/read').then((response) =>
      setEmpList(response.data)
    );
  }, [empList]);

  const updatePosition = (id) => {
    Axios.put('http://localhost:3001/update', {
      id: id,
      newPosition: newPosition,
    }).then(() => {
      setEmpList(
        empList.map((val) => {
          return val._id == id
            ? {
                _id: id,
                firstName: val.firstName,
                lastName: val.lastName,
                position: newPosition,
                phone: val.phone,
              }
            : val;
        })
      );
    });
  };

  const deleteEmployee = (id) => {
    if (window.confirm('Are you sure?')) {
      Axios.delete(`http://localhost:3001/delete/${id}`).then(() => {
        setEmpList(
          empList.filter((val) => {
            return val._id != id;
          })
        );
      });
    }
  };

  return (
    <>
      <Title text={'List Of Employees'} />
      <Box
        sx={{
          color: 'white',
          borderRadius: 2,
          width: '100%',
        }}
      >
        <List sx={{}}>
          {empList.map((val) => {
            return (
              <ListItem>
                <ListItemText
                  sx={{ textAlign: 'center' }}
                  disableTypography
                  primary={
                    <Typography sx={{ fontFamily: 'Rubik' }}>
                      {val.firstName} {val.lastName}
                    </Typography>
                  }
                  secondary={
                    <Typography sx={{ fontFamily: 'Rubik' }}>
                      {val.position} {val.phone}
                    </Typography>
                  }
                />
                <Button
                  sx={{
                    color: 'yellow',
                    ':hover': {
                      color: 'lime',
                    },
                  }}
                  onClick={() => updatePosition(val._id)}
                >
                  <EditIcon />
                </Button>
                <TextField
                  id="outlined-basic"
                  label="New Position"
                  sx={{
                    width: '140px',
                    background: 'linear-gradient(45deg, #b9c0c3,#90b1c2)',
                    borderRadius: 2,
                    borderColor: 'transparent',
                  }}
                  onChange={(event) => {
                    setNewPosition(event.target.value);
                  }}
                ></TextField>
                <Button
                  sx={{
                    color: 'red',
                    ':hover': {
                      color: 'lime',
                    },
                  }}
                  onClick={() => deleteEmployee(val._id)}
                >
                  <ClearIcon />
                </Button>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </>
  );
}

export default EmployeesList;
