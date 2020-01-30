import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {FormlyFieldConfig} from "@ngx-formly/core";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  form = new FormGroup({});
  model = {email: 'email@gmail.com'};
  fields: FormlyFieldConfig[] = [{
    key: 'email',
    type: 'input',
    templateOptions: {
      label: 'Email address',
      placeholder: 'Enter email',
      required: true,
    }
  }];

  submit(model) {
    console.log(model);
  }

  ngOnInit() {
  }

}
