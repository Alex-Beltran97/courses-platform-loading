import React, { useEffect, Dispatch } from 'react';

import Container from '@mui/material/Container';
import PostContainer from '../components/PostComponent/PostContainer';
import { getPosts } from '../actions/posts.controller';
import { Post } from '../models/Posts';
import ModalAddPost from '../components/PostComponent/AddPost/ModalAddPost';

import { connect } from 'react-redux';
import { CombinePost, DispatchPost } from '../interfaces/Posts';

interface Props {
  posts: Post[],
  loadData : ( data: Post[]) => void;
};

const Home = ({posts, loadData} : Props ) => {

  const getPostsData = async () =>{
    try{

      const { data } = await getPosts();

      loadData(data);

    } catch (error) {
      console.log(error);
    };
  };

  useEffect(() => {
    getPostsData();
  }, [posts]);


  return (<>
    <Container style={{ padding:"1rem" }}>
      { posts.map( (post: Post) => <PostContainer 
        key={ post.id } 
        data={post}
        />) }
    </Container>
    <ModalAddPost isEdit={ false } />    
  </>)
};

const mapStateToProps  = (state: CombinePost) =>{

  const { postReducer } = state;

  return {
    posts: postReducer
  }
};
const mapDispatchToProps = (dispatch : Dispatch<DispatchPost>) =>({
  loadData: ( data: Post[]) => dispatch({ type:"LOAD_POSTS", payload: data})
});

export default connect(mapStateToProps, mapDispatchToProps)(Home as any);