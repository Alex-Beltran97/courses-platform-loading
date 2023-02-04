import React from 'react';
import { Paper, IconButton, Typography, Stack } from '@mui/material';
import { MdMenu } from "react-icons/md";
import { Link } from 'react-router-dom';
import { linkStyle } from '../../styles/style';

const NavBar = () => {
  return (<>
    <Paper elevation={ 2 } style={ stylePaper } >
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <IconButton>
          <MdMenu color='#fff' />
        </IconButton>
        <Stack direction="row" gap={2} paddingX={ 1 }>
          <Link to="/register" style={ linkStyle }>
            <Typography >Register</Typography>
          </Link>
          <Link to="/login" style={ linkStyle }>
            <Typography>Login</Typography>
          </Link>
        </Stack>
      </Stack>
    </Paper>
  </>)
};

const stylePaper = {
  padding: "0 0.5rem",
  backgroundColor: "#ff9000"
};

export default NavBar;