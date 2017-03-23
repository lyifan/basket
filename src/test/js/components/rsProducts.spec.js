describe('basket product list testing suit', function() {

	var $componentController, 
		$compile,
		$rootScope,
		$q,
		ctrl,
		element,
		rsBasketService;

	beforeEach(module('rsBasket'));
	
	beforeEach(module('templates', 'data'));

	/*
	beforeEach(module('rsBasket', function($provide) {
		$provide.factory('rsBasketProductDetailsDirective', function() {
			return {
				
			}; 
		});
	}));*/
	
	beforeEach(inject(function(_$componentController_, _$compile_, _$rootScope_, _rsBasketService_, _$q_) {
		$componentController = _$componentController_;		
		$compile = _$compile_;
		$rootScope = _$rootScope_;

		
		rsBasketService = _rsBasketService_;
		
		$q = _$q_;
		
		createComponent();
	}));

	function createComponent() {
		//return $componentController('rsProducts', null, {});	
		var $templateCache = angular.injector(['data', 'ng']).get('$templateCache');
		var deferred = $q.defer();
		var json = angular.fromJson($templateCache.get('E:/practice/basket/data/basket.products.json'));
		spyOn(rsBasketService, 'getProducts').and.returnValue(deferred.promise);
		deferred.resolve({data:json});
		element = $compile('<rs-products/>')($rootScope);
		$rootScope.$digest();
		ctrl = element.controller('rsProducts');
	}

	it('should render the template', function() {
		expect($('.basket-product', element).length).toBe(2);		
	});
	
	it('should create the component', function() {
		expect(ctrl.totalQty).toBe(12);
	});
	
	it('should delete a product', function() {
		var product = ctrl.products[1];
		
		ctrl.deleteProduct(product);
		
		expect(ctrl.products.indexOf(product)).toBe(-1);
		expect(ctrl.totalQty).toBe(10);
	});

	it('should change the total quantity', function() {
		var product = ctrl.products[1];
		var oldValue = product.quantity;
		product.quantity = 10;
		
		ctrl.changeQty(product, oldValue);
		
		expect(ctrl.totalQty).toBe(20);
	});
});