import { Router } from "express";
import validation from "../middleware/isValidate";
import VehiclesController from "../controllers/VehiclesController";
import { createVehicleValidation } from "../validations/VehicleValidation";

export const vehicleRoutes = Router()

const vehicleController = new VehiclesController()

vehicleRoutes.post('/vehicles', validation(createVehicleValidation), vehicleController.store)
vehicleRoutes.get('/vehicles', vehicleController.list)
vehicleRoutes.delete('/vehicles/:chassi', vehicleController.delete)

