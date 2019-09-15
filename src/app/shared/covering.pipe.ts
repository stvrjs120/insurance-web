import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'covering'
})
export class CoveringPipe implements PipeTransform {

  transform(value: any): any {
    let resp = '';
    switch (value) {
      case 1: {
        resp = 'Terremoto';
        break;
      }
      case 2: {
        resp = 'Incendio';
        break;
      }
      case 3: {
        resp = 'Robo';
        break;
      }
      case 4: {
        resp = 'Perdida';
        break;
      }

    }

    return resp;
  }

}
