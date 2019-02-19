const chai = require('chai');
const expect = chai.expect;

describe('chai test', ()=>{
	it('should compare some values', ()=>{
		expect(1).to.equal(1);
	});

	it('should do something else', ()=>{
		expect({name:"foo"}).to.deep.equal({name:"foo"});
	})
})