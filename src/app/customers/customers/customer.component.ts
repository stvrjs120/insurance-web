import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../shared/customers.service';
import { InsurancesService } from '../../shared/insurances.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styles: []
})
export class CustomerComponent implements OnInit {

  constructor(private customersService: CustomersService, private insurancesService: InsurancesService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
    this.insurancesService.getListInsurances();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.form.reset();
    }

    this.customersService.formData = {
      id: 0,
      name: '',
      insuranceId: 0,
      customerInsurances: null
    };

    return false;
  }

  onSubmit(form: NgForm) {
    if (this.customersService.formData.id === 0) {
      this.insertRecord(form);
   } else {
     this.updateRecord(form);
   }
  }

  insertRecord(form: NgForm) {
    this.customersService.postCustomer(form.value).subscribe(
      resp => {
        this.resetForm(form);
        this.toastr.success('Submitted successfully', 'Insurance Management');
        this.customersService.getListCustomers();
      },
      err => {
        console.log(err);
      }
    );
  }

  updateRecord(form: NgForm) {
    this.customersService.putCustomer(form.value).subscribe(
      resp => {
        this.resetForm(form);
        this.toastr.info('Updated successfully', 'Insurance Management');
        this.customersService.getListCustomers();
      },
      err => {
        console.log(err);
      }
    );
  }

}
