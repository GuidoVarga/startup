/**
 * Created by Guido on 31/10/2018.
 */
export default class Movie {

   constructor(name, year, duration) {
      this.name = name;
      this.year = year;
      this.duration = duration;
      //this.cast = [];
   }

   play() {

   }

   pause() {

   }

   resume() {

   }

   /*
    addCast(cast){

       if(Array.isArray(cast)){
         this.cast.push(...cast);
        }else{
         this.cast.push(cast);
         }

    }

    toString(){
      console.log(this.name + ' is a ' + this.year + ' film with a ' + this.duration + ' minutes duration.');
    }
    */
}