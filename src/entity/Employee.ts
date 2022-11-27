import { hash } from 'bcrypt'
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, BeforeUpdate, BeforeInsert } from "typeorm";

@Entity()
export class Employee {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ unique: true })
  cpf: string

  @Column({ unique: true })
  email: string

  @Column()
  name: string

  @Column({ nullable: true })
  avatar: string

  @Column({ type: 'text', nullable: true })
  bio: string

  @Column()
  password: string

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  @BeforeInsert()
  private async encryptPassword() {
    this.password = await hash(this.password, 8)
  }

}
