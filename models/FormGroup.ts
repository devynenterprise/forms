import { AbstractForm } from './AbstractForm';
import { FormControl } from './FormControl';
import { ValidatorFn } from '../interfaces/validator-fn';

/**
 * model.ts
 * @author Jayde Silva <jayde.silva@empire.ca>
 * @date 2019-10-31
 */

export default class FormGroup extends AbstractForm {


    constructor(private formControls: { [key: string]: FormControl }, validatorFn?: ValidatorFn) {
        super();
    }

    /**
* @description
* Validation on a formGroup to check whether or not it has a certain formControl by the key of the formControl
*
* @usageNotes
*
* ### Validate against having an lastName formControl
*
* ```typescript
* const formGroup = new FormGroup({
*    firstName: new FormControl('John'),
*    lastName: new FormControl('Smith')
* });
*
* console.log(formGroup.contains('lastName')); // true
* console.log(formGroup.contains('middleName')); // false
* ```
*/
    contains(controlName: any): boolean {
        return this.formControls.hasOwnProperty(controlName);
    }

    /**
* @description
* FormGroup method to get a specific formControl by the path to it.
*
* @usageNotes
*
* ### Get a firstName control
*
* ```typescript
*const formGroup = new FormGroup({
    *    firstName: new FormControl('John'),
    *    lastName: new FormControl('Smith')
    * });
    *
    * console.log(formGroup.get('firstName')); // FormControl('John')
    * console.log(formGroup.get('middleName')); // null
    * ```
* ```
*/

    get(path: string): FormControl {
        return this.formControls[path];
    }

        /**
* @description
* FormGroup method to change a specfic value in a specfic formControl
*
* @usageNotes
*
* ### Change the firstName from John to Joe
*
* ```typescript
*const formGroup = new FormGroup({
    *    firstName: new FormControl('John'),
    *    lastName: new FormControl('Smith')
    * });
    *
    * console.log(formGroup.get('firstName').patchValue('Joe')); // FormControl('John')
    * console.log(formGroup.patchValue({'firstName': 'Joe'})
    * ```
* ```
*/

    patchValue(value: { [key: string]: any }) {
        Object.keys(value).forEach(name => {
            if (this.formControls[name]) {
                this.formControls[name].patchValue(value[name])
            }
        })
    }

        /**
* @description
* FormGroup method to get a specific formControl by the path to it.
*
* @usageNotes
*
* ### Get a firstName control
*
* ```typescript
*const formGroup = new FormGroup({
    *    firstName: new FormControl('John'),
    *    lastName: new FormControl('Smith')
    * });
    *
    * console.log(group.get('firstName')); // FormControl('John')
    * console.log(group.get('middleName')); // null
    * ```
* ```
*/

    get value() {
        return this.formControls;
    }
}