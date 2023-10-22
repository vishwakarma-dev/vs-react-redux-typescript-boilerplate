import * as React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import NavigateNextSharpIcon from '@mui/icons-material/NavigateNextSharp';

import PageNotFound from "../../assets/response/404.svg"

function Kh404 () {
  return (
    <React.Fragment>
      <Container maxWidth="md">
        <Box mt={5} display={'flex'} flexDirection={'row'} justifyContent={'space-around'}>
          <Box>
              <img src={PageNotFound} width={"100%"} />
            <Typography variant='h3' textAlign={'center'} fontWeight={400}>Looks like You Lost !</Typography> 
          </Box>
        </Box>
        <Box display={'flex'} flexDirection={'row'} justifyContent={'space-around'} mt={5}>
            <Button variant='outlined' endIcon={<NavigateNextSharpIcon />} size='large' href='/' color='success' >
                Go to Home
            </Button>
        </Box>
      </Container>
    </React.Fragment>
  );
}


export default Kh404 ;