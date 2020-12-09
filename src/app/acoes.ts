import { AbstractInvesting } from "./abstract-investing";

export class Acoes implements AbstractInvesting {
  calculate(value: number) {
    let result = value * 0.325;
    if ((result + value) > 20000) {
      let ir = 0.2 * ((result + value) - 20000);
      return ir + value;
    }
    return result + value;
  }
}
