import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: any, args?: string): any {
    if (value) {
      if (args && args === 'ttc') {
        return value.totalTtc();
      }
      if (args && args === 'cattc') {
        return value.ca * (1 + 20 / 100);
      }
      return value.totalHt();
    }
    return null;
  }

}
