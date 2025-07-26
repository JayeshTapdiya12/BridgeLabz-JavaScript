//  in the we will reverse the number;


const reverse1 = (num) => {
    return parseInt(num.toString().split('').reverse().join(''));
}
console.log(reverse1(12345))