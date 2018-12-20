import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

/** Provide a time pipe to display date in a form now format */
@Pipe({ name: 'fromNow' })
export class FromNowPipe implements PipeTransform {

  /** Transform a date value into a formatted from now string */
  transform(value: Date): string {
    return moment(value).fromNow();
  }
}
