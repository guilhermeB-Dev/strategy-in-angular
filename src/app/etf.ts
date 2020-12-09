import { AbstractInvesting } from './abstract-investing';

export class Etf implements AbstractInvesting {
  calculate(value: any) {
    let result = 0.2 * (value * 0.1825);
    return result + value;
  }
}
