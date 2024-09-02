import IUserDto from "../dtos/IUserDto";
import IUser from "../interfaces/IUser";
import { createCredentials } from "./credentialsService";

const users: IUser[] = [];
let userId: number = 1;

export const getUsersService = async (): Promise<IUser[]> => {
  const allUsers: IUser[] = users; //aqui va la llamada a la DB

  return allUsers;
};

export const getUserByIdService = async (id: number): Promise<IUser> => {
  const foundUser: IUser | undefined = users.find((user) => user.id === id);
  if (!foundUser) {
    throw new Error("User not found");
  }
  return foundUser;
};

export const createUserService = async (params: IUserDto): Promise<IUser> => {
  const newCredentials: number = await createCredentials({
    username: params.username,
    password: params.password,
  });
  const newUser: IUser = {
    id: userId++,
    name: params.name,
    email: params.email,
    birthdate: params.birthdate,
    nDni: params.nDni,
    credentialsId: newCredentials,
  };

  users.push(newUser);
  return newUser;
};
