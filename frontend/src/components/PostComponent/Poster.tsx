import React from 'react';
import { Stack, Avatar, Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { MdOutlineAccessTime } from 'react-icons/md';
import { Author } from '../../interfaces/User';

interface Props {
  author: Author;
  date: Date
};

const Poster = ({ author, date } : Props) => {
  return (<>
    <Stack direction="row" alignItems="center" gap={1}>
      <Avatar />
      <Box>
        <Typography variant='subtitle1' fontWeight={700}>{ author.name }</Typography>
        <Stack direction="row" gap={1} alignItems="center">
          <MdOutlineAccessTime />
          <Typography variant='body1' fontWeight={300}>
            { new Date(date).toLocaleString() }
          </Typography>
        </Stack>
      </Box>
    </Stack>
  </>)
};

export default Poster;