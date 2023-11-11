import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from 'src/components/main/main.component';
import { OpportunityComponent } from 'src/components/opportunity/opportunity.component';
import { SalesComponent } from 'src/components/sales/sales.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'sales',
        pathMatch: 'full'
      },
      {
        path: 'sales',
        component: SalesComponent
      },
      {
        path: 'opportunity',
        component: OpportunityComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
