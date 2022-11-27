import { employeeRepository } from "../../repositories/EmployeeRepository"

class CreateEmployeeService {
  async execute({ cpf, name, email, avatar, bio, password }) {
    const cpfExists = await employeeRepository.findOneBy({ cpf })

    if (cpfExists) {
      throw new Error('CPF já cadastrado')
    }

    const emailExists = await employeeRepository.findOneBy({ email })
    if (emailExists) {
      throw new Error('E-mail já cadastrado')
    }

    const employee = employeeRepository.create({
      cpf,
      name,
      email,
      avatar,
      bio,
      password
    })

    await employeeRepository.save(employee)

    const { id } = employee

    return {
      data: {
        id,
        cpf,
        name,
        email,
        avatar,
        bio
      }
    }
  }
}

export default CreateEmployeeService
