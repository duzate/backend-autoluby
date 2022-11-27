import { AppDataSource } from "../database/dataSource";
import { Employee } from "../entity/Employee";

export const employeeRepository = AppDataSource.getRepository(Employee)
