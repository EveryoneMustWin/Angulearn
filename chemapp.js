(function() {

// https://www.atlassian.com/git/workflows#!workflow-centralized

	var app = angular.module('game', []);

	app.controller('GameController', function() {

		this.chemicals = chemicals;
	});

	app.controller('TabController', function() {

	    this.selectChemical = function(a) {
	      	this.tab = a;
		  	this.current = chemicals[this.tab];

			this.options = [{
				name: 'Methyl-trans-cinnamic acid',
				correct: true
			}, {
				name: 'Benzophenone'
			}, {
				name: 'Phthalimide'
			}];
	    };

	    this.isSet = function(a) {
	      return (this.tab === a);
	    };

		this.selectChemical(Math.floor(3 * Math.random()));


	});

	app.directive("chemTabs", function() {

		return {
			restrict: "E",
			templateUrl: "chem-tabs.html"
		}
	});


	var chemicals = [{
	    name: 'Methyl-trans-cinnamic acid',
	    description: "Placeholder text.",
	    power: 8,
	    color: '#CCC',
	    images: [
	      "images/chem1.png"
	    ]
	}, {
	    name: 'Benzophenone',
	    description: "Placeholder text.",
	    power: 9,
	    color: '#EEE',
	    images: [
	      "images/chem2.png"
	    ]
	}, {
	    name: 'Phthalimide',
	    description: "Placeholder text.",
	    power: 9,
	    color: '#EEE',
	    images: [
	      "images/chem3.png"
	    ]
	 }
	//, {
	//     name: 'Diaminopyridine',
	//     description: "Placeholder text.",
	//     power: 9,
	//     color: '#EEE',
	//     images: [
	//       "images/chem4.png"
	//     ]
	// }, {
	//     name: 'Dibromopyridine',
	//     description: "Placeholder text.",
	//     power: 9,
	//     color: '#EEE',
	//     images: [
	//       "images/chem5.png"
	//     ]
	// }, {
	//     name: 'Trans-stilbene',
	//     description: "Placeholder text.",
	//     power: 9,
	//     color: '#EEE',
	//     images: [
	//       "images/chem6.png"
	//     ]
	// }
	];
})();