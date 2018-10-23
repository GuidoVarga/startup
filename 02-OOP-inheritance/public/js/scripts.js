import Movie from './movie.js';
import Actor from './actor.js';
import Logger from './logger.js';

window.onload = function (){

	const logger = new Logger();
	const backToTheFutureIII = new Movie('Back to the Future Part III',1990,118);
	const fightClub = new Movie('Fight Club',1999,151);
	const michael = new Actor('Michael J. Fox',57);
	const cast = [
		new Actor('Christopher Lloyd',80),
		new Actor('Mary Steenburgen',65),
		new Actor('Thomas F. Wilson',59)
	];

	backToTheFutureIII.on('play', (movie) => { logger.log('The play event of ' + movie.name + ' has been emitted') });
	backToTheFutureIII.on('pause', (movie) => { logger.log('The pause event of ' + movie.name + ' has been emitted') });
	backToTheFutureIII.on('resume', (movie) => { logger.log('The resume event of ' + movie.name + ' has been emitted') });
	fightClub.on('play', (movie) => { logger.log('The play event of ' + movie.name + ' has been emitted') });
	fightClub.on('pause', (movie) => { logger.log('The pause event of ' + movie.name + ' has been emitted') });
	fightClub.on('resume', (movie) => { logger.log('The resume event of ' + movie.name + ' has been emitted') });
	
	backToTheFutureIII.play();
	backToTheFutureIII.pause();
	backToTheFutureIII.resume();
	fightClub.play();
	fightClub.pause();
	fightClub.resume();

	backToTheFutureIII.addCast(cast);
	backToTheFutureIII.addCast(michael);

	logger.log(backToTheFutureIII.cast);

	backToTheFutureIII.share('Sebastian');

	fightClub.like('Guido');
}