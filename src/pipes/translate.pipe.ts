import { Pipe, PipeTransform } from '@angular/core';
import { translations as en } from 'src/assets/locale/en-us';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {
  transform(value: string): string {
    return en.get(value) || value;
  }
}
