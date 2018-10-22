import Movie from './movie.js';
import Actor from './actor.js';

const backToTheFutureIII = new Movie('Back to the Future III',1990,118);
const fightClub = new Movie('Fight Club',1999,151);
const edwardNorton = new Actor('Edward Norton',49);

backToTheFutureIII.on('play', (movie) => { console.log('Playing '+movie.name) });
backToTheFutureIII.on('pause', (movie) => { console.log('Pausing '+movie.name) });
backToTheFutureIII.on('resume', (movie) => { console.log('Resuming '+movie.name) });

backToTheFutureIII.play();
backToTheFutureIII.pause();
backToTheFutureIII.resume();
backToTheFutureIII.toString();

edwardNorton.toString();