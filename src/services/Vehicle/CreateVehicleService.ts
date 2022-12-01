import { vehicleRepository } from "../../repositories/VehicleRepository"

class CreateVehicleService {
  async execute({ marca, modelo, ano, km, cor, chassi, price }) {
    const cpfExists = await vehicleRepository.findOneBy({ chassi })

    if (chassi) {
      throw new Error('Veículo já está cadastrado')
    }

    const vehicle = vehicleRepository.create({ marca, modelo, ano, km, cor, chassi, price })

    await vehicleRepository.save(vehicle)


    return vehicle
  }
}

export default CreateVehicleService
