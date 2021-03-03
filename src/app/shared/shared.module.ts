import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidatorsErrorsModule } from './validators-errors/validators-errors.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ValidatorsErrorsModule
  ],
  exports: [
    ValidatorsErrorsModule
  ]
})
export class SharedModule { }
