export interface Post {
  id: number;
  id_user: number;
  status: boolean;
  title: string;
  infoContent: string;
  createdAt: Date;
  updatedAt: Date;
  author: any;
};