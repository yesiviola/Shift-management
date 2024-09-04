import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Appointments } from "../entities/appointments";

@Entity({
  name: "users",
})
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  birthdate!: string;

  @Column()
  nDni!: string;

  @Column()
  credentialsId!: number;

  @OneToMany(
    () => Appointments,
    (appointment: Appointments) => appointment.user
  )
  appointments!: Appointments[];
}
