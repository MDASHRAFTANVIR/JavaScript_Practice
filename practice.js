// Solution 1 : Convert Inches to feet -------------------------------------------------------

function inchToFeet(enterValue){
    if(!Number.isInteger(enterValue)== true){
        return console.error("Please Enter in Number Format.");
    }
    let converterFeet = enterValue / 12;
    console.log("Converter inches to feet is: ", parseFloat(converterFeet.toFixed(3)));  
}
inchToFeet(320);


// Solution 2: Check a number is odd or even -------------------------------------------------------
function checkOddEven(passValue){
    if(!Number.isInteger(passValue)== true){
        return console.error("Please Enter in Number format.");
    }
    if(passValue % 2 == 1){
        console.log("You Entered an Odd Number.");
    }
    else{
        console.log("You Entered an Even Number.");
    }
}
checkOddEven(23);


// Solution 3: Check a year is leap year or not ------------------------------------------------------------------
function checkLeapYear(enterYear){
    if(!Number.isInteger(enterYear)== true){
        return console.error("Please Enter in Number Format.")
    }
    if(enterYear % 4 == 0 && enterYear % 100 != 0 || enterYear % 400 ==0){
        console.log(enterYear, " ", "is a Leap Year");
    }
    else{
        console.log(enterYear, " ", "is not a Leap Year");
    }
}
checkLeapYear(2023);


// Solution 4: Add all numbers from 1 to N ------------------------------------------------------------------
function numberN(enterNumber){
    if(!Number.isInteger(enterNumber)== true){
        return console.error("Please Enter in Number Format.");
    }
    var sum = 0;
    for(var i=1; i <= enterNumber; i++){
        sum = sum + i;
    }console.log("Total Sum from 1 to N is :", sum);
}
numberN(5);


// Solution 5: Add all Numbers in a array ------------------------------------------------------------------
function getArray(arrayElements){
    let sum = 0;
    for(let i=0; i < arrayElements.length; i++){
        let findSum = arrayElements[i];
        sum = sum + findSum;

    }return sum;
}
let mainArray = [12, 21, 24, 23, 43, 41, 51, 55, 59, 61, 71, 29];
let getResult = getArray(mainArray);
console.log("Total of all array is: ", getResult);

// Solution 6: Add odd numbers of an array ------------------------------------------------------------------

function oddArraySum(oddEntry){
    let oddGatherArray = [];
    for(let i=0; i<oddEntry.length; i++){
        let findingOdd = oddEntry[i];
        if(findingOdd % 2 == 1){
            oddGatherArray.push(findingOdd);
        }
    }return oddGatherArray;
}
let gettingOdd = oddArraySum(mainArray);
let gettingSum = getArray(gettingOdd);
console.log("Total of All odd Number is: ", gettingSum);


// Soluton 7: Find the factorial Value 

function factorialResult(factorValue){
    let sum = 1;
    for(let i=1; i<factorValue; i++){
        sum = sum * i;

    }console.log("The value of Factorial", factorValue, "is :", sum);
}
factorialResult(10);

// Solution 8 : Output the value from 1 to 10

let NumberDeclare = 1;
while(NumberDeclare <= 10){
    // console.log("Serial Number is: ", NumberDeclare);
    NumberDeclare++;
}


// Solution 9: Print All Odd Number From 50 to 70

for(let i=50; i<=70; i++){
    if(i % 2 == 1){
        // console.log("Serial Wise odd Number is: ", i);
    }
}

// Solution 10: A function which can add 3 numbers 

function threeValues(value1, value2, value3){
    let getResult = value1 + value2 + value3;
    console.log("Sum of 3 numbers is : ", getResult);
}
threeValues(23, 21, 25);

// Solution 11: Celcius to Fahrenheit 
function getFahrenheit(enterCelcius){
    let findFahrenheit = ( (1.8*enterCelcius) + 32 );
    console.log(enterCelcius, "degree celcius equals to ", findFahrenheit , "degree Fahrenheit.");
}
getFahrenheit(91);

