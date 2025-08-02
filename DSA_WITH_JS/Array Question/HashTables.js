// it is a  datastructure that maps key to value using a hash function
// it help to fast retrival / searching of data


class HashTables {
    constructor(size = 10) {
        this.size = size;
        this.buckets = new Array(size).fill(null).map(() => [])
    }
    hash(key) {
        let hash = 0;
        for (let char of key) {
            hash += char.charCodeAt(0)
        }
        return hash % this.size;
    }

    set(key, value) {
        let index = this.hash(key);
        let bucket = this.buckets[index];
        for (let pair of bucket) {
            if (pair[0] === key) {
                pair[1] = value;
                return;
            }
        }
        bucket.push([key, value]);
    }

    get(key) {
        let index = this.hash(key);
        let bucket = this.buckets[index];

        for (let pair of bucket) {
            if (pair[0] === key) {
                return pair[1];
            }
        }
        return undefined
    }

    remove(key) {
        let index = this.hash(key);
        let bucket = this.buckets[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1);
                return "the key value pair is delelted"
            }
        }
        return " the key value pair doesnt deleted"
    }

    has(key) {
        return this.get(key) !== undefined;
    }

    print() {
        for (let i = 0; i < this.size; i++) {
            console.log(this.buckets[i]);
        }
    }

}

const table = new HashTables();
table.set("name", "jayesh");
table.set("age", 23);
table.set("role", "developer");
table.set("lang", "javascript");

console.log(table.get("name"))
console.log(table.has("age"))
table.remove("age")
console.log(table.has("age"))


table.print()


// 🔸 Problem 1: Frequency Counter
// You're given an array of integers. Count the number of occurrences of each element and return them.

// Input: [1, 2, 2, 3, 1, 4, 2]
// Output: {1: 2, 2: 3, 3: 1, 4: 1}

// let apper = new Map();

// let integers = [1, 2, 2, 3, 1, 4, 2]

// integers.forEach((item) => {
//     apper.set(item, (apper.get(item) || 0) + 1)
// })

// console.log(apper)



// 🔸 Problem 2: Find the First Non-Repeating Character
// Given a string, return the first character that doesn't repeat.

// Input: "abaccdeff"
// Output: "b"


// let freq = new Map();
// let str = 'abaccdeff';
// str.split('').forEach((char) => {
//     freq.set(char, (freq.get(char) || 0) + 1);
// })

// for (let [char, count] of freq) {
//     if (count === 1) {
//         console.log(char);
//         return;
//     }
// }




// 🔸 Problem 3: Check for Anagrams
// Given two strings, check if they are anagrams of each other using a hash table.

// Input: "listen", "silent"
// Output: true


// let freq = new Map();

// let str1 = 'listen';
// let str2 = 'silent';

// if (str1.length !== str2.length) {
//     console.log("it is not anangrams")
// }

// str1.split('').forEach((items) => {
//     freq.set(items, (freq.get(items) || 0) + 1);
// })

// str2.split('').forEach((items) => {
//     if (!freq.has(items)) {
//         console.log("it is not anagrasms")
//         return
//     }
//     freq.set(items, freq.get(items) - 1)

// });

// for (let [char, count] of freq) {
//     if (count >= 1) {
//         console.log("it is not angaam");
//         return
//     }
// }
// console.log("it is anagrams")


// 🟦 Problem 4: Most Frequent Element in an Array
// 🧠 Goal:
// Given an array, find the element that appears the most times.

// 📥 Input: [1, 3, 2, 1, 4, 1, 3, 3, 3]
// 📤 Expected Output: 3



// let freq = new Map();
// let arr = [1, 3, 2, 1, 4, 1, 3, 3, 3];

// arr.forEach((items) => {
//     freq.set(items, (freq.get(items) || 0) + 1)
// })

// let ch = '';
// let co = 0;

// for (let [char, count] of freq) {
//     if (count > co) {
//         co = count;
//         ch = char;
//     }
// }

// console.log(`the most freq of ${ch} is : ${co}`)



// 🔸 Problem 5: Two Sum using Hash Map
// Find if there exists a pair of numbers in the array that sums up to a target value.

// Input: arr = [2, 7, 11, 15], target = 9
// Output: true (because 2 + 7 = 9)


// let map = new Map();
// let arr = [2, 7, 11, 15];
// let target = 9

// for (let i = 0; i < arr.length - 1; i++) {
//     let complement = target - arr[i];
//     if (map.has(complement)) {
//         console.log(`pair found :${complement} : `, arr[i]);
//         break;
//     } else {
//         map.set(arr[i], i);
//     }
// }



// 🟪 Problem 6: Subarray with 0 Sum
// Determine whether a subarray with a sum of 0 exists in the given array.

// 📥 Input:  arr = [4, 2, -3, 1, 6]


// let sum = 0;
// let arr = [4, 2, -3, 1, 6];
// let map = new Map();
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     if (sum === 0) {
//         console.log(arr.slice(0, i + 1));
//         break;
//     }
//     if (map.has(sum)) {
//         const start = map.get(sum) + 1;
//         const end = i;
//         console.log(arr.slice(start, end + 1));
//         break;
//     }
//     map.set(sum, i);
// }



// Find all pairs with a given sum using hash table

let arr = [1, 5, 7, -1, 5];
let target = 6;
let map = new Map();

for (let num of arr) {
    const complement = target - num;
    if (map.has(complement)) {
        console.log(`${complement}, ${num}`);
    }
    map.set(num, (map.get(num) || 0) + 1)
}