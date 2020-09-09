/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)





const votingAge = 19;

if (votingAge >= 18) {
    console.log(true);
} else {
    console.log(false);
}






//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)


let car = "lambo";
let isCool = "Yes!";

if (isCool === "Yes!") {
    car = "Awesome!";
} else {
    car = "not awesome"
}

console.log(car)



//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method


const integer = Number("1999");
console.log(integer);


//Task d: Write a function to multiply a*b 


function multiply1(a,b){
    return a * b
}
console.log(multiply1(5,25))







/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 



function multiply2(a,b){
    return a * 7
}
console.log(multiply2(19))



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  

function dogfood(age, weight){
    if (age >= 12 && weight <=5){
        return 0.05 * weight;
    }
    else if (age >=12 && weight <=10){
        return 0.04 * weight;
    }
    else if (age >=12 && weight <=15){
        return 0.03 * weight;
    }
    else if (age >=12 && weight >15){
        return 0.02 * weight;
    }
    else if (age <=12 && age >=7){
        return weight * 0.04 ;
    }
    else if (age <7 && age >=4){
        return weight * 0.05;
    }
    else if (age <4 && age >=2){
        return weight * 0.1;
    }
}
console.log(dogfood(3, 15))






/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

// array holds your strings "rock paper scissors"

let play=["rock", "paper", "scissors"];
let random=Math.floor(Math.random() * play.length);
let computer=play[random];

console.log(computer);

function choice(game){
    if (game==="rock" && computer==="scissors"){
    return "you won"
    }
    else if (game==="rock" && computer==="paper"){
    return "you lost"
    }
    else if (game===computer){
    return "you tied"
    }
    else if (game==="paper" && computer==="rock"){
    return "you won"
    }
    else if (game==="paper" && computer==="scissors"){
    return "you lost"
    }
    else if (game==="scissors" && computer==="rock"){
    return "you lost"
    }
    else if (game==="scissors" && computer==="paper"){
    return "you won"
    }
}

console.log(choice("rock"))



/************************************************************** Task 5 **********************
 * ****************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

const Km2Miles = distance => distance * 0.621371 
console.log(Km2Miles(2))




//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
const feet2Cm = distance => distance * 30.48
console.log(feet2Cm(5))



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
// i = starting number always
function annoyingSong(bottles){

    for (let i = bottles; i >= 1; i--) {
        console.log(`${i} bottles of soda on the wall, ${i} bottles of soda, take one down pass it around ${i-1} bottles of soda on the wall`);
    }

}

annoyingSong(5)

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
function grades(percent) {
    if ( percent <= 100 && percent >= 90) {
    return "A"
    }
    else if ( percent < 90 && percent >= 80){
    return "B"
    }
    else if ( percent < 80 && percent >= 70){
    return "C"
    }
    else if ( percent < 70 && percent >= 60){
    return "D"
    }
    else if ( percent < 60 && percent >= 0){
    return "F"
    }
} 
  console.log(grades(43))




  
/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object



