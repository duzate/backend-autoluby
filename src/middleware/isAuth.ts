import { NextFunction, Request, Response } from "express"
import { verify } from "jsonwebtoken"

interface TokenPayload {
  id: string;
  iat: number;
  exp: number;
}

export const isAuth = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    throw new Error('Usuário não autenticado')
  }

  const [, token] = authHeader.split(' ')

  try {
    const decode = verify(token, String(process.env.SECRET_JWT))

    const { id } = decode as TokenPayload
    req.userId = {
      id
    }

    return next()
  }
  catch (err) {
    throw new Error('Sessão finalizada')
  }
}
