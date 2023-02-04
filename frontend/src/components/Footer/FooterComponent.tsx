import React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { MdOutlineCopyright } from "react-icons/md";
import { Stack } from '@mui/material';

const FooterComponent = () => {
  return (
    <>
      <Paper style={{ backgroundColor: "#000", padding: "1rem" }}>
        <Stack direction="row" alignItems="center" justifyContent="center" gap={1}>
          <Typography color="#fff" textAlign="center">
            Developers
          </Typography>
          <MdOutlineCopyright color="#fff" fontSize={16}/>
          <Typography color="#fff" textAlign="center">
            Copyright - 2023
          </Typography>
        </Stack>
      </Paper>
    </>
  );
};

export default FooterComponent;
