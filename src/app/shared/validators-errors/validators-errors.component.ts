import { Component, Input } from '@angular/core';
import { AbstractControlDirective, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-validators-errors',
  templateUrl: './validators-errors.component.html',
  styleUrls: ['./validators-errors.component.scss']
})
export class ValidatorsErrorsComponent {

  private static readonly errorMessages = {
    'required': () => '*Obrigatório',
    'minlength': (params) => '*O número mínimo de caracteres é ' + params.requiredLength,
    'maxlength': (params) => '*O número máximo permitido de caracteres é ' + params.requiredLength,
    'pattern': (params) => '*O padrão requerido é: ' + params.requiredPattern,
    'obrigatorio': (params) => '*Obrigatório'
  };

  @Input() private control: AbstractControlDirective | AbstractControl;

  shouldShowErrors(): boolean {
    return this.control &&
      this.control.errors &&
      (this.control.dirty || this.control.touched);
  }

  listOfErrors(): string[] {
    return Object.keys(this.control.errors)
      .map(field => this.getMessage(field, this.control.errors[field]));
  }

  private getMessage(type: string, params: any) {
    return ValidatorsErrorsComponent.errorMessages[type](params);
  }

}
