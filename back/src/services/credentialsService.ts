import ICredentialsDto from "../dtos/ICredentialsDto";
import ICredentials from "../interfaces/ICredential";

const credentials: ICredentials[] = [];
let credentialId: number = 1;

export const createCredentials = async (
  params: ICredentialsDto
): Promise<number> => {
  const newCredential: ICredentials = {
    id: credentialId++,
    username: params.username,
    password: params.password,
  };
  credentials.push(newCredential);
  return newCredential.id;
};

export const validateCredentials = async (
  params: ICredentialsDto
): Promise<number> => {
  const { username, password } = params;
  const foundCredentials = credentials.find(
    (credential) =>
      credential.username === username && credential.password === password
  );
  if (
    foundCredentials &&
    foundCredentials.username === username &&
    foundCredentials.password === password
  ) {
    return foundCredentials.id;
  } else {
    throw new Error("Invalid credentials");
  }
};
