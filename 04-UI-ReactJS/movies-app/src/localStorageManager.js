/**
 * Created by Guido on 31/10/2018.
 */
export default class LocalStorageManager {

   static save(key, value) {
      const json = JSON.stringify(value);
      localStorage.setItem(key, json);
   }

   static get(key) {
      return localStorage.getItem(key);
   }

   static remove(key) {
      localStorage.removeItem(key);
   };

   static getAll() {

      const values = [],
            keys = Object.keys(localStorage)
      let i = keys.length;

      while (i--) {
         values.push(JSON.parse(localStorage.getItem(keys[i])));
      }

      return values;
   }

   static removeAll() {

      const keys = Object.keys(localStorage);
      let i = keys.length;

      while (i--) {
         localStorage.removeItem(keys[i]);
      }
   }
}