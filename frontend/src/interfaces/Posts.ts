export interface Post {
  title: string;
  infoContent: string;
  id?: number;
  "id_user"?: number;
  status?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};

export interface CombinePost {
  postReducer: Post
}

export interface DispatchPost {
  type: string;
  payload: Post[]
}