export interface IFizzBuzzService {
  getFizzBuzz(n: number): Promise<string[]>;
}
