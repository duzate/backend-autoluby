import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { employeeRepository } from "../../repositories/EmployeeRepository"

class SessionEmployeeService {
  async execute({ email, password }) {
    const user = await employeeRepository.findOneBy({ email })

    if (!user) {
      throw new Error("Email/password incorrect");
    }

    const pass = await compare(password, user.password)
    if (!pass) {
      throw new Error("Email/password incorrect");
    }

    const token = sign({ id: user.id }, String(process.env.SECRET_JWT), {
      expiresIn: '1d'
    })

    const { id, name, cpf, avatar, bio } = user
    return ({
      data: {
        id, email, name, cpf, avatar, bio
      }, token
    });

  }
}


export default SessionEmployeeService
