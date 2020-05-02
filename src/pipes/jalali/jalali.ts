import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'jalali-moment';

/**
 * Generated class for the JalaliPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'jalali',
})
export class JalaliPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    //let MomentDate = moment(value, 'YYYY/MM/DD HH:mm:ss');
    let MomentDate = moment(value).locale('fa').format('YYYY/M/D HH:mm:ss');
    return MomentDate;
    
  }
}