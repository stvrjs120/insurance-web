import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';

// Customers Components
import { CustomersComponent } from './customers/customers.component';
import { CustomerComponent } from './customers/customers/customer.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { CustomersInsurancesComponent } from './customers/customers-insurances/customers-insurances.component';

// Insurance Components
import { InsurancesComponent } from './insurances/insurances.component';
import { InsuranceComponent } from './insurances/insurance/insurance.component';
import { InsurancesListComponent } from './insurances/insurances-list/insurances-list.component';

// Services
import { InsurancesService } from './shared/insurances.service';
import { CustomersService } from './shared/customers.service';

// Pipes
import { CoveringPipe } from './shared/covering.pipe';
import { RiskLevelPipe } from './shared/risk-level.pipe';

// Router
import { ROUTES } from './app.routes';

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
    RiskLevelPipe,
    CustomersInsurancesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(ROUTES, {useHash: true}),
  ],
  providers: [
    InsurancesService,
    CustomersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
