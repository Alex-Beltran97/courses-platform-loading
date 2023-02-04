import React, { useState, useEffect } from 'react';

import { Fab, MenuItem, Modal, Paper, Typography } from '@mui/material';
import { MdAdd } from 'react-icons/md';
import FormAddPost from './FormAddPost';
import { paperStyle } from '../../../styles/style';

interface Props {
  isEdit: boolean,
  idPost?: number
};

const ModalAddPost = ({ isEdit = false, idPost } :  Props) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen( true );
  const handleClose = () => setOpen( false );

  return (<>
    { isEdit ?
      <MenuItem onClick={ handleOpen }>Edit Post</MenuItem>
      :
      <Fab style={ btnStyle } color='primary' onClick={ handleOpen }>
        <MdAdd fontSize={24} color="#fff" />
      </Fab>
    }
    <Modal
      open={ open }
      onClose={ handleClose }
    >
      <Paper style={ paperStyle }>
        <Typography variant="h5" textAlign="center">{isEdit ? "Edit" : "Create a"} post</Typography>
        <FormAddPost 
          isEdit={ isEdit }
          onCloseForm={handleClose}
          idPost={ idPost }
        />
      </Paper>
    </Modal>
  </>
  )
};

const btnStyle : any = {
  position: "sticky",
  bottom: "1rem",
  right: "1rem",
  marginLeft: "16rem"
};


export default ModalAddPost;