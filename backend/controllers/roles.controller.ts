import { Request, Response } from 'express';
import Role from '../models/Roles';

export const getRoles = async (req: Request, res: Response) =>{
  try {

    const roles = await Role.findAll();

    res.json(roles);

  } catch ( error ) {
    console.log(error);

    res.status(500).json({
      msg: "There was a problem getting roles"
    });
  };

};

export const createRoles = async (req: Request, res: Response) =>{

  const { body } = req;

  try {

    const role = await Role.build(body);

    role.save();

    res.json(role);

  } catch(error){

    console.log(error);

    res.status(500).json({
      msg:"There was a problem creating a role"
    });
  };
};

export const putRole = async (req: Request, res: Response) =>{

  const { id } = req.params;
  const { body } = req;
  
  try {

    const user = await Role.findByPk(id);

    await user?.update({...body, updatedAt: new Date().toISOString()});

    res.json(user);

  } catch(error) {
    console.log(error);

    res.status(500).json({msg:"There was a problem editing the user"});
  };
};

export const deleteRole = async (req: Request, res: Response) =>{

  const { id } = req.params;

  try {

    const user = await Role.findByPk(id);

    await user?.destroy();

    res.json(user);

  } catch (error) {
    console.log(error);

    res.status(500).json({
      msg: "There is a problem trying to delete this user"
    });
  };
};