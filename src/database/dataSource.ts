import 'dotenv/config'
import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_NAME,
  password: process.env.DB_PASS,
  database: process.env.DB_BASE,
  entities: [
    'src/entity/*.ts'
  ],
  migrations: [
    'src/database/migrations/*.ts'
  ],
  synchronize: true,
  logging: true,
})
