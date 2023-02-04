import { DataTypes } from 'sequelize';
import db from '../db/connection';
import User from './User';

const Post = db.define("posts",{
  "id_user":{
    type: DataTypes.INTEGER,
  },
  title:{
    type: DataTypes.STRING
  },
  infoContent:{
    type: DataTypes.STRING
  },
  status:{
    type: DataTypes.TINYINT
  }
});

Post.belongsTo(User, {foreignKey:"id_user", as: "author"});

export default Post;