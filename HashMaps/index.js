// Hash maps have tow parts. The hash function and the mapping
// Hash Functions need to be deterministic meaning for a key the output must always be the same and must have constant time

function badHash(key, len) { // This only hashes strings not arrays and numbers. The bigger problem is that it's not constant time.
    let total = 0;
    for (let char of key) {
        let value = char.charCodeAt(0) - 96;
        total = (total + value) % len;
    }
    return total;
}

/**
 * 
 * As a summary, primes are used because you have the best chance of obtaining a unique value when multiplying values by the
 * prime number chosen and adding them all up. For example given a string, multiplying each letter value with the prime number
 * and then adding those all up will give you its hash value. Prime numbers will remove collisions and improve speed immensely.
 */
function improvedHash(key, len) {
    let total = 0;
    let prime = 31; //The prime number helps spread the keys more uniformly.
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * prime + value) % len;
    }
    return total
}

class HashTable {
    constructor(size = 4) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let prime = 31; //The prime number helps spread the keys more uniformly.
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * prime + value) % this.keyMap.length;
        }
        return total
    }

    set(key, value) {
        let keyHash = this._hash(key);
        if(!this.keyMap[keyHash]) {
            this.keyMap[keyHash] = [];
        }
        this.keyMap[keyHash].push([key, value]);
    }

    get(key) {
        let keyHash = this._hash(key);
        if(!this.keyMap[keyHash]) return null;
        for (let i = 0; i < this.keyMap[keyHash].length; i++) {
            if(this.keyMap[keyHash][i][0] == key) {
                return this.keyMap[keyHash][i][1]
            }
        }
    }

    keys() {
        let keys = [];
        for(let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for(let j = 0; j < this.keyMap[i].length; j++) {
                    if(!keys.includes(this.keyMap[i][j][0])) {
                        keys.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }
        return keys;
    }

    values() {
        let values = [];
        for(let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for(let j = 0; j < this.keyMap[i].length; j++) {
                    if(!values.includes(this.keyMap[i][j][1])) {
                        values.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
        return values;
    }
    
}

let ht = new HashTable();
ht.set("Hollow Purple", "Gojo");
ht.set("Hollow Purple", "Gojo");
ht.set("Cleave & Dismantle", "Sukuna");
ht.set("Cleave & Dismantle", "Sukuna");
ht.set("Heavenly Restriction", "Toji");
ht.set("Mimicry", "Yuta");
ht.set("Gambling", "Hakari");
console.log(ht);
console.log(ht.get("Mimicry"));
console.log(ht.values());
console.log(ht.keys());

