import { Request, Response } from "express";
import CreateOrderService from "../services/Order/CreateOrderService";
import DeleteOrderService from "../services/Order/DeleteOrderService";
import ListOrderService from "../services/Order/ListOrderService";

class OrdersController {
  async store(req: Request, res: Response) {
    const { employeeId, vehicleId, selled, status } = req.body

    const orderService = new CreateOrderService()

    const order = await orderService.execute({ employeeId, vehicleId, selled, status })

    return res.json(order).status(202)
  }

  async list(req: Request, res: Response) {
    const { employeeId, vehicleId, selled, status } = req.query

    const orderService = new ListOrderService()

    const order = await orderService.execute({ employeeId, vehicleId, selled, status })

    return res.json(order)
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params

    const orderService = new DeleteOrderService()

    await orderService.execute({ id })

    return res.send('Veículo deletado')
  }
}

export default OrdersController
