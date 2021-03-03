import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidatorsErrorsComponent } from './validators-errors.component';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [ValidatorsErrorsComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [ValidatorsErrorsComponent]
})
export class ValidatorsErrorsModule { }
