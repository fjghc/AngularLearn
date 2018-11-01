import { Pipe, PipeTransform } from '@angular/core';

/* 定义一个管道，传入两个数据，求他的 exponet 次方 */
@Pipe({
  name: 'exponentialStrength'
})
export class ExponentialStrengthPipe implements PipeTransform {

  transform(value: number, exponent: string): number {
    const exp = parseFloat(exponent);
    return Math.pow(value, isNaN(exp) ? 1 : exp);
  }

}
