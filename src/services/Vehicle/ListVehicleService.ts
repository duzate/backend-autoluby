import { vehicleRepository } from "../../repositories/VehicleRepository"

class ListVehicleService {
  async execute({ marca, modelo, ano, km, cor, chassi, price, status }) {
    const employee = await vehicleRepository.find({
      where: {
        marca,
        modelo,
        ano,
        km,
        cor,
        chassi,
        price,
        status
      }
    }

    )

    return employee
  }
}

export default ListVehicleService
