import React, { useState } from 'react';

import { Button, InputLabel, Stack, Typography } from '@mui/material';
import { Field, Form, Formik, ErrorMessage} from 'formik';
import * as Yup from 'yup';


interface Values {
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().required("The email must be required").email("This email entered is not valid"),
  password: Yup.string().required("Password must be required")
});


const FormLogin = () => {
  const [initialValues, setInitialValues] = useState<Values>({
    email: "",
    password: ""
  });

  return (<>
    <Formik
      initialValues={initialValues}

      enableReinitialize={ true }

      validationSchema={ validationSchema }
      
      onSubmit={(values: Values, {resetForm}) => {

        console.log(values);

        resetForm();

      }}
    >
      {() => (
        <Form>
          <Stack gap={ 2 }>
            <Stack>
              <InputLabel htmlFor='email'>Email: </InputLabel>
              <Field type="email" name="email" />
              <ErrorMessage name='email' render={(msg)=> <ErrorMsg msg={ msg } />} />
            </Stack>
            <Stack>
              <InputLabel htmlFor='password'>Password: </InputLabel>
              <Field type="password" name="password" />
              <ErrorMessage name='password' render={(msg)=> <ErrorMsg msg={ msg } />} />
            </Stack>
            <Button variant="contained" type="submit" style={{ color:"#fff" }}>
              Login
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  </>)
};

interface ErrorMsgProps {
  msg: string;
};

const ErrorMsg = ({ msg }: ErrorMsgProps) =>(<Typography variant="body1" color="#ff0000">
  { msg }
</Typography>)

export default FormLogin;