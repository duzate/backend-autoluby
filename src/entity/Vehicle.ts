
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity('vehicles')
export class Vehicle {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  modelo: string

  @Column()
  marca: string

  @Column()
  ano: string

  @Column()
  km: string

  @Column()
  cor: string

  @Column()
  chassi: string

  @Column()
  price: string

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;


}
