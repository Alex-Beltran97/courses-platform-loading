import React, { useState, useEffect } from "react";
import { Button, InputLabel, Stack, TextareaAutosize } from "@mui/material";
import { Formik, Form, Field } from "formik";
import Typography from "@mui/material/Typography";
import { useCreatePost, Values } from "../hooks/useCreatePost";
import { getPost, patchPost } from "../../../actions/posts.controller";

interface Props {
  isEdit: boolean;
  onCloseForm: () => void;
  idPost: number | undefined;
}

const FormAddPost = ({ isEdit, onCloseForm, idPost }: Props) => {

  const { 
    success,
    error,
    setSuccess,
    setError,
    createPostFn
  } = useCreatePost(onCloseForm);

  const [initialValue, setInitialValue] = useState({
    title: "",
    description: ""
  });
  
  const getThePost = async (id: number) =>{
    try {

      const { data } = await getPost(id)

      const {title, infoContent} = data;

      setInitialValue({ title, description: infoContent });

      
    } catch ( error ) {

      console.log(error);
    };
  };

  const editForm = async (id: number, payload: Values) =>{
    try {

      setSuccess(true);

      const result = await patchPost(id, {...payload, infoContent: payload.description });

      setTimeout(()=>{
        setSuccess(false);
        onCloseForm();
      }, 3000);

      console.log(result)


    } catch (error) {
      console.log(error);

      setError(true);

      setTimeout(()=>{
        setError(false);
      }, 3000);

    };
  };

  useEffect(() => {
    if ( idPost && isEdit ){
      getThePost(idPost!);
    };
  }, []);

  return (
    <>
      <Formik
        initialValues={ initialValue }

        enableReinitialize={ true }

        onSubmit={(values: Values) => {

          if( isEdit ){
            editForm(idPost!, values);
            return
          };

          createPostFn(values);
        }}
      >
        {({ values, handleChange }) => (
          <Form>
            <Stack gap={2}>
              <Stack>
                <InputLabel style={{ color: "#000" }}>Title</InputLabel>
                <Field type="text" name="title" />
              </Stack>
              <Stack>
                <InputLabel style={{ color: "#000" }}>Name</InputLabel>
                <TextareaAutosize
                  minRows={4}
                  name="description"
                  onChange={handleChange}
                  value={values.description}
                />
              </Stack>
              { !success ? 
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  gap={1}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    style={{ color: "#fff" }}
                  >
                    Save
                  </Button>
                  <Button variant="outlined" onClick={onCloseForm}>
                    Cancel
                  </Button>
                </Stack>
              : 
                <Typography color="primary" textAlign="center">
                  Save was successfully
                </Typography>
              }
              { error &&
                <Typography color="#ff0000" textAlign="center">
                  There is a problem to save the post
                </Typography>
              }
            </Stack>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormAddPost;
