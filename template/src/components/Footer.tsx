import * as React from 'react';

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

import KhCopyright from './Copyright';

function KhFooter () {
  return (
    <React.Fragment>
      <Box
          component="footer"
          sx={{
            py: 5,
            px: 5,
            mt: '1.4rem',
          }}
        >
          <Container maxWidth="sm">
            <KhCopyright />
          </Container>
        </Box>
    </React.Fragment>
  );
}


export default KhFooter ;