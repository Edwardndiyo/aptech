// var text = 'hello world';
// console.log(text.length);


// var Text = "hi world";
// console.log(Text.toUpperCase());

// var TExt = 'HELLO WORLD';
// console.log(TExt.toLowerCase());

// var str = "Apple, Banana, Kiwi";
// var res = str.slice(7,13);
// console.log(res);

// let string = 'edward ';
// let thisText = ' welcome'
// let string2 = ' ndiyo';
// let concatenate = thisText + string2.concat(string)
// // let concatenate = string.concat(string2);
// console.log(concatenate);

// let age = 40;
// if (age < 40 ) {
//     greeting = "a youth";}
//     else if ( age > 40) {
//         greeting = "an old man"; 
//     } else {
//         greeting= "a child"
//     }


let maggi = 50;
if (maggi != 50) {
    greeting = "dont buy";
    console.log (greeting)
} else 
    greeting = "buy"
    console.log (greeting)

// return "fjfyufy";
 
// var userName = prompt("Enter your name:") ;
// alert("your name is") + userName;

// function StopWatch(){
//     let startTime, endTime, running, duration = 0;

//     this.start = function() {
//         if (running)
//         throw new Error('stopwatch has already started.')

//         running = true;

//         startTime = new Date();
//     };
//     this.stop = function() {
//         if (!running)
//         throw new Error('stopWatch is not running');

//         running = false;

//         endTime = new Date();

//         const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
//         duration += seconds;
//     };
//     this.reset = function() {
//         startTime = null;
//         endTime = null;
//         running = false;
//         duration = 0; 
//     };
//     Object.defineProperty(this, 'duration', {
//         get: function(){ return duration;}
//     })
// }