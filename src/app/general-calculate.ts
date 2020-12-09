import { AbstractInvesting } from "./abstract-investing";

export class GeneralCalculate {
  generalCalculate(type: AbstractInvesting, value: number) {
    return type.calculate(value);
  }
}
