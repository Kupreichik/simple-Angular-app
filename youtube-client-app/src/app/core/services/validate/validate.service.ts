import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidateService {
  dateValidator(control: FormControl): ValidationErrors | null {
    const inputDate = control.value;
    if (!inputDate) return null;
    return Date.now() - Date.parse(inputDate) > 0 ? null : { incorrectDate: true };
  }

  mixedCaseValidator(control: FormControl): ValidationErrors | null {
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const uppercaseValid = uppercaseRegex.test(control.value);
    const lowercaseValid = lowercaseRegex.test(control.value);

    if (!uppercaseValid || !lowercaseValid) {
      return { mixedCase: true };
    }
    return null;
  }

  alphanumericValidator(control: FormControl): ValidationErrors | null {
    const alphanumericRegex = /^(?=.*[a-zA-Z])(?=.*\d).+$/;
    const valid = alphanumericRegex.test(control.value);

    if (!valid) {
      return { alphanumeric: true };
    }
    return null;
  }

  specialCharacterValidator(control: FormControl): ValidationErrors | null {
    const specialCharRegex = /[@$!%*?&]/;
    const valid = specialCharRegex.test(control.value);

    if (!valid) {
      return { specialCharacter: true };
    }
    return null;
  }
}
