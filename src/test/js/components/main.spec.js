describe('main js testing suit', function() {

	beforeEach(module('rsBasket'));
		
	it('should create basket app', function() {
		expect(window.$basketApp).toBeDefined();
	});

});