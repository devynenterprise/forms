import { FormControl } from "../models/FormControl";
import { ValidationErrors } from "./validation-errors";

export interface ValidatorFn {
    (control: FormControl): ValidationErrors | null
}