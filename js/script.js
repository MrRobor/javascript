"use strict";

// FRIST APP
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;    

console.log(personalMovieDB);

// SECOND APP

let year = +prompt('Когда Аким родился');
if(year == 2002) {
    alert('Ты настоящий друг! Акима!');
} else {
    alert('Жаль, но ты не прошёл проверку.')
}
