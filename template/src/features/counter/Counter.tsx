import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { decrement, increment, incrementByAmount, incrementAsync, incrementIfOdd, selectCount } from './counterSlice';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const KhRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection : "row",
  justifyContent: 'space-around',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
}));

const KhButton = styled(Button)(({ theme }) => ({
  fontSize: '24px',
  marginInlineStart : "5px",
  marginInlineEnd : "5px",
  color: '#8100ff',
  backgroundColor: 'rgba(249, 248, 250, 0.1)',
  borderRadius: '10px',
  transition: 'all 0.15s',
  '&:hover': {
    border: '1px solid #662dd7',
  },
  '&:active': {
    backgroundColor: 'rgba(151, 132, 189, 0.2)',
  },
}));

const KhAsyncButton = styled(KhButton)(({ theme }) => ({
  position: 'relative',
  '&.async-button': {
    '&:after': {
      content: '""',
      backgroundColor: 'rgba(95, 179, 239, 0.15)',
      display: 'block',
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: '0',
      top: '0',
      opacity: '0',
      transition: 'width 1s linear, opacity 0.5s ease 1s',
    },
    '&:active:after': {
      width: '0',
      opacity: '2',
      transition: '0s',
    },
  },  
}));


const KhValue = styled(Typography)({
  paddingLeft: '24px',
  paddingRight: '24px',
  fontSize : '56px',
  fontFamily: 'Algar',
});

const KhTextbox = styled(TextField)({
  fontSize: '32px',
  padding: '2px',
  '& .MuiOutlinedInput-input' :{
    fontSize : "20px",
    textAlign : "center",
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#8100ff', // Change the border color here
    },
  },
  '& .MuiFormLabel-root' : {
    color : "#8100ff",
    transform: 'translateX(0, -50%)', // Center the label text horizontally
    left: '25%', // Move the label to the center
  },
  '& .MuiOutlinedInput-notchedOutline' : {
    textAlign : "center",
    border : "1px single #8100ff" ,
  }
});


export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');
  const incrementValue = Number(incrementAmount) || 0;

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <KhRow>
        <KhButton
          variant="contained"
          color="inherit"
          onClick={() => dispatch(decrement())}
        >
          <RemoveIcon />
        </KhButton>
        <KhValue variant="h3">{count}</KhValue>
        <KhButton
          variant="contained"
          color="inherit"
          onClick={() => dispatch(increment())}
        >
          <AddIcon />
        </KhButton>
      </KhRow>
      <KhRow justifyContent={"center"}>
        <KhTextbox
          label="Set increment amount"
          type='number'
          variant="outlined"
          size='small'
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
      </KhRow>
      <KhRow>
        <KhButton
          variant="contained"
          color="inherit"
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </KhButton>
        <KhAsyncButton
          className = "async-button"
          variant="contained"
          color="inherit"
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </KhAsyncButton>
        <KhButton
          variant="contained"
          color="inherit"
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </KhButton>
      </KhRow>
    </Box>
  );
}


