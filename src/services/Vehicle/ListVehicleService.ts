import { vehicleRepository } from "../../repositories/VehicleRepository"

class ListVehicleService {
  async execute({ marca, modelo, ano, km, cor, chassi, price, status }) {
    const vehicle = await vehicleRepository.find({
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
    })

    return vehicle
  }
}

export default ListVehicleService
