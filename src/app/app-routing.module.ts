import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanFormComponent } from './loan-form/loan-form.component';

const routes: Routes = [
  { path: '', redirectTo:'form',pathMatch: 'full' },
  {path:'form',component:LoanFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