// Solution 12: Fahrenheit to Celcius 
function getCelcius(enterFahrenheit){
    let findCelcius = ((enterFahrenheit - 32) * (5/9));
    console.log(enterFahrenheit, "degree Fahrenheit equals to ", parseFloat(findCelcius.toFixed(3)), "degree Celcius.");
}
getCelcius(109);

// Solution 13: Getting Grade 

function findGrade(enterMarks){
    switch(enterMarks){
        case enterMarks <= 50:
            console.log("Sorry, You didn't pass in this exam.");
            break;
        case enterMarks <= 60:
            console.log("Study Hrad. You get C.");
            break;
        case enterMarks <= 70:
            console.log("Not Bad. You get B+");
            break;
        case enterMarks <= 80:
            console.log("Good. You get A.");
            break;
        default:
            console.log("Congratulations! You get A+");
    }
}
findGrade(97);

// Solution 14 : Loss or Profit Measurement 

function lossOrProfit(sellPrice, costPrice){
    if(sellPrice > costPrice){
        let profit = sellPrice - costPrice;
        let getProfitPercentage = ((profit / costPrice) * 100);
        console.log("You able to earn a ", parseFloat(getProfitPercentage.toFixed(3)), "% profit from this sell");
    }
    else{
        let loss = costPrice - sellPrice;
        let getLossPercentage = ((loss / costPrice) * 100);
        console.log("Sorry! You loss", parseFloat(getLossPercentage.toFixed(3)), "% in this sell.");
    }
}
lossOrProfit(419, 312);

// Finding Square of  a number 
function squareOf(entry){
    let results = entry ** 2 ;
    console.log("Square of ", entry , "is :", results);
}
squareOf(3);

// Finding the cubes of a number 
function cubes(enterNumber){
    let result = enterNumber ** 3;
    console.log("Cube of ", enterNumber , "is :", result);
}
cubes(3);

// Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).
function sumPolygon(n) {
	let getResult = (n - 2) * 180;
	return getResult;
}
let finalResult = sumPolygon(6);
console.log(finalResult);

// Enter a number and 1 to N number will print in a array 
function printArray(number) {
    var newArray = [];
  
    for(var i = 1; i <= number; i++) {
      newArray.push(i);
    }
  
    return newArray;
  }

  let newArrayResult = printArray(12);
  console.log(newArrayResult);

//   Given an array of integers, return a new array with each value doubled.

//   For example:
  
//   [1, 2, 3] --> [2, 4, 6]

function maps(x){
    let newArr = [];
    for(let i=0; i < x.length; i++){
      newArr.push(x[i]*2);
    }return newArr;
  }

let testCode = maps([2, 3, 4]);
console.log(testCode);


// Is this 3 Line can make a triangle 
function isTriangle(a,b,c){
    let firstCase = a + b;
    let secondCase = a + c;
    let thirdCase = b + c;
    if(firstCase > c && secondCase > b && thirdCase > a){
      return true;
    }
    else {
      return false;
    }
     
  }

  let testing = isTriangle(5, 8, 11);
  console.log(testing);

//   Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(array) {
    // your code here
  if(array.length === 0){
    return 0;
  }
    let sum = 0;
    let getL = array.length;
    for(let i=0; i<getL; i++){
      let fnd = array[i];
      sum = sum + fnd;
      averagem = sum / getL;
      
    }return averagem;
    
    
    
  }

//   Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

//   You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
function litres(time) {
    if(time === 0){
      return 0;
    }
    let drinkWater = Math.floor(time * 0.5);
    return drinkWater;
    
  }

  // Enter a integer and if first letter start with R or r then return name with plays banjo and in term of false return name with does not plays banjo. 
function areYouPlayingBanjo(name) {
    // Implement me
    if(name.charAt(0) === "R"){
      return name + " plays banjo";
    }
    else if(name.charAt(0) === "r"){
    return name + " plays banjo";
    }
    else{
      return name + " does not play banjo";
    }
    
  }

  let codeRun = areYouPlayingBanjo("adam");
  console.log(codeRun);