import { RequestHandler } from "express"

const validation = (schema: any): RequestHandler => async (req, res, next) => {

  const body = req.body

  try {
    await schema.validate(body, { abortEarly: false })
    next()
  } catch (error) {
    return res.status(400).json({ error })
  }
}

export default validation
