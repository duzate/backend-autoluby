
import { employeeRepository } from "../../repositories/EmployeeRepository"

class DeleteEmployeeService {
  async execute({ id }) {
    const employee = await employeeRepository.findOneBy({ id })

    await employeeRepository.delete(employee.id)
  }
}

export default DeleteEmployeeService
