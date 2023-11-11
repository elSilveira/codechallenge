import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  public get selected() {return this.router.url.includes('sales') ? 1 : 2};
  constructor(private router: Router) { }

  changeSelection() {
    this.router.navigate([this.selected === 2 ? '/sales' : '/opportunity'])
  }

}
