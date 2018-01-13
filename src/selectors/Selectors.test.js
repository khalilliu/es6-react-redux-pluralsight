import expect from 'expect';
import {authorsFormattedFormDropdown} from './Selectors';

describe('author selectors',()=>{
	describe('authorsFormattedFormDropdown', () => {
		it('should return author data',()=>{

			const authors = [
				{id:'cory-house',firstName: 'Cory',lastName:'House'},
				{id:'scott-house',firstName: 'Scott',lastName:'House'}
			];

			const expected = [
				{value: 'cory-house',text:'Cory House'},
				{value: 'scott-house',text:'Scott House'}
			];

			expect(authorsFormattedFormDropdown(authors)).toEqual(expected);
		})
	})
})