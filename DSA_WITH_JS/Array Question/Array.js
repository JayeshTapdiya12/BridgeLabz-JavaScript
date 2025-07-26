// You're given an array of integers and a target sum.
// Your task is to find any two distinct elements in the array whose sum is equal to the target.

// Input: arr = [2, 7, 11, 15], target = 9
// Output: [2, 7]  // because 2 + 7 = 9


// let arr = [2, 7, 11, 15];;
//     let ans = [];
// let target = 9

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === target) {
//                 ans.push(arr[i]);
//                 ans.push(arr[j]);

//             }
//         }
//     }

//     for (let val of ans) {
//         console.log(val);
// }


// let seen = new Map();
// for (let i = 0; i < arr.length; i++) {
//     let value = target - arr[i];
//     if (seen.has(value)) {
//         console.log([value, arr[i]]);
//     }
//     seen.set(arr[i], i);
// }
// console.log(seen)


// ******************** QUESTION 2 *********************************
// ❓ Problem Statement
// You're given an array of integers.
// Your task is to find and return the largest element in the array.



// let arr = [12, 45, 2, 67, 33]
// let largest = Number.MIN_VALUE;
// for (let val of arr) {
//     if (val > largest) {
//         largest = val;
//     }
// }
// console.log(largest)


// ****************** Question 3 *******************
//  Rotate Array by k times

// let arr = [1, 2, 3, 4, 5];
// let k = 3;
// let arr2 = [];

// for (let i = 0; i < arr.length; i++) {
//     arr2[i] = arr[i];
// }


// // let f = arr[0];
// // arr.shift();
// // arr.push(f);
// // console.log(arr)


// let f = arr.slice(0, k);
// let rest = arr.slice(k);
// let res = rest.concat(f);

// console.log(res)





// new approach

// function reverse(arr, start, end) {
//     while (start < end) {
//         let temp = arr[start];
//         arr[start] = arr[end];
//         arr[end] = temp
//         start++;
//         end--;

//     }
// }

// function krotation(arr, k) {
//     let n = arr.length;
//     k = k % n;

//     reverse(arr, 0, k - 1);
//     reverse(arr, k, arr.length - 1);
//     reverse(arr, 0, arr.length - 1)
// }

// let arr = [1, 2, 3, 4, 5];
// let k = 3;
// krotation(arr, k)
// console.log(arr)

// ******************* QUESTION 4*****************

// ❓ Problem Statement
// You're given an array of integers and a number x.
// Your task is to count how many elements in the array are strictly greater than x.


// let arr = [1, 5, 7, 2, 10]
// let x = 5;
// let count = 0;

// for (let val of arr) {
//     if (val > x) count++;
// }
// console.log(count)

// let f = arr.sort((a, b) => a - b);
// console.log(f)



// ****************** QUESTION 5******************

// ❓ Problem Statement
// You're given an array of integers.
// Your task is to reverse the array in-place, meaning the first element becomes the last, the second becomes the second-last,
// and so on — without using extra arrays.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let s = 0;
// let e = arr.length - 1;
// while (s <= e) {
//     let temp = arr[s];
//     arr[s] = arr[e];
//     arr[e] = temp;
//     s++;
//     e--;
// }
// console.log(arr)

// arr.reverse();
// console.log(arr)


// *********************** Question 6 ***********************

//  Problem Statement
// You're given an array and two indices: start and end.
// Your task is to reverse the portion of the array between those indices (inclusive).

// let s = 2;
// let e = 5;
// let arr = [1, 2, 3, 4, 5, 6, 7];

// while (s < e) {
//     let temp = arr[s];
//     arr[s] = arr[e];
//     arr[e] = temp;
//     s++;
//     e--;
// }
// console.log(arr)



// ******************* Question 7***********

// Find the maximum product of two integers in an array.


// let arr = [1, 5, 7, 2, 10]
// let mul = 0;

// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] * arr[j] > mul) {
//             mul = arr[i] * arr[j];
//         }
//     }
// }

// console.log(mul)


// ***************** Question 8 *********

// ❓ Problem Statement
// You're given an array of integers.
// Your task is to find the second largest element in the array without using built-in sort.


// let arr = [10, 5, 20, 8];

// let max1 = -Infinity;
// let max2 = -Infinity;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max1) {
//         max2 = max1;
//         max1 = arr[i];
//     } else if (arr[i] > max2 && arr[i] !== max1) {
//         max2 = arr[i]
//     }
// }
// console.log(max2)


// ************************ Question 9 ***************

// You're given an array of integers.
// Your task is to check whether the array is sorted in non-decreasing order.



// let bol = false;
// let arr = [1, 2, 9, 4, 5];
// for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] > arr[i + 1]) {
//         bol = true;
//         break;
//     }
// }
// if (bol) {
//     console.log("not sorted")
// } else {
//     console.log("sorted")
// }


// ************************ Question 10 ****************
// Check if a given array has duplicates.

// let arr = [1, 2, 9, 2, 4, 5];
// let bool = false;
// arr.sort((a, b) => a - b);
// for (let i = 0; i < arr.length-1; i++){
//     if (arr[i] == arr[i + 1]) {
//         bool = true;
//     }
// }
// if (bool) {
//     console.log("the duplicates present");
// } else {
//     console.log("no duplicates present");
// }

// let seen = new Map()
// let bool = false;
// for (let val of arr) {
//     if (seen.has(val)) {
//         bool = true;
//         break;
//     }
//     seen.set(val);
// }
// if (bool) {
//     console.log("the duplicates present");
// } else {
//     console.log("no duplicates present");
// }

// let hasDupli = new Set(arr).size !== arr.length;
// if (hasDupli) {
//     console.log("duplicates presnet")
// } else {
//     console.log("dupli not present")
// }


// ***************** question 11**********************
// Move all zeroes to the end without changing the order of non-zero elements.


// let arr = [1, 0, 2, 0, 3, 0, 4];


// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//         let temp = arr.splice(i, 1);
//         arr.push(temp);
//     }
// }
// console.log(arr.flat())





// **************** QUESTION 12 ****************************
// Merge two sorted arrays into one sorted array.


// let arr1 = [1, 3, 5, 7, 9];
// let arr2 = [0, 2, 4, 6, 8];
// let a = 0;
// let b = 0;
// let arr3 = []
// while (a < arr1.length && b < arr2.length) {
//     if (arr1[a] < arr2[b]) {
//         arr3.push(arr1[a]);
//         a++;
//     } else {
//         arr3.push(arr2[b]);
//         b++
//     }
// }

// while (a < arr1.length) {
//     arr3.push(arr1[a]);
//     a++;
// }
// while (b < arr2.length) {
//     arr3.push(arr2[b]);
//     b++
// }
// console.log(arr3)


//  ***************** Question 13 ************************

// You're given a sorted array of integers.
// Your task is to remove the duplicates in-place such that each element appears only once and return the new length of the array.


// let arr = [1, 2, 9, 2, 4, 5];

// let set = new Set(arr);
// console.log(set.size);


// arr.sort((a, b) => a - b);
// for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] === arr[i + 1]) {
//         arr.splice(i, 1);
//         i--;
//     }
// }
// console.log(arr)


// ********************* Question 14 **********************
// You're given an array of size n containing distinct integers from 1 to n+1.
// Exactly one number is missing. Find that number.

// let n = 7;
// let arr = [1, 3, 4, 5, 6, 7];
// let sum = 0;
// for (let val of arr) {
//     sum += val;
// }
// let sum2 = 0;
// for (let i = 1; i <= n; i++) {
//     sum2 += i;
// }

// console.log(`the number  missing in range 1 to ${n} is ${sum2 - sum}`);



