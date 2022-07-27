import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllowCashOutComponent } from './component/allow-cash-out/allow-cash-out.component';

const routes: Routes = [
  {
    path: '',
    component: AllowCashOutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
