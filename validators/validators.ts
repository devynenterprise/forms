import { FormConstants } from "../constants/form_constants";
import { ValidationErrors } from "../interfaces/validation-errors";
import { FormControl } from "../models/form_control";

export default class Validators {
    /**
   * @description
   * Validator that requires the control's value to be greater than or equal to the provided number.
   * The validator exists only as a function.
   *
   * @usageNotes
   *
   * ### Validate against a minimum of 3
   *
   * ```typescript
   * const control = new FormControl(2, Validators.min(3));
   *
   * console.log(control.errors); // {min: {min: 3, actual: 2}}
   * ```
   */
    static min(val: number) {
        return (control: FormControl): ValidationErrors | null => {
            if (!control.value) {
                return null
            }
            return !isNaN(val) && control.value < val ? { 'min': { 'min': val, 'actual': control.value } } : null;
        }
    }

    /**
   * @description
   * A Validator that requires the control's value to be less than or equal to the provided number.
   * The validator exists only as a function.
   *
   * @usageNotes
   *
   * ### Validate against a maximum of 2
   *
   * ```typescript
   * const control = new FormControl(3, Validators.max(2));
   *
   * console.log(control.errors); // {max: {max: 2, actual: 3}}
   * ```
   */
    static max(val: number) {
        return (control: FormControl): ValidationErrors | null => {
            if (!control.value) {
                return null
            }
            return !isNaN(val) && control.value > val ? { 'max': { 'max': val, 'actual': control.value } } : null;
        }
    }

    /**
   * @description
   * Validator that requires the length of the control's value to be greater than or equal to the provided number.
   * The validator exists only as a function.
   *
   * @usageNotes
   *
   * ### Validate against a minimum length of 5
   *
   * ```typescript
   * const control = new FormControl('test', Validators.minLength(5));
   *
   * console.log(control.errors); // {minLength: {minLength: 5, actual: 4}}
   * ```
   */
    static minLength(val: number) {
        return (control: FormControl): ValidationErrors | null => {
            if (typeof control.value !== 'string') {
                return null
            }
            return !isNaN(val) && control.value.length < val ? { 'minLength': { 'minLength': val, 'actual': control.value.length } } : null;
        }
    }

    /**
   * @description
   * Validator that requires the length of the control's value to be less than or equal to the provided number.
   * The validator exists only as a function.
   *
   * @usageNotes
   *
   * ### Validate against a maxLength of 3
   *
   * ```typescript
   * const control = new FormControl('test', Validators.maxLength(3));
   *
   * console.log(control.errors); // {maxLength: {maxLength: 3, actual: 4}}
   * ```
   */
    static maxLength(val: number) {
        return (control: FormControl): ValidationErrors | null => {
            if (typeof control.value !== 'string') {
                return null
            }
            return !isNaN(val) && control.value.length < val ? { 'maxLength': { 'maxLength': val, 'actual': control.value.length } } : null;
        }
    }

    /**
   * @description
   * Validator that requires the control's value to exist
   *
   * @usageNotes
   *
   * ### Validate against a minimum of 3
   *
   * ```typescript
   * const control = new FormControl(null, Validators.required);
   *
   * console.log(control.errors); // {'required': true}
   * ```
   */
    static required(control: FormControl): ValidationErrors | null {
        return (control.value === null || control.value.length === 0) ? { 'required': true } : null
    }

    /**
   * @description
   * Validator that requires the control's value to be of email criteria
   * 
   * Example of valid email id
        mysite@ourearth.com
        my.ownsite@ourearth.org
        mysite@you.me.net

    Example of invalid email id
        mysite.ourearth.com [@ is not present]
        mysite@.com.my [ tld (Top Level domain) can not start with dot "." ]
        @you.me.net [ No character before @ ]
        mysite123@gmail.b [ ".b" is not a valid tld ]
        mysite@.org.org [ tld can not start with dot "." ]
        .mysite@mysite.org [ an email should not be start with "." ]
        mysite()*@gmail.com [ here the regular expression only allows character, digit, underscore, and dash ]
        mysite..1234@yahoo.com [double dots are not allowed]
   *
   * @usageNotes
   * ### Validate against an email that starts with a dot
   *
   * ```typescript
   * const control = new FormControl('abc@.interface.org', Validators.email);
   *
   * console.log(control.errors); // {email: true}
   * ```
   */
    static email(control: FormControl): ValidationErrors | null {
        if (control.value === null || control.value.length === 0) {
            return null;
        }
        return FormConstants.EMAIL_REGEXP.test(control.value) ? null : { 'email': true };
    }
}