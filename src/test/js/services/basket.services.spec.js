describe('basket service testing suit', function() {

	var rsBasketService, $httpBackend;

	beforeEach(module('rsBasket'));
	
	beforeEach(module('data'));
	
	beforeEach(inject(function(_rsBasketService_, _$httpBackend_, $injector) {		
		rsBasketService = _rsBasketService_;
		/*
		or
		rsBasketService = $injector.get('rsBasketService');
		*/
		
		$httpBackend = _$httpBackend_;

		var $templateCache = angular.injector(['data', 'ng']).get('$templateCache');
		var json = $templateCache.get('E:/practice/basket/data/basket.products.json');
		
		console.info(angular.fromJson(json));
		    
	}));
	
	it('should be fine', function() {
		expect(rsBasketService).toBeDefined();
	});

});