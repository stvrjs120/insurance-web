import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../shared/customers.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styles: []
})
export class CustomerComponent implements OnInit {

  constructor(private service: CustomersService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.form.reset();
    }

    this.service.formData = {
      id: 0,
      name: '',
      customerInsurances: null
    };

    return false;
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.id === 0) {
      this.insertRecord(form);
   } else {
     this.updateRecord(form);
   }
  }

  insertRecord(form: NgForm) {
    this.service.postCustomer(form.value).subscribe(
      resp => {
        this.resetForm(form);
        this.toastr.success('Submitted successfully', 'Insurance Management');
        this.service.getListCustomers();
      },
      err => {
        console.log(err);
      }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putCustomer(form.value).subscribe(
      resp => {
        this.resetForm(form);
        this.toastr.info('Updated successfully', 'Insurance Management');
        this.service.getListCustomers();
      },
      err => {
        console.log(err);
      }
    );
  }

}
