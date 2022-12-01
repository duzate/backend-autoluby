import { Router } from "express";
import validation from "../middleware/isValidate";
import VehiclesController from "../controllers/VehiclesController";
import { createVehicleValidation } from "../validations/VehicleValidation";

export const vehicleRoutes = Router()

const vehicleController = new VehiclesController()

vehicleRoutes.post('/register', validation(createVehicleValidation), vehicleController.store)
vehicleRoutes.get('/register', vehicleController.store)
vehicleRoutes.delete('/register', vehicleController.store)

