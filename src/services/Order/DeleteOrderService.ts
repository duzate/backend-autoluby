
import { orderRepository } from "../../repositories/OrderRepository"

class DeleteOrderService {
  async execute({ id }) {
    const order = await orderRepository.findOneBy({ id })

    if (!order) {
      throw new Error('Veículo não cadastrado')
    }

    await orderRepository.delete(order.id)
  }
}

export default DeleteOrderService
