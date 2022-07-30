import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { ProceedCashOutComponent } from './component/proceed-cash-out/proceed-cash-out.component';
import { AllowCashOutComponent } from './component/allow-cash-out/allow-cash-out.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SuccessfulTransactionComponent } from './component/successful-transaction/successful-transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProceedCashOutComponent,
    AllowCashOutComponent,
    SuccessfulTransactionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],

  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
