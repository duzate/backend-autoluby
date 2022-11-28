import { Request, Response } from "express";
import CreateEmployeeService from "../services/Employee/CreateEmployeeService";
import DeleteEmployeeService from "../services/Employee/DeleteEmployeeService";
import ListEmployeeService from "../services/Employee/ListEmployeeService";
import SessionEmployeeService from "../services/Employee/SessionEmployeeService";
import UpdateEmployeeService from "../services/Employee/UpdateEmployeeService";

class EmployeeController {
  async store(req: Request, res: Response) {
    const { cpf, name, email, avatar, bio, password } = req.body

    const employeeService = new CreateEmployeeService()

    const employee = await employeeService.execute({ cpf, name, email, avatar, bio, password })

    return res.json(employee).status(202)
  }

  async list(req: Request, res: Response) {
    const employeeService = new ListEmployeeService()

    const employee = await employeeService.execute()

    return res.json(employee)
  }

  async update(req: Request, res: Response) {
    const { email, avatar, bio, password, old_password } = req.body
    const { id } = req.userId

    const employeeService = new UpdateEmployeeService()

    const employee = await employeeService.execute({ id, email, bio, avatar, password, old_password })

    return res.json(employee).status(202)
  }

  async delete(req: Request, res: Response) {
    const { id } = req.userId

    const employeeService = new DeleteEmployeeService()

    await employeeService.execute({ id })

    return res.send('User is deleted')
  }

  async session(req: Request, res: Response) {
    const { email, password } = req.body

    const employeeRepository = new SessionEmployeeService()

    const employee = await employeeRepository.execute({ email, password })

    return res.json(employee)
  }
}

export default EmployeeController
