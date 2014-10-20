// Write a function alphabetSoup that takes a single string parameter and returns the string with the letters in alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string.

var alphabetSoup = function(string){
	var letterArray = string.toLowerCase().split('');
	var alphabatized = letterArray.sort().join('');

	return alphabatized;

};

console.log(alphabetSoup('hello'));
console.log(alphabetSoup('elephant'));
console.log(alphabetSoup('alphabet'));



// Write a function vowelCount that takes a single string parameter and returns the number of vowels the string contains (ie. "All cows eat grass" would return 5).

var vowels = ['a', 'e', 'i', 'o', 'u'];

var vowelCount = function(string){
	var letterArray = string.toLowerCase().split('');
	var vowelNum = 0;

	for(var i = 0; i< letterArray.length; i++){
		if(vowels.indexOf(letterArray[i]) !== -1){
			vowelNum++;
		}
	}
	return vowelNum;
};
console.log(vowelCount('All cows eat grass'));
console.log(vowelCount('LOOOOTS OOOF VOOOOOOWEEEEELS'));




// Bonus:
// Write a function coinDeterminer that takes a single number parameter, which will be an integer ranging from 1 to 250, and returns an integer output that will specify the least number of coins, that when added, equal the input integer. Coins are based on a system as follows: there are coins representing the integers 1, 5, 7, 9, and 11. So for example: if num is 16, then the output should be 2 because you can achieve the number 16 with the coins 9 and 7. If num is 25, then the output should be 3 because you can achieve 25 with either 11, 9, and 5 coins or with 9, 9, and 7 coins.

var coins = [1, 5, 7, 9, 11];

var coinDeterminer = function(num){
	var coinNum = 0;
	var leftOver = num;
	console.log('for num: ', num);

	for(var i = coins.length-1 ; i>=0 ; i--){
			coinNum = coinNum + Math.floor(leftOver/coins[i]);
			console.log('coinNum: ', coinNum);
			leftOver = leftOver%coins[i];
			console.log('leftOver: ', leftOver);
		
	}
	return coinNum;
};
 
console.log(coinDeterminer(16));
console.log(coinDeterminer(25));




$(document).on('ready', function() {
  
});