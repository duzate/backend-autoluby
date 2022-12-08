import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Employee } from "./Employee";
import { Vehicle } from "./Vehicle";

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  employeeId: string

  @Column()
  vehicleId: string

  @Column('decimal')
  selled: number

  @Column()
  status: string

  @Column({ type: 'date' })
  date_negotiation: string

  @CreateDateColumn()
  created_at: Date

  @CreateDateColumn()
  updated_at: Date

  @ManyToOne(() => Employee, (employee) => employee.order)
  employee: Employee

  @OneToOne(() => Vehicle, (vehicle) => vehicle.order)
  vehicle: Vehicle

}

