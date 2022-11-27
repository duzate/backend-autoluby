import { Router } from "express";
import { employeeRoutes } from "./employee.routes";

const routes = Router()

routes.use('/', employeeRoutes)

export default routes
