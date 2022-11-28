import { Router } from "express";

import EmployeeController from "../controllers/EmployeesController";
import { isAuth } from "../middleware/isAuth";

import validation from "../middleware/isValidate";
import { loginValidation, updateValidation, createValidation } from "../validations/EmployeeValidation";

export const employeeRoutes = Router()

const employeeController = new EmployeeController()

employeeRoutes.post('/register', validation(createValidation), employeeController.store)
employeeRoutes.post('/login', validation(loginValidation), employeeController.session)
employeeRoutes.get('/employees', employeeController.list)
employeeRoutes.put('/employees', validation(updateValidation), isAuth, employeeController.update)
employeeRoutes.delete('/employees', isAuth, employeeController.delete)

