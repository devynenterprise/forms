import { FormConstants } from "../constants/form_constants";
import { ValidatorFn } from "../interfaces/validator-fn";

/**
 * model.ts
 * @author Jayde Silva <jayde.silva@empire.ca>
 * @date 2019-10-31
 */

export abstract class AbstractForm {
    public readonly status: string;
    public readonly pristine: boolean;
    public readonly touched: boolean;

    constructor() {

    }
    get unTouched() {
        return !this.touched;
    }

    get valid() {
        return this.status === FormConstants.VALID;
    }

    get invalid() {
        return this.status === FormConstants.INVALID;
    }

    get enabled() {
        return this.status === FormConstants.ENABLED;
    }

    get disabled() {
        return this.status === FormConstants.DISABLED;
    }

    isDirty() {
        return !this.pristine;
    }

    isPristine() {
        return this.pristine;
    }

    markAsTouched() {
        (this as {touched: boolean}).touched = true;

    }

    markAsUntouched() {
        (this as {touched: boolean}).touched = false;

    }

    markAsDirty() {
        (this as {pristine: boolean}).pristine = false;
    }

    markAsPristine() {
        (this as {pristine: boolean}).pristine = true;

    }

    disable() { 
        (this as {status: string}).status = FormConstants.DISABLED;
    }   

    enable() {
        (this as {status: string}).status = FormConstants.ENABLED;

    }
}