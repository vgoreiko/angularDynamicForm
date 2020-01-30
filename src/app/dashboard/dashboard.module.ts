import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ReactiveFormsModule} from "@angular/forms";
import {FormlyModule} from "@ngx-formly/core";
import {FormlyMaterialModule} from "@ngx-formly/material";
import {
  constValidationMessage,
  exclusiveMaximumValidationMessage,
  exclusiveMinimumValidationMessage, maxItemsValidationMessage,
  maxlengthValidationMessage,
  maxValidationMessage, minItemsValidationMessage,
  minlengthValidationMessage,
  minValidationMessage, multipleOfValidationMessage
} from "./messages";
import {ArrayTypeComponent} from "./array.type";
import {ObjectTypeComponent} from "./object.type";
import {NullTypeComponent} from "./null.type";
import {MultiSchemaTypeComponent} from "./multischema.type";

@NgModule({
  declarations: [
    DashboardComponent, ArrayTypeComponent,
    ObjectTypeComponent,
    MultiSchemaTypeComponent,
    NullTypeComponent,],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      validationMessages: [
        {name: 'required', message: 'This field is required'},
        {name: 'null', message: 'should be null'},
        {name: 'minlength', message: minlengthValidationMessage},
        {name: 'maxlength', message: maxlengthValidationMessage},
        {name: 'min', message: minValidationMessage},
        {name: 'max', message: maxValidationMessage},
        {name: 'multipleOf', message: multipleOfValidationMessage},
        {name: 'exclusiveMinimum', message: exclusiveMinimumValidationMessage},
        {name: 'exclusiveMaximum', message: exclusiveMaximumValidationMessage},
        {name: 'minItems', message: minItemsValidationMessage},
        {name: 'maxItems', message: maxItemsValidationMessage},
        {name: 'uniqueItems', message: 'should NOT have duplicate items'},
        {name: 'const', message: constValidationMessage},
      ],
      types: [
        {name: 'string', extends: 'input'},
        {
          name: 'number',
          extends: 'input',
          defaultOptions: {
            templateOptions: {
              type: 'number',
            },
          },
        },
        {
          name: 'integer',
          extends: 'input',
          defaultOptions: {
            templateOptions: {
              type: 'number',
            },
          },
        },
        {name: 'boolean', extends: 'checkbox'},
        {name: 'enum', extends: 'select'},
        {name: 'null', component: NullTypeComponent, wrappers: ['form-field']},
        {name: 'array', component: ArrayTypeComponent},
        {name: 'object', component: ObjectTypeComponent},
        {name: 'multischema', component: MultiSchemaTypeComponent},
      ],
    }),
    FormlyMaterialModule,
  ]
})
export class DashboardModule {
}
