import { ValidatorFn } from "../interfaces/validator-fn";
import { AbstractForm } from "./abstract_form";

/**
 * model.ts
 * @author Jayde Silva <jayde.silva@empire.ca>
 * @date 2019-10-31
 */

export class FormControl extends AbstractForm {
    /**
     * Creates a new `FormControl` instance.
     *
     * @param initialValue Initializes the control with an initial value,
     * or an object that defines the initial value and disabled state.
     *
     */
    errors: string[] = [];
    validatorFn: Function;
    value: any;
    constructor(initialValue?: any, validatorFn?: ValidatorFn) {
        super();
        this.validatorFn = validatorFn;
        this.applyValidationOnValue(this.value)
        this.value = initialValue;
    }

    applyValidationOnValue(val: any) {
        const setter = (newValue: any) => {
            val = newValue;
            if (this.validatorFn) {
                const error = this.validatorFn(this)
                if (error) {
                    this.errors.push(error)
                }
            }

        }

        const getter = () => val;

        Object.defineProperty(this, 'value', {
            get: getter,
            set: setter,
            configurable: true,
            enumerable: true
          })
    }

   

    patchValue(value: any) {
        this.value = value;
    }
}
