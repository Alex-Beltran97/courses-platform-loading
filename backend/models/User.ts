import { DataTypes } from 'sequelize';
import db from '../db/connection';
import Role from './Roles';

const User = db.define("users",{
  name:{
    type: DataTypes.STRING,
  },
  email:{
    type: DataTypes.STRING
  },
  password:{
    type: DataTypes.STRING
  },
  "birth_date":{
    type: DataTypes.DATE
  },
  status: {
    type: DataTypes.TINYINT
  },
  "id_role": {
    type: DataTypes.NUMBER
  }
});

User.belongsTo(Role, {foreignKey:"id_role"});

export default User;