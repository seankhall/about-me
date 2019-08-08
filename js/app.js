'use strict';

var point = 0;

var me = prompt('Hello! Is my name Sean?');

me = me.toLowerCase();
me = me.startsWith('y');

if( me === true){
  alert('Congradulations!');
  console.log(me);
}
else{
  alert('Wrongo Bucko!');
  console.log(me);
}

var hero = prompt('Is Spider-man my favorite superhero?');

hero = hero.toLowerCase();
hero = hero.startsWith('n');

if( hero === true){
  alert('Good Job! You must\'ve known it\'s Batman.');
  console.log(hero);
}
else{
  alert('You fool! It\'s obviously Batman.');
  console.log(hero);
}

var age = prompt('Do you think I was exposed to Batman at the age of 1?');

age = age.toLowerCase();
age = age.startsWith('y');

if ( age === true){
  alert('That\'s right! It was the good ol\' Adam West show.');
  console.log(age);
}
else{
  alert('What!? I thought that would just be a given. Oh well, on to the next question.');
  console.log(age);
}

var movie = prompt('Is it true that I saw The Dark Knight a total of seven times in the theaters?');

movie = movie.toLowerCase();
movie = movie.startsWith('n');

if(movie === false){
  alert('Ding ding! Once in IMAX, another in a drive-in and the rest in regular theaters.');
  console.log(movie); 
}
else{
  alert('You must\'ve thought I had seen it like 50 times or something! I wanted to but I was only a teenager with no job at the time.');
  console.log(movie);
}

var batman = prompt('Am I Batman?');

batman = batman.toLowerCase();
batman = batman.startsWith('n');

if(batman === true){
  alert('Correct! But mark my words, one day I will be!');
  console.log(batman);
}
else{
  alert('D\'awh, you\'re too kind!');
  console.log(batman);
}

//Goal: Question to ask four times have a 'correct', 'wrong' and 'finally wrong' responses.
var bone = prompt('Random question, how many different bones have I broken in my life time?');
var i = 1;
while (i <= 1){
  bone += '<br>The number is ' + i;
  i++;
  console.log(bone);
  point++;
}
for (var attempt = 1; attempt <= 4; attempt++){

}

var islandGuess = false;
var numIslandGuesses = 1;

while (islandGuess === false && numIslandGuesses <= 7){
  console.log('hi', numIslandGuesses);
  if (numIslandGuesses === 4){islandGuess = true;}
  numIslandGuesses++;
}