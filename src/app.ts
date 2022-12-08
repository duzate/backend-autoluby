import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors'
import 'express-async-errors';
import './database';
import routes from './routes';

const app = express()

app.use(express.json())

app.use(cors())

app.use(routes)

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  if (error instanceof Error) {
    return response.status(400).json({ error: error.message })
  }

  return response.status(500).json({
    status: "error",
    message: "Internal Server Error"
  })
})

export default app
