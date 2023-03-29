import { Pipe, PipeTransform } from '@angular/core';
import { maxTitleLength } from '../constants/title-length.constant';

@Pipe({
  name: 'shortenTitle'
})
export class ShortenTitlePipe implements PipeTransform {

  transform(value: string): string {
    if (value.length < maxTitleLength) {
      return value;
    }
    return value.slice(0, maxTitleLength) + '...';
  }
}
