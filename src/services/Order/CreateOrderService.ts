import { orderRepository } from "../../repositories/OrderRepository"
import { vehicleRepository } from "../../repositories/VehicleRepository"
import { employeeRepository } from "../../repositories/EmployeeRepository"

class CreateOrderService {
  async execute({ employeeId, vehicleId, selled, status }) {

    const employeeExists = await employeeRepository.findOneBy({ id: employeeId })

    if (!employeeExists) {
      throw new Error('Vendedor não cadastrado')
    }

    const vehicleExists = await vehicleRepository.findOneBy({ id: vehicleId })

    if (!vehicleExists) {
      throw new Error('Veículo não cadastrado')
    }

    if (vehicleExists.status !== 'Disponível') {
      throw new Error('Veículo não está mais disponível')
    }

    const order = orderRepository.create({
      employeeId,
      vehicleId,
      selled,
      status
    })

    await orderRepository.save(order)

    vehicleExists.status = status

    await vehicleRepository.save(vehicleExists)

    return order
  }
}

export default CreateOrderService
