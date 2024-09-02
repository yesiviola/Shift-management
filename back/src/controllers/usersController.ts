import { Request, Response } from "express";
import {
  createUserService,
  getUserByIdService,
  getUsersService,
} from "../services/usersService";
import IUser from "../interfaces/IUser";
import IUserDto from "../dtos/IUserDto";
import ICredentialsDto from "../dtos/ICredentialsDto";
import { validateCredentials } from "../services/credentialsService";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users: IUser[] = await getUsersService();
    res.status(200).json(users);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getUserID = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userById: IUser = await getUserByIdService(Number(id));
    res.status(200).json(userById);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, username, password, birthdate, nDni }: IUserDto =
      req.body;
    const user: IUser = await createUserService({
      name,
      email,
      username,
      password,
      birthdate,
      nDni,
    });
    res.status(201).json(user);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { username, password }: ICredentialsDto = req.body;

    const credentialsId: number = await validateCredentials({
      username,
      password,
    });

    const user: IUser = await getUserByIdService(credentialsId);

    res.status(200).json(user);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
