// es features:

// promies:

let work = true;
const newProm = new Promise((resolve, reject) => {
    if (work) {
        resolve("result");
    } else {
        reject("error");
    }

})
newProm.then(result => console.log("success " + result))
    .catch(error => console.log("error " + error))



//     JavaScript Exponentiation (**)
const x = 2 ** 5;
console.log(x)

// JavaScript Exponentiation assignment (**=)
let y = 5;
y **= 2;
console.log(y)
// JavaScript Array includes() - it check that particular thing ibs in array or not

const fruits = ["Banana", "Orange", "Apple", "Mango"];


console.log(fruits.includes("mango"))

