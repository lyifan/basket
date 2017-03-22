(function($app) {
	'use strict';

	$app.component('rsProducts',  {
		templateUrl: 'templates/basket/products.html',
		controller: RsProductsController
	});

	RsProductsController.$inject = ['$http', 'rsBasketService'];

	function RsProductsController($http, _rsBasketService) {
		var ctrl = this;

		_rsBasketService.getProducts().then(function(response) {
			ctrl.products = response.data;
		});

		ctrl.$onInit = function() {
		};

		ctrl.deleteProduct = function(product) {
			var idx = ctrl.products.indexOf(product);
			if(idx > -1) {
				ctrl.products.splice(idx, 1);
			}

			calculateQty();
		};

		ctrl.changeQty = function(product, oldQty) {
			ctrl.totalQty += (product.quantity - oldQty);
		};

		function calculateQty() {
			var totalQty = 0;
			for(var i = 0; i < ctrl.products.length; ++i) {
				totalQty += ctrl.products[i].quantity;
			}

			ctrl.totalQty = totalQty;
		}

	}

})(window.$basketApp);