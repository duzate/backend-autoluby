import { vehicleRepository } from "../../repositories/VehicleRepository"

class CreateVehicleService {
  async execute({ marca, modelo, ano, km, cor, chassi, price }) {
    const vehicleExists = await vehicleRepository.findOneBy({ chassi })

    if (vehicleExists) {
      throw new Error('Veículo já está cadastrado')
    }

    const vehicle = vehicleRepository.create({ marca, modelo, ano, km, cor, chassi, price })

    await vehicleRepository.save(vehicle)


    return vehicle
  }
}

export default CreateVehicleService
