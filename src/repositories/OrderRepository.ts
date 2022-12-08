import { AppDataSource } from "../database/dataSource";
import { Order } from "../entity/Order";

export const orderRepository = AppDataSource.getRepository(Order)
