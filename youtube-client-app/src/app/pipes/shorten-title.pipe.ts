import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenTitle'
})
export class ShortenTitlePipe implements PipeTransform {

  transform(value: string): string {
    if (value.length < 36) {
      return value;
    }
    return value.slice(0, 35) + '...';
  }
}
