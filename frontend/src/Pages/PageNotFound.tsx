import React from 'react';

import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';

const PageNotFound = () => {
  return (<>
    <Container>
      <h1>Error 404 - Page Not Found</h1>
      <Link to="/">
        <Typography>Return</Typography>
      </Link>
    </Container>
  </>
  );
}

export default PageNotFound;