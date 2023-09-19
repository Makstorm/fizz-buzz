import { IFizzBuzzService } from "../domain/index";

export class FizzBuzzService implements IFizzBuzzService {
  public async getFizzBuzz(n: number): Promise<string[]> {
    if (!n) {
      throw new Error("Missing credentials");
    }

    const res: string[] = [];

    for (let i = 1; i <= n; i++) {
      if (i % 5 === 0 && i % 3 === 0) {
        res.push("FizzBuzz");
      } else if (i % 3 === 0) {
        res.push("Fizz");
      } else if (i % 5 === 0) {
        res.push("Buzz");
      } else {
        res.push(i.toString());
      }
    }

    return res;
  }
}
