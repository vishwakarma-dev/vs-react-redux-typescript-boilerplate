import React from 'react';

import react_logo from './assets/app_logo/react.svg';
import ts_logo from './assets/app_logo/typescript.svg';
import mui_logo from './assets/app_logo/material_ui.svg';
import redux_logo from './assets/app_logo/redux.svg';

import { Counter } from './features/counter/Counter';
import './App.css';

import { Container, Box, Typography, Stack, Paper } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import KhFooter from './components/Footer';

function App() {
  return (
    <React.Fragment>
      <Box className='App-container' height={"100Vh"}>
        <Container maxWidth={"md"}>
        <Stack height={"160px"} flexDirection={"row"} justifyContent={"space-around"} alignItems={"center"}>
          <img src={react_logo} style={{width: "25vmin", height: "25vmin"}} className="App-logo" alt="react-logo" />
          <AddIcon  fontSize='large'/>
          <img src={ts_logo} style={{width: "14vmin", height: "14vmin"}} alt="ts-logo" />
          <AddIcon fontSize='large' />
          <img src={mui_logo} style={{width: "15vmin", height: "15vmin"}} alt="mui-logo" />
          <AddIcon fontSize='large' />
          <img src={redux_logo} style={{width: "15vmin", height: "15vmin"}} alt="redux-logo" />
        </Stack>
        <Paper elevation={12} sx={{paddingBlock : "30px", paddingInline : "30px"}}>
        <Counter />
        </Paper>
        <Typography mt={4}  variant='h5' align='center' >
          Edit <code>src/App.tsx</code> and save to reload.
        </Typography>
        <Typography variant='h6' align='center'>
          {"Learn "}
          <Box component={"a"}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
              React
          </Box>
          <span>, </span> 
          <Box component={"a"}
            className="App-link"
            href="https://www.typescriptlang.org/docs/handbook/react.html"
            target="_blank"
            rel="noopener noreferrer"
            >
              Typescript
          </Box>
          <span>, </span>
          <Box component={"a"}
            className="App-link"
            href="https://mui.com/material-ui/getting-started/"
            target="_blank"
            rel="noopener noreferrer"
            >
              Material-UI
          </Box>
          <span>, </span> 
          <Box component={"a"}
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
            >
            Redux
          </Box>
          <span> and </span>
          <Box component={'a'}
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </Box>
        </Typography>
        <KhFooter />
      </Container>
      </Box>
    </React.Fragment>
  );
}

export default App;