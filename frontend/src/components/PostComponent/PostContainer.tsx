import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

import Poster from "./Poster";
import { Stack } from '@mui/material';
import { Post } from "../../models/Posts";
import MenuPost from "./MenuPost";

interface Props {
  data: Post,
};

const PostContainer = ({ data }: Props) : any => {
  return (
    <>
      <Paper style={{ padding: "1rem", marginTop: "1rem", position: "relative" }} elevation={ 2 }>
        <MenuPost idPost={data.id} />
        <Stack gap={1}>
          <Poster author={ data.author } date={data.updatedAt} />
          <Typography variant="h4">{data.title}</Typography>
          <Typography variant="subtitle2" fontWeight={300}>{data.infoContent}</Typography>
        </Stack>
      </Paper>
    </>
  );
};

export default PostContainer;
