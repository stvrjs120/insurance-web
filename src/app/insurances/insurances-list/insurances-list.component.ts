import { Component, OnInit } from '@angular/core';
import { InsuranceService } from '../../shared/insurance.service';
import { Insurance } from '../../shared/insurance.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-insurances-list',
  templateUrl: './insurances-list.component.html',
  styles: []
})
export class InsurancesListComponent implements OnInit {

  constructor(private service: InsuranceService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.getListInsurance();
  }

  populateForm(insurance: Insurance) {
    this.service.formData = Object.assign({}, insurance);
  }

  deleteInsurance(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteInsurance(id)
        .subscribe(resp => {
          this.service.getListInsurance();
          this.toastr.warning('Deleted success', 'Insurance Management');
        }, err => {
          console.log(err);
        });
    }

  }

}
