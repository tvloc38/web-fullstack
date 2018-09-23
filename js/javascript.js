// aFunction("Stefan!")

// function aFunction(a) {
//     console.log("Hello World " + a)
// }

// var bFunction = function(name, printName) {    
//     printName(name)
// }

// bFunction("Stefan", aFunction)
//callBack 
// goi function trong function, function as a parameter
 

// function add5(getNumber, p) {
//     var num =  getNumber() + 5
//     p(num)
// }

// function randomNumber() {
//     return Math.floor(Math.random()*1000)
// }

// function printNumber(num) {
//     console.log(num)
// }

// add5(randomNumber,printNumber)



// bFunction()

// var cFunction = () => {
//     console.log("Hello Arrow!") // arrow function
// }



// var a = 10;
// function abc() {
//     var b = 15;
    
//     console.log(a);
//     console.log(b);
// }

// abc();

// console.log(a);
// console.log(b);

// function printNum(num, waitTime) {
//     setTimeout(function() {
//         console.log(num);
//     }, waitTime*1000);
// }


// function countDown(num) {
//     for(var i = num; i> 0; i--) {
//         printNum(i, num - i);
//     }
// }

function countDown(num) {
    for(let i = num; i >= 0; i--) {
        setTimeout(function() {
            console.log(i);
        }, (num - i)*1000)
    }
}

countDown(5);


















































































