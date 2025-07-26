// in this we will find the even numbers in betwwen 1 to 20

let j = 20;
for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

console.log("/n")
// sum of the array
let arr = [1, 2, 3, 4, 5, 6];
let sum = 0;
for (let i of arr) {
    sum += i;
}
console.log(sum)


// count the vowels in the string

const vowel = 'aeiouAEIOU';
const str = "JAAYEEESSH";
let count = 0;
for (let char of str) {
    if (vowel.includes(char)) count++;
}

console.log(count)


// check the number is prime or not:

let k = 19;

for (let i = 2; i * i < k; i++) {
    if (k % i === 0) {
        console.log("it is no a prime number");
        break;
    }
}
console.log("it is a prime number")
