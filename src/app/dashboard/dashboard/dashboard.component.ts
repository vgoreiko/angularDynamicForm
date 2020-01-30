import {Component} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {FormlyFieldConfig, FormlyFormOptions} from "@ngx-formly/core";
import {DashboardFacadeService} from "../dashboard-facade.service";
import {FormlyJsonschema} from "@ngx-formly/core/json-schema";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  form: FormGroup;
  model: any;
  options: FormlyFormOptions;
  fields: FormlyFieldConfig[];

  constructor(private dashboardFacadeService: DashboardFacadeService,
              private formlyJsonschema: FormlyJsonschema,) {
    this.dashboardFacadeService.getFormJsonSchema().pipe(
      tap(result => console.log(result)),
      tap(({ schema, model }) => {
        this.form = new FormGroup({});
        this.options = {};
        this.fields = [this.formlyJsonschema.toFieldConfig(schema)];
        this.model = model;
      }),
    ).subscribe();
  }

  submit(model) {
    console.log(model);
  }
}
