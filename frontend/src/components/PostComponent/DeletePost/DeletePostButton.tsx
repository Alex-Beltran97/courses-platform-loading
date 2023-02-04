import React, { useState } from 'react';

import { Button, Modal, Paper, Stack, Typography } from '@mui/material';
import { deletePost } from '../../../actions/posts.controller';
import { paperStyle } from '../../../styles/style';

interface Props {
  idPost: number;
  open: boolean;
  handleClose: () => void;
};

const DeletePostButton = ( { idPost,  open, handleClose } : Props ) => {
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const detelePostFn = async (id: number) =>{
    try {

      const result = await deletePost(id);
      
      console.log(result);

      setSuccess(true);
      
      setTimeout(()=>{
        setSuccess(false);
        handleClose();
      }, 3000);

    } catch (error) {
      console.log(error);

      setError(true);

      setTimeout(()=>{
        setError(false);
        handleClose();
      }, 3000);
    };
  };

  return (<>
    <Modal
      open={ open }
      onClose={ handleClose }
    >
      <Paper style={ paperStyle }>
        <Stack gap={2}>
          <Typography variant='h5' textAlign="center">Delete Post</Typography>
          <Typography textAlign="center">Are you sure to delete this post?</Typography>
          { !success ?
            <Stack direction="row" gap={ 1 } alignItems="center" justifyContent="center">
              <Button variant="contained" style={{ color: "#fff"}} onClick={ ()=>detelePostFn( idPost ) }>Confirm</Button>
              <Button variant="outlined" onClick={ handleClose }>Cancel</Button>
            </Stack>
            :
            <Typography color="primary" textAlign="center">The post was deleteted successfully</Typography>
          }
          { error && <Typography color="#ff0000" textAlign="center">There is a problem to delete this post</Typography> }
        </Stack>
      </Paper>
    </Modal>
  </>)
};

export default DeletePostButton;