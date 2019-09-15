import { Component, OnInit } from '@angular/core';
import { InsurancesService } from '../../shared/insurances.service';
import { Insurance } from '../../shared/insurance.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-insurances-list',
  templateUrl: './insurances-list.component.html',
  styles: []
})
export class InsurancesListComponent implements OnInit {

  constructor(private service: InsurancesService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.getListInsurances();
  }

  populateForm(insurance: Insurance) {
    this.service.formData = Object.assign({}, insurance);
  }

  deleteInsurance(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteInsurance(id)
        .subscribe(resp => {
          this.service.getListInsurances();
          this.toastr.warning('Deleted success', 'Insurance Management');
        }, err => {
          console.log(err);
        });
    }

  }

}
