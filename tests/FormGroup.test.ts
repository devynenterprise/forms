import { expect } from 'chai';
import FormGroup from '../models/FormGroup';
import { FormControl } from '../models/FormControl';

describe('FromGroup Unit Tests', () =>  {
    let formGroup: FormGroup = new FormGroup({});
    beforeEach(() => {
        formGroup = new FormGroup({firstName: new FormControl()})
    })
    it('returns an instance of a FormGroup', () => {
        expect(formGroup instanceof FormGroup).equal(true)
    });
    it('returns the formControl `firstname`', () =>  {
        const firstNameControl = formGroup.get('firstName')
        expect(firstNameControl instanceof FormControl).equal(true)
        expect(firstNameControl.value).equal('jayde')
    });
});