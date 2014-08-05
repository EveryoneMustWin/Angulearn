(function() {

// https://www.atlassian.com/git/workflows#!workflow-centralized

	var app = angular.module('game', []);

	app.controller('GameController', function() {

		this.chemicals = chemicals;
	});

	app.controller('TabController', function() {

	    this.selectChemical = function(a) {

			this.hasFeedback = true;
			this.tries++;

	    	if (this.options) {

	    		console.log("this.options");
	    		console.log(this.options);

	    		if (this.options[a].correct) {

	    			this.score++;

					this.feedback = {
						answer: "Correct"
					};
	    		} else {
					this.feedback = {
						answer: "Wrong",
						rightAnswer: "(" + this.current.name + ")"
					};
	    		}
	    	}
	    };

	    this.isSet = function(a) {
	      return (this.tab === a);
	    };


	   	this.startNewQuiz = function() {

			this.options = $.extend(true, [], chemicals);

		  	// choose three possible answers
		  	this.options = shuffle(this.options).slice(0, 3);

	    	// choose a new random chemical
	      	this.tab = Math.floor(3 * Math.random());
		  	this.current = this.options[this.tab];

		  	console.log("this.tab");
		  	console.log(this.tab);

		  	this.options[this.tab].correct = true;

    		console.log("chemicals");
    		console.log(chemicals);
	   	}

	    this.continue = function() {

	    	this.startNewQuiz();

			this.hasFeedback = false;
	    }

	   	this.startNewQuiz();
	   	this.score = 0;
	   	this.tries = 0;
	});

	app.directive("chemTabs", function() {

		return {
			restrict: "E",
			templateUrl: "chem-tabs.html"
		}
	});

	var shuffle = function(array) {

	  var currentIndex = array.length
	    , temporaryValue
	    , randomIndex
	    ;

	  // While there remain elements to shuffle...
	  while (0 !== currentIndex) {

	    // Pick a remaining element...
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;

	    // And swap it with the current element.
	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }

	  return array;
	};

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
	 }, {
	    name: 'Diaminopyridine',
	    description: "Placeholder text.",
	    power: 9,
	    color: '#EEE',
	    images: [
	      "images/chem4.png"
	    ]
	}, {
	    name: 'Dibromopyridine',
	    description: "Placeholder text.",
	    power: 9,
	    color: '#EEE',
	    images: [
	      "images/chem5.png"
	    ]
	}, {
	    name: 'Trans-stilbene',
	    description: "Placeholder text.",
	    power: 9,
	    color: '#EEE',
	    images: [
	      "images/chem6.png"
	    ]
	}
	];
})();