(function(){
	app = angular.module('store-products', []);
	app.directive('productTitle', function(){
		return {
			restrict: 'E', // E stands for element, so we are using product-title as element in html. If we use it as attribute than it will be 'A'
			templateUrl : 'product-title.html'
		};
	});

	app.directive('productPanels', function(){
		return {
			restrict: 'E',
			templateUrl : 'product-panels.html',
			controller: function(){
				this.tab = 1;

				this.selectTab = function(setTab) {
					this.tab = setTab;
				};

				this.isSelected = function(checkTab) {
					return this.tab === checkTab;
				};
			},
			controllerAs: 'panelCtrl'
		};
	});
}) ();

