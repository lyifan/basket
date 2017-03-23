describe('basket service testing suit', function() {

	var rsBasketService, $httpBackend, req;

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
		var json = angular.fromJson($templateCache.get('E:/practice/basket/data/basket.products.json'));

		req = $httpBackend
				.when('GET', '/data/basket.products.json')
				.respond(json);
		
	}));
	
	it('should be fine', function() {
		
		rsBasketService.getProducts().then(function(response) {
			expect(response.data).toBeDefined();			
		});
		
		$httpBackend.flush();
	});
	
	it('should not be fine', function() {
		req.respond(401, '');
				
		rsBasketService.getProducts().catch(function() {
			
		});
		
		$httpBackend.flush();
	});

});