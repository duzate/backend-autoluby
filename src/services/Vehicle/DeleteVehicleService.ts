
import { vehicleRepository } from "../../repositories/VehicleRepository"

class DeleteVehicleService {
  async execute({ chassi }) {
    const vehicle = await vehicleRepository.findOneBy({ chassi })

    if (!vehicle) {
      throw new Error('Veículo não cadastrado')
    }

    await vehicleRepository.delete(vehicle.id)
  }
}

export default DeleteVehicleService
