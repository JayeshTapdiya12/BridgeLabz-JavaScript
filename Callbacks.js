// Callbacks ->
// callback is a function which is passed as an agrument to a function . and when can be used later for asychronously


// or we can say that function calling the function

// we use this when one function is waiting for another function result





function hello(name, callback) {
    console.log("hello " + name);
    callback();
}

// this is a function 
function bye() {
    console.log("goodbye!!")
}

// which is passed as an argument to the function


hello("jayesh", bye)