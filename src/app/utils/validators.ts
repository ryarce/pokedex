import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export class MyValidators{
    
    static isPriceValid(control: AbstractControl){
        const value = control.value;
        if(value > 1000000){
            return {price_invalid: true};
        }
        return null;
    }

    static patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
          if (!control.value) {
            // if control is empty return no error
            return [];
          }
          // test the value of the control against the regexp supplied
          const valid = regex.test(control.value);
      
          // if true, return no error (no error), else return error passed in the second parameter
          return valid ? [] : error;
        };
      }

      static validarContrasena(control: AbstractControl) {
        const regexNumber: RegExp = /\d/;
        const regexCapitalCase: RegExp = /[A-Z]/;
        const regexSmallCase: RegExp = /[a-z]/;
        const regexSpecialCharacters: RegExp = /[!&*_+-=.]/;
        const regularExpression: RegExp = /(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}/;
        var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

        console.log("inicio revision", control.value);
        console.log(regexNumber.test(control.value));
        console.log(regexCapitalCase.test(control.value));
        console.log(regexSmallCase.test(control.value));
        console.log(regexSpecialCharacters.test(control.value));
        console.log(regularExpression.test(control.value));
        console.log(strongRegex.test(control.value));
        /*if(regexNumber.test(control.value) &&
          regexCapitalCase.test(control.value) &&
          regexSmallCase.test(control.value) &&
          regexSpecialCharacters.test(control.value)*/
        if (strongRegex.test(control.value)
        ){
          return null;
        }
        return {contrasenaInvalid: true};
      }

      static passwordMatchValidator(control: AbstractControl) {
        const password: string = control.get('password')?.value;
        const confirmPassword: string = control.get('confirmPassword')?.value;
        if (password !== confirmPassword) {
          control.get('confirmPassword')?.setErrors({ NoPassswordMatch: true });
          return { NoPassswordMatch: true };
        }
        return null;
      }

      static ConfirmedValidator(controlName: string, matchingControlName: string){
        return (formGroup: FormGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];
            if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
                return;
            }
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ confirmedValidator: true });
            } else {
                matchingControl.setErrors(null);
            }
        }
    }

}