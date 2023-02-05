import { createTheme } from '@mui/material'

const theme = createTheme({
  palette:{
    primary:{
      main: "#ff9000"
    },
    secondary:{
      main:"#000"
    }    
  }
});

export const linkStyle = {
  textDecoration: "none",
  color:"#fff"
};

export const paperStyle : any = {
  position: "absolute",
  width:"80%",
  top:"6rem",
  left:"2rem",
  padding: "1rem"
}

export default theme;