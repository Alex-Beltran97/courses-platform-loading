import { Request, Response } from 'express';
import Role from '../models/Roles';
import User from '../models/User';

const attributes = ["id", "type"];

export const getUsers = async (req: Request, res: Response) =>{

  const users = await User.findAll({ include: { model: Role, attributes } });

  res.json(users);
};

export const getUser = async (req: Request, res: Response) =>{

  const { id } = req.params;

  const user = await User.findByPk(id);

  res.json(user ?? {});
};

export const createUser = async (req: Request, res: Response) =>{

  const { body } = req;

  try {

    const user = await User.build(body);

    user.save();

    res.json(user);
  } catch(error){

    console.log(error);

    res.status(500).json({
      msg:"There was a problem creating an user"
    });
  };
};

export const putUser = async (req: Request, res: Response) =>{

  const { id } = req.params;
  const { body } = req;
  
  try {

    const user = await User.findByPk(id);

    await user?.update({...body, updatedAt: new Date().toISOString()});

    res.json(user);

  } catch(error) {
    console.log(error);

    res.status(500).json({msg:"There was a problem editing the user"});
  };
};

export const patchUser = async (req: Request, res: Response) =>{

  const { id } = req.params;
  const { body } = req;

  try {

    const user = await User.findByPk(id);

    await user?.update({...body, updatedAt: new Date().toISOString()});

    res.json(user);

  } catch(error){
    console.log(error);

    res.status(500).json({
      msg:"There is a problem editing the post"
    });
  };
};

export const deleteUser = async (req: Request, res: Response) =>{

  const { id } = req.params;

  try {

    const user = await User.findByPk(id);

    await user?.update({ status: 0, updatedAt: new Date().toISOString()});

    res.json(user);

  } catch (error) {
    console.log(error);

    res.status(500).json({
      msg: "There is a problem trying to delete this user"
    });
  };
};