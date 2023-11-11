import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings-selector',
  templateUrl: './settings-selector.component.html',
  styleUrls: ['./settings-selector.component.scss']
})
export class SettingsSelectorComponent {
  public get selected() {return this.router.url.includes('sales') ? 1 : 2};
  constructor(private router: Router) {
   }

  changeSelection(selected: number) {
    this.router.navigate([selected === 1 ? '/sales' : '/opportunity'])
  }
}
