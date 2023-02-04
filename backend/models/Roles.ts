import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Role = db.define("roles",{
  "type":{
    type: DataTypes.STRING
  }
});

export default Role;