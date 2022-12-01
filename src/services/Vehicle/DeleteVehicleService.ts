
import { vehicleRepository } from "../../repositories/VehicleRepository"

class DeleteVehicleService {
  async execute({ chassi }) {
    const vehicle = await vehicleRepository.findOneBy({ chassi })

    await vehicleRepository.delete(vehicle.id)
  }
}

export default DeleteVehicleService
