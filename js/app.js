(function() {
	var app = angular.module('gemStore', []);
	var gems = [
		{
			name: 'Dodecahedron',
			price: 2,
			description: 'Some gems have hidden qualities beyond their luster, beyond their shine... Dodeca is one of those gems',
			canPurchase : true,
			soldOut : false,
			images:[
				{
					full: 'images/gem-01.gif'
				}
			],
			reviews : [
				{
					stars: 5,
					body: "I love this product",
					author: "joe@thomas.com"
				},
				{	
					stars: 1,
					body: "this product sucks",
					author: "tim@harter.com"

				}
			]
		},	
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Origin of the Pentagonal Gem is unknown, hence its low value. It has very high shine and 12 sides',
			canPurchase : false,
			soldOut : false,
			images:[
				{
					full: 'images/gem-02.gif'
				}
			],
			reviews : [
				{
					stars: 3,
					body: "good product",
					author: "joe@thomas.com"
				},
				{	
					stars: 1,
					body: "bad one",
					author: "tim@harter.com"

				}
			]
		},
	];
	// Angular controllers - where we define our app's behaviour by defining functions.
	app.controller('StoreController', function() {
		this.products = gems;
	});

	/* Moved this logic to custom controller function - productPanels*/
	/*app.controller('PanelController', function() {
		this.tab = 1;

		this.selectTab = function(setTab) {
			this.tab = setTab;
		};

		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		};
	});*/

	app.controller('ReviewController', function(){
		this.review = {};

		this.addReview = function(product) {
			product.reviews.push(this.review);
			this.review = {};
		}
	});

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
	
})();