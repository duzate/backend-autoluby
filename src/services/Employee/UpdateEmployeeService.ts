import { employeeRepository } from "../../repositories/EmployeeRepository"

interface IEmployee {
  id: string,
  email?: string,
  bio?: string,
  avatar?: string,
  password?: string
}

class UpdateEmployeeService {
  async execute({ id, email, bio, avatar, password }: IEmployee) {

    const employee = await employeeRepository.findOneBy({ id })

    if (!employee) {
      throw new Error('Usuário não existe')
    }

    if (email) {
      employee.email = email
    }
    if (bio) {
      employee.bio = bio
    }
    if (avatar) {
      employee.avatar = avatar
    }
    if (password) {
      employee.password = password
    }

    await employeeRepository.save(employee)
    return employee
  }
}

export default UpdateEmployeeService
