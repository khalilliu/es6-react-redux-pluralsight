import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'Enzyme';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';

const setup = (saving) => {
	let props = {
		course: {},
		saving: saving,
		errors: {},
		onSave: () => {},
		onChange: () => {}
	}
	return shallow(<CourseForm {...props} />)
}
	
it('renders form and h1', () => {
	const wrapper = setup(false);
	expect(wrapper.find('form').length).toBe(1);
	expect(wrapper.find('h1').text()).toEqual('Manage Course');
})

it('save button is labeled "save" when not saving', ()=>{
	const wrapper = setup(false);
	expect(wrapper.find('input').props().value).toBe('save');
})

it('save button is labeled "saving..." when saving', ()=>{
	const wrapper = setup(true);
	expect(wrapper.find('input').props().value).toBe('saving...');
})

