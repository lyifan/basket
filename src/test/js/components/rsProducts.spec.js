describe('basket product list testing suit', function() {

	var $componentController, 
		$compile,
		$rootScope,
		ctrl,
		element;

	beforeEach(module('rsBasket'));
	
	beforeEach(module('templates'));

	/*
	beforeEach(module('rsBasket', function($provide) {
		$provide.factory('rsBasketProductDetailsDirective', function() {
			return {
				
			}; 
		});
	}));*/
	
	beforeEach(inject(function(_$componentController_, _$compile_, _$rootScope_) {
		$componentController = _$componentController_;		
		$compile = _$compile_;
		$rootScope = _$rootScope_;

		element = $compile('<rs-products/>')($rootScope);
		$rootScope.$digest();
		
		ctrl = element.controller('rsProducts');	
		
	}));
		
	
	function createComponent() {
		return $componentController('rsProducts', null, {});			
	}

	it('should render the template', function() {
		expect($('.basket-product', element).length).toBe(2);		
	});
	
	it('should create the component', function() {
		//var ctrl = createComponent();

		expect(ctrl.totalQty).toBe(12);
	});
	
	it('should delete a product', function() {
		//var ctrl = createComponent();
		var product = ctrl.products[1];
		
		ctrl.deleteProduct(product);
		
		expect(ctrl.products.indexOf(product)).toBe(-1);
		expect(ctrl.totalQty).toBe(10);
	});
	
	it('should change the total quantity', function() {
		//var ctrl = createComponent();
		var product = ctrl.products[1];
		var oldValue = product.quantity;
		product.quantity = 10;
		
		ctrl.changeQty(product, oldValue);
		
		expect(ctrl.totalQty).toBe(20);
	});
	
});