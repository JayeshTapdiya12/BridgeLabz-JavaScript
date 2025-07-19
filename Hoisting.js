// Hoisting in javascript

// it is a mechanism in which the variable and fucntion declaration move at the top of the scope during the compilation, before the code is executed

console.log(x);
var x = 6; console.log(x)

no()

function no() {
    console.log("object")
}
no()