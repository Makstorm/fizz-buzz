import { NextFunction } from "express";
import { Request, Response } from "express";

export const checkQueryParams = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const requiredParams: string[] = ["n"];

  for (const param of requiredParams) {
    const value = req.query[param];

    if (value === undefined) {
      return next(new Error(`Missing query parameter: ${param}`));
    }

    if (isNaN(Number(value))) {
      return next(new Error(`Query parameter ${param} is not a number`));
    }
  }

  next();
};
