import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodError } from "zod";

export const schemaValidation =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body : req.body,
        params : req.params,
        query : req.query,
      });
      next();
    } catch (err) {
      console.log(err)
        if (err instanceof ZodError) {
          
            return res
              .status(400)
              .json(err.issues.map((issue) => ({ path: issue.path , message: issue.message })));
          }
      return res.status(400).json({message : "Error parsing"});
    }
  };
