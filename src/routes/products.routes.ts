import { Router } from "express";
import {
  createProduct,
  updateProduct,
} from "../controllers/products.controller";
import { schemaValidation } from "../middlewares/validator";
import { CreateProductSchema, UpdateProductSchema } from "../schemas/product.schema";

const router = Router();

router.post("/product", schemaValidation(CreateProductSchema), createProduct);
router.put(
  "/product/:id",
  schemaValidation(UpdateProductSchema),
  updateProduct
);

export default router;
