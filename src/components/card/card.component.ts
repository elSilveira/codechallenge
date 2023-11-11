import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss',
    '../../assets/style/components/shared.scss']
})
export class CardComponent {
  @Input()
  tab: any
}
