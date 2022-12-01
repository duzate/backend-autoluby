import { Router } from "express";
import { employeeRoutes } from "./employee.routes";
import { vehicleRoutes } from "./vehicle.routes";

const routes = Router()

routes.use('/', employeeRoutes)
routes.use('/', vehicleRoutes)

export default routes
