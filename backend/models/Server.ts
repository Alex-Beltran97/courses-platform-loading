import express,  { Application } from 'express';
import cors from 'cors';
import db from '../db/connection';

import postsRouter from '../routes/posts.routes';
import usersRouter from '../routes/users.routes';
import rolesRouter from '../routes/roles.routes';

class Server {

  private app : Application;
  private PORT : string;
  private apiPaths = {
    posts: "/api/v1/posts",
    users: "/api/v1/users",
    roles: "/api/v1/roles",
  };

  constructor(){
    this.app = express();
    this.PORT = process.env.PORT || "8080";

    // middlewares

    this.middlewares();

    // Routes

    this.routes();

    // DB Connection
    this.dbConnection();

  };

  async dbConnection() {
    try{

      await db.authenticate();

      console.log("Database online");

    } catch(error){
      console.log(error);
      throw new Error("There is an error while connecting the database");
    };
  };

  middlewares() {

    // Body Parser
    this.app.use( express.json() );
    
    // CORS
    this.app.use( cors() );

  };

  routes() {
    const { posts, users, roles } = this.apiPaths;

    this.app.use(posts, postsRouter);
    this.app.use(roles, rolesRouter);
    this.app.use(users, usersRouter);
  };

  listen() {
    this.app.listen(this.PORT,()=>{
      console.log(`Listening in port http://localhost:${ this.PORT }`);
    });
  };
};

export default Server;