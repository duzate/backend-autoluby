
import { employeeRepository } from "../../repositories/EmployeeRepository"

class DeleteEmployeeService {
  async execute({ id }) {
    const employee = await employeeRepository.findOneBy({ id })

    if (!employee) {
      throw new Error('Funcionário não existe')
    }

    await employeeRepository.delete(employee.id)
  }
}

export default DeleteEmployeeService
