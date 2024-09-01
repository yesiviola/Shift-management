import { Request, Response } from "express";

export const getUsers = (req: Request, res: Response) => {
  res.send("get the list of all users");
};

export const getUserID = (req: Request, res: Response) => {
  res.send("get a user by id");
};

export const register = (req: Request, res: Response) => {
  res.send("register a user");
};

export const login = (req: Request, res: Response) => {
  res.send("login a user");
};
