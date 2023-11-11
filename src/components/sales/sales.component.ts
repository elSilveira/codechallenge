import { Component } from '@angular/core';
import { salesTabs, salesTypes } from 'src/tools/helper';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: [
    './sales.component.scss',
    '../../assets/style/components/shared.scss'
  ]
})
export class SalesComponent {
  get salesTypes() { return Object.values(salesTypes) };
  get salesTabs() { return salesTabs };
  selectedType: string = this.salesTypes[0];
}
