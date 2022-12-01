import { AppDataSource } from "../database/dataSource";
import { Vehicle } from "../entity/Vehicle";

export const vehicleRepository = AppDataSource.getRepository(Vehicle)
