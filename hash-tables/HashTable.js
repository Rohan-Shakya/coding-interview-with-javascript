/*
  ====================== Hash Table ======================
  * Hash Tables are collections of key-value pairs
  * Hash Tables can find values quickly given a key
  * Hash tables can add new key-values quickly
  * Hash tables store data in a large array, and work by hashing the keys
  * A good has should be fast, distribute keys uniformly, and 
    be deterministic
  * Separate chaining and linear probing are two strategies used to 
    deal with two keys that hash to same index
*/

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  /*
    ============== Set ===================
    * Accepts a key and a value
    * Hashes the key
    * Stores the key-value pair in the hash table
        array via separate chaining 
  */
  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  /*
    ============== Get ===================
    * Accepts a key
    * Hashes the key
    * Retrieves the key-value pair in the hash table
    * If the key isn't found, returns undefined
  */
  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArr;
  }

  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }
}

/*
  ============= Big O of Hash Table ======
  * Insertion ---> O(1)
  * Deletion -----> O(1)
  * Access ------> O(N)
*/
