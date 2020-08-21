import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appZipPattern]',
  providers: [{provide: NG_VALIDATORS, useExisting: ZipPatternValidatorDirective, multi: true}]
})
export class ZipPatternValidatorDirective implements Validator {
  @Input('appZipPattern')
  zipPattern: string;

  validate(control: AbstractControl): {[key: string]: any} | null {
    return this.zipPattern ? zipPatternValidator(new RegExp(this.zipPattern, 'i'))(control)
                              : null;
  }
}
export function zipPatternValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const correct = nameRe.test(control.value);
    return correct ? null : {zipPattern: {value: control.value}};
  };
}