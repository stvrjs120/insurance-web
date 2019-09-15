import { Component, OnInit } from '@angular/core';
import { InsuranceService } from '../../shared/insurance.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styles: []
})
export class InsuranceComponent implements OnInit {

  constructor(private service: InsuranceService, private toastr: ToastrService) {
  }

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
      description: '',
      covering: 0,
      validFrom: null,
      coverageTime: 0,
      price: 0,
      riskLevel: 0
    };
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.id === 0) {
       this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }
  }

  insertRecord(form: NgForm) {
    this.service.postInsurance(form.value).subscribe(
      resp => {
        this.resetForm(form);
        this.toastr.success('Submitted successfully', 'Insurance Management');
        this.service.getListInsurance();
      },
      err => {
        console.log(err);
      }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putInsurance(form.value).subscribe(
      resp => {
        this.resetForm(form);
        this.toastr.info('Updated successfully', 'Insurance Management');
        this.service.getListInsurance();
      },
      err => {
        console.log(err);
      }
    );
  }

}

