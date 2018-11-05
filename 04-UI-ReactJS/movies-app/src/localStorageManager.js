/**
 * Created by Guido on 31/10/2018.
 */
export default class LocalStorageManager {

  static save(value) {
    const key = localStorage.length;
    const json = JSON.stringify(value);
    localStorage.setItem(key, json);
  }

  static update(key, value) {
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
     keys = Object.keys(localStorage);
    const l = keys.length;
    let i = 0;
    while (i < l) {
      values.push(JSON.parse(localStorage.getItem(keys[i])));
      i++;
    }

    return values;
  }

  static saveAll(values) {

    values.forEach(function (value, i) {
      const json = JSON.stringify(value);
      localStorage.setItem(i, json);
    });

  }

  static removeAll() {

    const keys = Object.keys(localStorage);
    let i = keys.length;

    while (i--) {
      localStorage.removeItem(keys[i]);
    }
  }
}