import { Request, Response } from "express";
import { CreateProductType, UpdateProductBodyType, UpdateProductParamsType, UpdateProductQueryType } from "../schemas/product.schema";

export const createProduct = (
  req: Request<unknown, unknown, CreateProductType>,
  res: Response
) => {
  console.log(req.body.name);
  res.send("Product Created!");
};

export const updateProduct = (req: Request<UpdateProductParamsType, UpdateProductBodyType, UpdateProductQueryType>, res: Response) => {
  console.log(req.body);
  res.send("Product Updated!");
};
