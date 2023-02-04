import axios from 'axios';

const URL = process.env.REACT_APP_DEV_URL + "/api/v1"; 

const instance = () => axios.create({
  baseURL: URL,
  headers:{
    "Content-Type":"application/json"
  }
});

const method =  {
  get: ( path: string ) => instance().get(path),
  post: ( path: string, data: any ) => instance().post(path, data),
  put: ( path: string, data: any  ) => instance().put(path, data),
  patch: ( path: string, data: any  ) => instance().patch(path, data),
  delete: ( path: string ) => instance().delete(path)
};

export default method;