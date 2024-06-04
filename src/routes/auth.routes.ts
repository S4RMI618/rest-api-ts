import { Router } from "express";
import { login, register } from "../controllers/auth.controller";
import { schemaValidation } from "../middlewares/validator";
import { loginSchema, registerSchema } from "../schemas/auth.schema" 

const router  = Router()
router.post("/login", schemaValidation(loginSchema) , login);
router.post("/register", schemaValidation(registerSchema), register);

export default router;