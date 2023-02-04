import { useState } from 'react'
import { createPost } from '../../../actions/posts.controller';
import { Post } from '../../../interfaces/Posts';

export interface Values {
  title: string;
  description: string;
}

export const useCreatePost = (onCloseForm : any) => {

  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const createPostFn = async (payload: Values) => {
    const { title, description } = payload;

    const dataToSend: Post = {
      id_user: 2,
      title,
      infoContent: description,
    };

    try {
      const result = await createPost(dataToSend);

      console.log(result);

      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
        onCloseForm();
      }, 3000);
    } catch (error) {
      setError(true);

      setTimeout(() => {
        setError(false)
      }, 3000);

      console.log(error);
    }
  };

  return {
    error,
    success,
    setSuccess,
    setError,
    createPostFn
  }
};

