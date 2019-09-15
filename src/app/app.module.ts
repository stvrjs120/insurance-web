import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { InsurancesComponent } from './insurances/insurances.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { InsurancesListComponent } from './insurances/insurances-list/insurances-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    InsurancesComponent,
    CustomersListComponent,
    InsurancesListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
