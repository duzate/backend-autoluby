import { Router } from "express";
import { employeeRoutes } from "./employee.routes";
import { orderRoutes } from "./order.routes";
import { vehicleRoutes } from "./vehicle.routes";

const routes = Router()

routes.use('/', employeeRoutes)
routes.use('/', vehicleRoutes)
routes.use('/', orderRoutes)

export default routes
