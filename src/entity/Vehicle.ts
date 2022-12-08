
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToOne } from "typeorm";
import { Order } from "./Order";

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

  @Column({ default: 'Disponível' })
  status: string

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  @OneToOne(() => Order, (order) => order.vehicle)
  order: Order
}
