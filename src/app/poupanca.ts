import { AbstractInvesting } from "./abstract-investing";

export class Poupanca implements AbstractInvesting {
  calculate(value: number) {
    return value + (value * 0.045);
  }
}
