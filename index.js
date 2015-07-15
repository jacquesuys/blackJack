var blackJack = (function() {
	var win = 21,
		deck = [],
		//////   Hearts,   Diamonds, Clubs,    Spades 
		suits = ['\u2661', '\u2662', '\u2667', '\u2664'],
		rank = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

	function make() {
		suits.forEach(function(i) {
			rank.forEach(function(j) {
				var obj = {};

				(i === '\u2661' || i === '\u2662') ? obj.colour = 'red' : obj.colour = 'black'; 
				obj.symbol = i;
				obj.rank = j;

				deck.push(obj);
			});
		});
	}

	// from underscore
	function random(min, max) {
		if (max == null) {
			max = min;
			min = 0;
		}
		return min + Math.floor(Math.random() * (max - min + 1));
	}

	// from underscore
	function shuffle() {
		// Fisher Yates shuffle
		var length = deck.length,
			shuffled = Array(length);

		for (var index = 0, rand; index < length; index++) {
			rand = random(0, index);
			if (rand !== index) shuffled[index] = shuffled[rand];
			shuffled[rand] = deck[index];
		}
		return shuffled;
	}

	// make deck
	make();
	deck = shuffle();

	return {
		deck: deck
	};

})();

// console.log(blackJack.suits[1]);