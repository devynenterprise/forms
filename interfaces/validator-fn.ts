import { FormControl } from "../models/form_control";
import { ValidationErrors } from "./validation-errors";

export interface ValidatorFn {
    (control: FormControl): ValidationErrors | null
}