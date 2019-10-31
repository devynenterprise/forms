import { AbstractForm } from './abstract_form';
import { FormControl } from './form_control';
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

    contains(controlName: any) {
        return this.formControls.hasOwnProperty(controlName);
    }

    patchValue(value: { [key: string]: any }) {
        Object.keys(value).forEach(name => {
            if (this.formControls[name]) {
                this.formControls[name].patchValue(value[name])
            }
        })
    }
}