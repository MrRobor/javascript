"use strict";

/*Объекты*/
const options = {
	name: `Akim`,
	surname: `Serverov`,
	age: 18,
	height: 1.60,
	colors: {
		love: `black, green, white`,
		bgcolor: `green` 
		
	},
};

for (let key in options) {
	console.log(`Значение ${key} имеет свойства ${options[key]}`);
}

console.log(Object.keys(options).length);
const {love, bgcolor} = options.colors;
console.log(love, bgcolor);

for (let key in options) {
	if (typeof(options[key]) === `object`) {
		for (let i in options[key]) {
			console.log(`Свойства ${i} имеет значение ${options[key][i]}`);
		}
		
	} else {
		console.log(`Свойства ${key} имеет значение ${options[key]}`);
	}
	
}

/*Массивы*/
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr.forEach(function (number, index, arr) {
	console.log(`${index}) ${number} это из массива ${arr}`);
});



for (let i = 0; i  < arr.length; i++) {
	console.log(arr[i]);
}

const answer = prompt(``, ``);
const products = answer.split(`,`);
console.log(products.join(`; `));
console.log(products.sort());


/*Callback*/
function learnJS (lang, callback) {
	console.log(`Я сейчас прохожу курс по ${lang}!`);
	callback();
}

function call() {
	console.log(`Я прошёл этот урок по callback!`);
}

learnJS(`Javascript`, call);