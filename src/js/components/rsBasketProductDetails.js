(function($app) {
	'use strict';

	$app.component('rsBasketProductDetails',  {
		templateUrl: 'templates/basket/productDetails.html',
		controller: RsBasketProductDetailsController,
		bindings: {
			product: '<',
			onDelete: '&',
			onQtyChange: '&'
		}
	});

	RsBasketProductDetailsController.$inject = ['$http'];

	function RsBasketProductDetailsController($http) {
		var ctrl = this;

		ctrl.$onInit = function() {
		};

		ctrl.delete = function() {
			ctrl.onDelete({product: ctrl.product});
		};

		ctrl.qtyChange = function(oldQty) {
			ctrl.onQtyChange({product: ctrl.product, oldQty: oldQty});
		};
	}

})(window.$basketApp);