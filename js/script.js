"use strict";

// FRIST APP
let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	}
}

// start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

function rememberMyFilms() {

	for (let i = 0; i < 2; i++) {

		const	a = prompt('Один из последних просмотренных фильмов?', ''),
				b = prompt('На сколько оцените его?', '');

		if (a != null && b != null && a != '' && b != '' && a.length < 50 ) {
			personalMovieDB.movies[a] = b;
			console.log('done');
		} else {
			console.log('error');
			i--;
		}


	}
}

// rememberMyFilms();

/*Homework*/

/*1*/

//let i = 0;
//
//while (i < 2) {
//    const   a = prompt('Один из последних просмотренных фильмов?', ''),
//            b = prompt('На сколько оцените его?', '');
//    i++;
//    personalMovieDB.movies[a] = b;
//
//}
//
//

/*2*/

//do {
//    const   a = prompt('Один из последних просмотренных фильмов?', ''),
//            b = prompt('На сколько оцените его?', '');
//    i++;
//    personalMovieDB.movies[a] = b;
//}
//while(i < 2);



function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log('Просмотрено довольно мало фильмов');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log('Вы классический зритель');
	} else if (personalMovieDB.count >= 30) {
		console.log('Вы киноман!');
	} else {
		console.log('Произошла ошибка');
	}
}

// detectPersonalLevel();


function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		personalMovieDB.genres[i-1] = prompt(`Ваш любимы жанр под номером ${i}`);
	}
}

// writeYourGenres();


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

console.log(Object.keys(personalMovieDB).length);
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


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// arr.push(9);

// console.log(arr);

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



function learnJS (lang, callback) {
	console.log(`Я сейчас прохожу курс по ${lang}!`);
	callback();
}

learnJS(`Javascript`, function call () {
	console.log(`Я прошёл этот урок по callback!`);
});