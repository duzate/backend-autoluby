
import { employeeRepository } from "../../repositories/EmployeeRepository"

class ListEmployeeService {
  async execute() {
    const employee = await employeeRepository.find()

    return employee
  }
}

export default ListEmployeeService
