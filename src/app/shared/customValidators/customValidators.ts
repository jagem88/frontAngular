import { AbstractControl, ValidatorFn, ValidationErrors,  } from "@angular/forms";

/**
* CustomValidators.ts
*
* @description: Component custom validators ReactiveForms
* @author Luis Carlos Alfonso Roa.
* @version 1.0
* @date 5-12-2022.
*
**/

export class CustomValidators {

  static MaxLength(maxLength: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const length: number = control.value ? control.value.length : 0;
      if(length > maxLength) {
        control.setValue(control.value.slice(0,maxLength));
      }
      return null;
      // return length > maxLength ?
      //     {'maxlength': {'requiredLength': maxLength, 'actualLength': length}} :
      //     null;
    };
  }

  static ToUpperCase (control: AbstractControl) {
    if(control.value && (/[a-zñáéíóú]/.test(control.value))) {
      control.setValue(control.value.toUpperCase());
    }
    return null;
  }
  static Numeric (control: AbstractControl) {
    if(control.value === null || control.value === undefined || control.value === ''){
    }
    if((/[^0-9]/.test(control.value))) {
      control.setValue(control.value.toString().replace(/[^0-9]*/g, ''));
    }
    return null;
  }
  static compareRagesValues(rageMax:number, rageMin:number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

      let value = control.value;
      
        if (value != undefined && value != null) {

          if ( Number(control.value) > rageMax) {
            return { greaterrequired: "greaterrequired" };
      
          } else if(Number(value) < rageMin){
      
            return { smallerrequired: "smallerrequired" };
      
          } else {
            return null;
          }
        } else {
          return { required: "required" };
        }
      
    };
  }

  static AlphaNumericWithWhiteSpace (control: AbstractControl) {
    if((/[^a-zA-ZñÑáéíóúÁÉÍÓÚ0-9 ]/.test(control.value))) {
      control.setValue(control.value.replace(/[^a-zA-ZñÑáéíóúÁÉÍÓÚ0-9 ]*/g, ''));
    
    }
  }

  static AlphaNumericWithOutWhiteSpace (control: AbstractControl) {
    if((/[^a-zA-ZñÑáéíóúÁÉÍÓÚ0-9]/.test(control.value))) {
      control.setValue(control.value.replace(/[^a-zA-ZñÑáéíóúÁÉÍÓÚ0-9]*/g, ''));
      
    }
  }

  static AlphaWithWhiteSpace (control: AbstractControl) {
    if((/[^a-zA-ZñÑáéíóúÁÉÍÓÚ ]/.test(control.value))) {
      control.setValue(control.value.replace(/[^a-zA-ZñÑáéíóúÁÉÍÓÚ ]*/g, ''));
     
    }
    return null;
  }

  static Percentage (control: AbstractControl) {
    if(control.value === null || control.value === undefined || control.value === ''){
    }
    if((/^[0-9]{1,5}\.[0-9]{1,5}/.test(control.value))) {
    }
    return null;
  }

  static phoneNumberPatternValidator(phoneNumber: any): any {
    if (phoneNumber.pristine) {
        return null;
    }

    if (!phoneNumber.value) {
        return null;
    }

    // tslint:disable-next-line:max-line-length
    const PHONENUMBER_REGEXP =
        /(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\s?\d{3}$/;
    phoneNumber.markAsTouched();

    if (PHONENUMBER_REGEXP.test(phoneNumber.value)) {
        return null;
    }
    return {
        invalidPhoneNumber: true,
    };
}

// Validates  phone numbers
static phonemobileValidator(number: any): any {
    if (number.pristine) {
        return null;
    }
    const PHONE_REGEXP = /3[0-9]{9}/;
    number.markAsTouched();
    if (PHONE_REGEXP.test(number.value)) {
        return null;
    }
    return {
        invalidNumber: true,
    };
}
static phoneValidator(number: any): any {
  if (number.pristine) {
      return null;
  }
  const PHONE_REGEXP = /6[0-9]{9}/;
  number.markAsTouched();
  if (PHONE_REGEXP.test(number.value)) {
      return null;
  }
  return {
      invalidNumber: true,
  };
}
static phoneandmobileValidator(number: any): any {
  if (number.pristine) {
      return null;
  }
  const PHONE_REGEXP = /[/63][0-9]{9}/;
  number.markAsTouched();
  if (PHONE_REGEXP.test(number.value)) {
      return null;
  }
  return {
      invalidNumber: true,
  };
}

static emailPatternValidatorSeparatedBySemicolon(email: any): any {
  if (email.pristine) {
      return null;
  }

  if (!email.value) {
      return null;
  }

  // tslint:disable-next-line:max-line-length
  const EMAIL_REGEXP = /^([\w+-.%]+@[\w.-]+\.[A-Za-z]{2,4})(;[\w+-.%]+@[\w.-]+\.[A-Za-z]{2,4})*$/;
  email.markAsTouched();

  if (EMAIL_REGEXP.test(email.value)) {
      return null;
  }
  return {
      invalidEmail: true,
  };
}


  

  
}
