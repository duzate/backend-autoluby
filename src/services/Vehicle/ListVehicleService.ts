import { vehicleRepository } from "../../repositories/VehicleRepository"

class ListVehicleService {
  async execute() {
    const employee = await vehicleRepository.find()

    return employee
  }
}

export default ListVehicleService
