// Blocking and unbloxking means  how the code is geeting executed
// blocking genraly refers to the synchronous execution means waiting for a thing to get completed then other thing hsould start

// unblocking generealy refer to the Asynchronous execution means all the thing are executed without waiting for the the other opeartion to be completed;

// blocking - code

function hello() {
    console.log("statring the function");
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) {
        sum += i
    }
    console.log("result : ", sum);
    console.log("task complelted");

}
console.log("beffore starting the function")
hello()
console.log("after starting the function")




function myfunc() {
    console.log("starting the function");

    setInterval(() => {
        let sum = 0;
        for (let i = 0; i < 1000000000; i++) {
            sum += i
        }

        console.log("result : ", sum);
        console.log("task complelted");
    }, 0)

}

console.log("beffore starting the function")
myfunc()
console.log("after starting the function")