import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { User } from "./User";

@Entity({
  name: "credentials",
})
export class Credentials {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  username!: string;

  @Column()
  password!: string;

  @OneToOne(() => User)
  @JoinColumn()
  user!: User;
}
