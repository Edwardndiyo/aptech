var FirstName = prompt('Enter your first name');
var SecondName = prompt('Enter your second name');
var Welcome = "Welcome to TEDSON'S ATM ";

alert (Welcome + FirstName + SecondName);



var ATMpin = prompt('What is your ATM pin?')
var UATMpin = 8642;
if (ATMpin != UATMpin ) {
     let greeting = "wrong pin! start over";
    alert (greeting)

} else {
     let greetings = "What would you like to do today?"
    alert (greetings)
}



// for(ATMpin = UATMpin;) {
    
// }


// var cars =prompt('input new arrays')
// var cars = ["volvo", "mercedes", "venza", "corolla"];

// cars.unshift()




// var balance = 100000.0 

// function get_balance () {
//     alert ('your currnt balance is: ' + balance);
//     atm()
// }

// function make_deposit (){
//     var deposit = parseFloat(prompt('how much would you like to deposit?'));
//     if (isNaN (deposit) || deposit ===) {
//         alert ('error : please enter a number!');
//         make_deposit();
//     } else{
//         balance += deposit;
//         get_balance();
//     }
// }
// function make_withdrawal(){
//     var withdrawal = parseFloat(prompt('how much would you like to withdraw?'));
//     if (isNaN(withdrawal) || withdrawal === ){
//         alert ('error : please enter a number!');
//         make_withdrawal()
//     } else {
//         balance -=withdrawal;
//         get_balance();
//     }
// }
// function error() {
//     alert ('error: accepted numbers are 1 through 4.');
//     atm();
// }

// var choice = parseInt(prompt('select a choice 1.)Balance 2.)Deposit 3.)withdrawal 4.)exit'))
// if (choice === 1){
//     get_balance();
// } else if (choice === 2){
//     make_deposit();
// } else if ( choice === 3) {
//     make_withdrawal();
// } else if (choice === 4){
//     exit();
// } else{
//     error(); 
// }

// atm ()



// db_pw = 8642 , us_pw =  8642;
// db_am = 200000, wd_am = 30000
// alert ("Please insert card");

// if( db_pw == us_pw)
// {
//     if ( db_am >= wd_am)
//     pd_pw = prompt('Enter card pin')
//     else alert("you have nsufficient balance");
//     if (wd_am >= db_am - 1000)
//     {
//         if (wd_am <=db_am)
//         alert("your balance reached the minimum deposit amount");
//     }
//     if (wd_am % 100 !=0)
//     {
//         if (wd_am <= db_am- 1000)
//         alert("Please enter amount in the times of 100")
//     }
// }
// else {
//     alert("your pin number is incorrect");
// }

