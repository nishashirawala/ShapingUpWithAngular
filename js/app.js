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
			]
		},
	];
	// Angular controllers - where we define our app's behaviour by defining functions.
	app.controller('StoreController', function() {
		this.products = gems;
	});

	app.controller('PanelController', function() {
		this.tab = 1;
		this.selectTab = function(setTab) {
			this.tab = setTab;
		};

		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		};
	});
	
})();