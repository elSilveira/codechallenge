import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss',
    '../../assets/style/components/shared.scss']
})
export class CheckboxComponent {
  @Input()
  selectedType: string = '';
  @Input()
  type: string = '';

}
