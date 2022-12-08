import { orderRepository } from "../../repositories/OrderRepository"

class ListOrderService {
  async execute({ employeeId, vehicleId, selled, status }) {
    const order = await orderRepository.find({
      select: {
        employeeId: true,
        vehicleId: true,
        selled: true,
        status: true
      },
      where: {
        employeeId,
        vehicleId,
        selled,
        status
      }
    })

    return order
  }
}

export default ListOrderService
