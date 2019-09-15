import { Routes } from '@angular/router';

import { InsurancesComponent } from './insurances/insurances.component';
import { CustomersComponent } from './customers/customers.component';

export const ROUTES: Routes = [
    { path: 'insurances', component: InsurancesComponent },
    { path: 'customers', component: CustomersComponent },
    { path: '', pathMatch: 'full', redirectTo: 'insurances' },
    { path: '**', pathMatch: 'full', redirectTo: 'insurances' }
];