import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllowCashOutComponent } from './component/allow-cash-out/allow-cash-out.component';
import { ProceedCashOutComponent } from './component/proceed-cash-out/proceed-cash-out.component';

const routes: Routes = [
  {
    path: '',
    component: ProceedCashOutComponent,
  },
  {
    path: 'allow',
    component: AllowCashOutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
