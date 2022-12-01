import { Request, Response } from "express";
import CreateVehicleService from "../services/Vehicle/CreateVehicleService";
import DeleteVehicleService from "../services/Vehicle/DeleteVehicleService";
import ListVehicleService from "../services/Vehicle/ListVehicleService";

class VehiclesController {
  async store(req: Request, res: Response) {
    const { marca, modelo, ano, km, cor, chassi, price } = req.body

    const employeeService = new CreateVehicleService()

    const employee = await employeeService.execute({ marca, modelo, ano, km, cor, chassi, price })

    return res.json(employee).status(202)
  }

  async list(req: Request, res: Response) {
    const employeeService = new ListVehicleService()

    const employee = await employeeService.execute()

    return res.json(employee)
  }

  async delete(req: Request, res: Response) {
    const { chassi } = req.body

    const employeeService = new DeleteVehicleService()

    await employeeService.execute({ chassi })

    return res.send('User is deleted')
  }
}

export default VehiclesController
