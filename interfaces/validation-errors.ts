export interface ValidationErrors {
    // errors can be in the form {'errorName': {'validatorName': validatorValue, 'actual': value}}
    [errorName: string]: any;
}