'use strict';

// function yesNo(answer) {
//   return answer;
// }

// var answer = prompt('My favorite language is C#').toLocaleLowerCase();

// yesNo();

// if (answer === 'y') {
//   alert('You are right!');
//   point++;
// }

// else if (answer === 'n') {
//   alert('Nope it is C#');
// }


var point = 0;

var me = prompt('Hello! Is my name Sean?');

me = me.toLowerCase();
me = me.startsWith('y');

if( me === true){
  alert('Congradulations!');
  console.log(me);
  point++;
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
  point ++;
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
  point ++;
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
  point++;
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
  point++;
}
else{
  alert('D\'awh, you\'re too kind!');
  console.log(batman);
}

//Question 6
var bone = prompt('Random question, how many different bones have I broken in my life time?');

while (bone !== '0') {
  bone = prompt('Random question, how many different bones have I broken in my life time?');
  console.log(bone);
}
if (bone === '0');
alert('Correct!');
console.log(bone);
point++;

//Question 7

var superHeroes = ['superman' , 'swampthing' , 'nightwing' , 'thor' , 'wolverine' , 'flash' , 'wonderwoman'];
var superGuess = false;
var numSuperGuess = 1;

while (superGuess === false && numSuperGuess <= 7) {
  var guessHero = prompt('Besides, Batman, guess one of my top seven superheros?');

  for (var i = 0; i < superHeroes.length; i++) {

    if (guessHero.toLowerCase() === superHeroes[i]) {
      alert('Damn skippy! You got one! The top eight in order are Batman, Swampthing, Superman, Wonderwoman, Wolverine, Nightwing, Flash and Thor.');
      point++;
      console.log('Correct superhero guess');
      superGuess = true;
      point++;
      break;
    }

  }

  if (!superGuess) {
    alert('That doesn\'t make my top seven! Try again! (up to 6 more times)');
    console.log('never guessed correctly');
  }

  numSuperGuess++;
}

alert('You got ' + point + ' questions right out of 7!');
