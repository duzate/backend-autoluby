import { Request, Response } from "express";
import CreateVehicleService from "../services/Vehicle/CreateVehicleService";
import DeleteVehicleService from "../services/Vehicle/DeleteVehicleService";
import ListVehicleService from "../services/Vehicle/ListVehicleService";

class VehiclesController {
  async store(req: Request, res: Response) {
    const { marca, modelo, ano, km, cor, chassi, price } = req.body

    const vehicleService = new CreateVehicleService()

    const vehicle = await vehicleService.execute({ marca, modelo, ano, km, cor, chassi, price })

    return res.json(vehicle).status(202)
  }

  async list(req: Request, res: Response) {
    const { marca, modelo, ano, km, cor, chassi, price, status } = req.query

    const vehicleService = new ListVehicleService()

    const vehicle = await vehicleService.execute({ marca, modelo, ano, km, cor, chassi, price, status })

    return res.json(vehicle)
  }

  async delete(req: Request, res: Response) {
    const { chassi } = req.params

    const vehicleService = new DeleteVehicleService()

    await vehicleService.execute({ chassi })

    return res.send('Veículo deletado')
  }
}

export default VehiclesController
