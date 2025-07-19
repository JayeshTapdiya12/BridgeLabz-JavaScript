// Scoping. in js

// there are 4 type of scope :
// 1 -> Global Scope
// 2 -> function scope
// 3 -> function Scope
// 4->lexical scope

// global scope-> any variable outside the fuctiono or block is called global scope .
// varibal is accessible to anywhere in js

var a = 6
function sum() {
    sum = a + 4;
    console.log(a)
}
sum();


// block scope: the let and const are introduced in es6 . this variable are not able to acces outside the particular block of code liek if else block

function hello() {
    const name = "jayesh";
    console.log(name);

} hello();
// console.log(name);



// function scope the varbile which are declared in the function . they can be only use in the function only cannot used outside the function;

function scope() {
    var c = 7;
    console.log(c);
} scope()
console.log(c)


// lexical scope: it is the ability of an inner functionn ton acces the variable of the outside/ parent function

function hi() {
    var b = 7;
    function hii() {
        console.log(b);
    } hii()
} hi()