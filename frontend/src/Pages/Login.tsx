import React from "react";

import { Container, Paper, Typography, Button } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import FormLogin from "../components/Login/FormLogin";

const Login = () => {
  

  return (
    <>
      <Container>
        <Paper elevation={ 2 } style={ paperStyle }>
          <Typography variant="h4" textAlign="center">
            Login
          </Typography>
          <FormLogin />
        </Paper>
      </Container>
    </>
  );
};

const paperStyle = {
  padding: "1rem"
};

export default Login;
