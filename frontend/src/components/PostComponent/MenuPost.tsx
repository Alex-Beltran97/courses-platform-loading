import React, { useState } from 'react';

import { IconButton, Menu, MenuItem } from '@mui/material';
import { MdMoreVert } from 'react-icons/md';
import DeletePostButton from './DeletePost/DeletePostButton';
import ModalAddPost from './AddPost/ModalAddPost';

interface Props {
  idPost: number;
};

const MenuPost = ({ idPost } : Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleOpenModal = () =>{
    setOpenModal(true);
    handleClose();
  };
  const handleCloseModal = () =>setOpenModal(false);

  return (<>
    <IconButton style={ styleBtn } onClick={handleClick}>
      <MdMoreVert />
    </IconButton>
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
    >
      <ModalAddPost 
        isEdit={ true }
        idPost={ idPost }
      />
      <MenuItem onClick={ handleOpenModal }>Delete Post</MenuItem>
    </Menu>
    <DeletePostButton 
      idPost={ idPost }
      open={ openModal }
      handleClose={ handleCloseModal } 
    />
  </>)
};

const styleBtn : any  = {
  position: "absolute",
  top: 0,
  right: 0
};

export default MenuPost;