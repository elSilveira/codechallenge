import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from 'src/pipes/translate.pipe';
import { CardComponent } from './card/card.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { MainComponent } from './main/main.component';
import { OpportunityComponent } from './opportunity/opportunity.component';
import { SalesComponent } from './sales/sales.component';
import { SettingsSelectorComponent } from './settings-selector/settings-selector.component';

@NgModule({
  declarations: [
    CardComponent,
    CheckboxComponent,
    MainComponent,
    SalesComponent,
    OpportunityComponent,
    SettingsSelectorComponent,
    TranslatePipe
  ],
  exports: [
    CardComponent,
    CheckboxComponent,
    SettingsSelectorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CommonModule,
  ]
})
export class ComponentsModule { }
