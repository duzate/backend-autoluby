import { Router } from "express";
import validation from "../middleware/isValidate";
import OrdersController from "../controllers/OrdersController";
import { createOrderValidation } from "../validations/OrderValidation";

export const orderRoutes = Router()

const orderController = new OrdersController()

orderRoutes.post('/orders', validation(createOrderValidation), orderController.store)
orderRoutes.get('/orders', orderController.list)
orderRoutes.delete('/orders/:id', orderController.delete)

