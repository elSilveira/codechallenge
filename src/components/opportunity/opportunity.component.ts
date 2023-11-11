import { Component } from '@angular/core';
import { salesTabs, salesTypes } from 'src/tools/helper';

@Component({
  selector: 'app-opportunity',
  templateUrl: './opportunity.component.html',
  styleUrls: ['./opportunity.component.scss',
    '../../assets/style/components/shared.scss']
})
export class OpportunityComponent {
  get opportunityTypes() { return Object.values(salesTypes) };
  get opportunityTabs() { return salesTabs };
  selectedType: string = this.opportunityTypes[0];
}
