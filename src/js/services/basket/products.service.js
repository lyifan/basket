(function($app) {
	'use strict';
	
	$app.factory('rsBasketService', RsBasketService);
	
	RsBasketService.$inject = ['$http'];
	
	function RsBasketService($http) {
		return {
			getProducts: function() {
				return $http.get('/data/basket.products.json');
			}
		};
	}
	
})(window.$basketApp);	