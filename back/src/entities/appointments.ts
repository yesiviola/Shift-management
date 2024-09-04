import { User } from "./User";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity({
  name: "appointments",
})
export class Appointments {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column()
  date: string = "";

  @Column()
  description: string = "";

  @ManyToOne(() => User, (user) => user.appointments)
  user: User = new User();
}
