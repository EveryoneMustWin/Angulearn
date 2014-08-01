(function() {

// https://www.atlassian.com/git/workflows#!workflow-centralized

	var app = angular.module('game', []);

	app.controller('GameController', function() {

		this.chemicals = chemicals;
	});

	app.controller('TabController', function() {

	    this.selectChemical = function(a) {

			this.hasFeedback = true;

	    	if (this.options) {

	    		console.log("this.options has contents");
	    		console.log(chemicals[a].name);

	    		if (this.options[0].name == chemicals[a].name) {

					this.feedback = {
						answer: "Correct"
					};
	    		} else {
					this.feedback = {
						answer: "Wrong"
					};
	    		}
	    	}
	    };

	    this.isSet = function(a) {
	      return (this.tab === a);
	    };

	    this.continue = function() {

	    	// choose a new random chemical
	      	this.tab = Math.floor(3 * Math.random());
		  	this.current = chemicals[this.tab];

		  	// choose three possible answers
			this.options = [{
				name: this.current.name,
				correct: true
			}, {
				name: 'wrong 1'
			}, {
				name: 'wrong 2'
			}];

			this.hasFeedback = false;
	    }

	    this.hasQuestion = true;
		this.tab = Math.floor(3 * Math.random());
		this.current = chemicals[this.tab];

	  	// choose three possible answers
		this.options = [{
			name: this.current.name,
			correct: true
		}, {
			name: 'wrong 1'
		}, {
			name: 'wrong 2'
		}];

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