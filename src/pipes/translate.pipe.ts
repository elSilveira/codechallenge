import { Pipe, PipeTransform } from '@angular/core';
import { translations as en } from 'src/assets/locale/en-us';
import { translations as es } from 'src/assets/locale/es-eu';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {
  targetLanguage = 'en';
  transform(value: string): string {
    switch (this.targetLanguage) {
      case 'es': return es.get(value) || value;
      default: return en.get(value) || value;
    }
  }
}
