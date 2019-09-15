import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../shared/customers.service';
import { ToastrService } from 'ngx-toastr';
import { Customer } from '../../shared/customer.model';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styles: []
})
export class CustomersListComponent implements OnInit {

  constructor(private service: CustomersService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.getListCustomers();
  }

  populateForm(customer: Customer) {
    this.service.formData = Object.assign({}, customer);
    // this.service.getListCustomerInsurances(customer.id);
  }

  deleteCustomer(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteCustomer(id)
        .subscribe(resp => {
          this.service.getListCustomers();
          this.toastr.warning('Deleted success', 'Customer Management');
        }, err => {
          console.log(err);
        });
    }

  }

}
