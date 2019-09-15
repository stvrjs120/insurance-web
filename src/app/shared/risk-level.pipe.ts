import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'riskLevel'
})
export class RiskLevelPipe implements PipeTransform {

  transform(value: any): any {
    let resp = '';
    switch (value) {
      case 1: {
        resp = 'Bajo';
        break;
      }
      case 2: {
        resp = 'Medio';
        break;
      }
      case 3: {
        resp = 'MedioAlto';
        break;
      }
      case 4: {
        resp = 'Alto';
        break;
      }

    }

    return resp;
  }

}
