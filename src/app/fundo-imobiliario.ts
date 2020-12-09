import { AbstractInvesting } from "./abstract-investing";

export class FundoImobiliario implements AbstractInvesting {
  calculate(value: number) {
    let result = 0.2 * (value * 0.01748);
    return result + value;
  }
}
