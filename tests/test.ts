import { FormControl } from '../models/FormControl';
import Validators from '../validators/validators';
import FormGroup from '../models/FormGroup';

const control = new FormControl('abc@org.ac', Validators.email);

const group = new FormGroup({
    firstName: new FormControl('Jayde', Validators.required),
    email: new FormControl('jayde@.a.ca', Validators.email)
})

console.log('getting email')
console.log(group.get('email').value)

