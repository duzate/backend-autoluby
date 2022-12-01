
import { employeeRepository } from "../../repositories/EmployeeRepository"

class ListEmployeeService {
  async execute() {
    const employee = await employeeRepository.find({
      select: {
        id: true,
        cpf: true,
        email: true,
        name: true,
        avatar: true,
        bio: true,
        created_at: true,
        updated_at: true
      }
    })

    return employee
  }
}

export default ListEmployeeService
