import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { Appointments } from "../entities/appointments";
import { Credentials } from "../entities/Credentials";

import { DB_HOST, DB_PASSWORD, DB_PORT, DB_USERNAME } from "./envs";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: DB_HOST,
  port: Number(DB_PORT),
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: "type",
  dropSchema: false,
  synchronize: true,
  logging: true,
  entities: [User, Appointments, Credentials],
  subscribers: [],
  migrations: [],
});
