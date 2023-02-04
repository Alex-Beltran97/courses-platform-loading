import http from '../service/HTTPService';

const path = "/users";

export const getUsers = async () => await http.get(path);

export const getUserById = async (id: number) => await http.get(`${ path }/${ id }`);