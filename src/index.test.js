import expect from 'expect';

describe('Our first test',()=>{
	it('should pass',()=>{
		expect(true).toEqual(true);
	})
})

describe('Our second test',()=>{
	it('should pass',()=>{
		expect(1+2).toEqual(3);
	})
})