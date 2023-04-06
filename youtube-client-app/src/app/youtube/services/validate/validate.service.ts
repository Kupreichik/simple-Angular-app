import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidateService {
  dateValidator(control: FormControl): ValidationErrors | null {
    const inputDate = control.value;
    if (!inputDate) return null;
    return Date.now() - Date.parse(inputDate) > 0 ? null : { incorrectDate: true } ;
  }
}
