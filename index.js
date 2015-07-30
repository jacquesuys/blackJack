var blackJack = (function() {
    "use strict";

    var win = 21,
        deck = [],
        //////   Hearts,   Diamonds, Clubs,    Spades 
        suits = ['\u2661', '\u2662', '\u2667', '\u2664'],
        rank = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'],
        player = {},
        dealer = {};

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

    function deal() {
        player.hand = deck.splice(0, 2);
        dealer.hand = deck.splice(0, 2);
        console.log(addUp());
    }

    function hit() {
    	var card = deck.splice(0, 1);
    	player.hand.push(card[0]);
    	console.log(addUp());
    }

    function addUp(obj) {
    	var sum = 0, key;
    	// maybe a reduce function?
    	for(key in player.hand) {
    		if(isNaN(player.hand[key].rank)) {
    			if(player.hand[key].rank === 'A') {
					(sum += 11 > 21) ? sum += 1 : sum += 11;
				} else {
					sum += 10;
				}
    		} else {
    			sum += player.hand[key].rank;
    		}
    	}

    	return sum;
    }

    function ifBust(val) {

    }

    function autoMate() {

    }

    // make deck
    make();
    deck = shuffle();
    deal();

    return {
        deck: deck, // remove afterwards
        deal: deal,
        hit: hit,
        shuffle: shuffle,
        dealer: dealer,
        player: player
    };

})();