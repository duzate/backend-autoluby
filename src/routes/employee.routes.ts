import { Router } from "express";

import EmployeeController from "../controllers/EmployeesController";

import validation from "../middleware/isValidate";
import { loginValidation, updateValidation, createValidation } from "../validations/EmployeeValidation";

export const employeeRoutes = Router()

const employeeController = new EmployeeController()

employeeRoutes.post('/register', validation(createValidation), employeeController.store)
employeeRoutes.post('/login', validation(loginValidation), employeeController.session)
employeeRoutes.get('/employees', employeeController.list)
employeeRoutes.put('/employees/:id', validation(updateValidation), employeeController.update)
employeeRoutes.delete('/employees/:id', employeeController.delete)

