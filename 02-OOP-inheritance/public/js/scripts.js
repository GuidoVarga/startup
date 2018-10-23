import Movie from './movie.js';
import Actor from './actor.js';

window.onload = function (){

	const backToTheFutureIII = new Movie('Back to the Future Part III',1990,118);
	const fightClub = new Movie('Fight Club',1999,151);
	const michael = new Actor('Michael J. Fox',57);
	const cast = [
		new Actor('Christopher Lloyd',80),
		new Actor('Mary Steenburgen',65),
		new Actor('Thomas F. Wilson',59)
	];

	backToTheFutureIII.on('play', (movie) => { console.log('Playing '+movie.name) });
	backToTheFutureIII.on('pause', (movie) => { console.log('Pausing '+movie.name) });
	backToTheFutureIII.on('resume', (movie) => { console.log('Resuming '+movie.name) });


	backToTheFutureIII.play();
	backToTheFutureIII.pause();
	backToTheFutureIII.resume();

	backToTheFutureIII.addCast(cast);
	backToTheFutureIII.addCast(michael);

	console.log(backToTheFutureIII.cast);

}