import { IFizzBuzzService } from "../domain";
import { Request, Response } from "express";

export class FizzBuzzController {
  public constructor(private readonly service: IFizzBuzzService) {}

  public async getFizzBuzz(req: Request, res: Response): Promise<void> {
    const { n } = req.query;

    const result = await this.service.getFizzBuzz(Number(n));

    res.send(`FizzBuzz Array for number ${n} : ${result} `);
  }
}
