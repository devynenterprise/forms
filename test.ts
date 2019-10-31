import { FormControl } from './models/form_control';
import Validators from './validators';
import FormGroup from './models/form_group';

const control = new FormControl('abc@org.ac', Validators.email);

const group = new FormGroup({
    firstName: new FormControl('Jayde', Validators.required),
    email: new FormControl('jayde@.a.ca', Validators.email)
})

console.log(group)