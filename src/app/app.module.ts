import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';

// Customers Components
import { CustomersComponent } from './customers/customers.component';
import { CustomerComponent } from './customers/customers/customer.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';

// Insurance Components
import { InsurancesComponent } from './insurances/insurances.component';
import { InsuranceComponent } from './insurances/insurance/insurance.component';
import { InsurancesListComponent } from './insurances/insurances-list/insurances-list.component';

// Services
import { InsuranceService } from './shared/insurance.service';
import { CoveringPipe } from './shared/covering.pipe';
import { RiskLevelPipe } from './shared/risk-level.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    InsurancesComponent,
    CustomersListComponent,
    InsurancesListComponent,
    InsuranceComponent,
    CustomerComponent,
    CoveringPipe,
    RiskLevelPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    InsuranceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
