import { Post } from '../interfaces/Posts';
import http from '../service/HTTPService';

const path = "/posts";

export const getPosts = async () => await http.get(path);

export const getPost = async (id: number ) => await http.get(`${ path }/${ id }`);

export const createPost = async (data : Post) => await http.post(path, data);

export const patchPost = async (id: number, data : any) => await http.patch(`${ path }/${ id }`, data);

export const deletePost = async (id : number) => await http.delete(`${ path }/${ id }`);