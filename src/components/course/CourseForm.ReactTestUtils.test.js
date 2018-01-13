import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';

const setup = () => {
	let props = {
		course: {},
		saving: false,
		errors: {},
		onSave: () => {},
		onChange: () => {}
	}
	let renderer = TestUtils.createRenderer();
	renderer.render(<CourseForm {...props} />);
	let output = renderer.getRenderOutput();
	return {
		props,
		output,
		renderer
	}
}

describe('courseForm via react test utils', () => {
	it('render form and h1', () => {
		const {output} = setup();
		expect(output.type).toBe('form');
		let [h1] = output.props.children;
		expect(h1.type).toBe('h1');
	});

	it('saving button is labeled "save" when not saving',()=>{
		const {output} = setup();
		const submitButton = output.props.children[5];
		expect(submitButton.props.value).toBe("save")
	})
})
