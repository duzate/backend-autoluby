import { compare, hash } from "bcrypt"
import { employeeRepository } from "../../repositories/EmployeeRepository"

interface IEmployee {
  id: string,
  email?: string,
  name: string
  bio?: string,
  avatar?: string,
  password?: string,
  old_password: string
}

class UpdateEmployeeService {
  async execute({ id, email, name, bio, avatar, password, old_password }: IEmployee) {
    const employee = await employeeRepository.findOneBy({ id })

    if (!employee) {
      throw new Error('Usuário não existe')
    }

    if (email) {
      const updateEmail = await employeeRepository.findOneBy({ email: email })

      if (updateEmail && updateEmail.id !== id) {
        throw new Error('E-mail já cadastrado')
      }
    }

    if (password && !old_password) {
      throw new Error('Senha atual é necessária')
    }

    if (password && old_password) {
      const comparePassword = await compare(old_password, employee.password)
      if (!comparePassword) {
        throw new Error('Senha atual incorreta')
      }
      const pass = await hash(password, 8)
      employee.password = pass
    }

    if (email) {
      employee.email = email
    }


    if (name) {
      employee.name = name
    }

    if (bio) {
      employee.bio = bio
    }

    if (avatar) {
      employee.avatar = avatar
    }

    await employeeRepository.save(employee)

    return employee
  }
}

export default UpdateEmployeeService
