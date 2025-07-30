// ============Task 1===============

// let person={name:"Pragalanathan",age:"22",country:"India"}
// function logdata(){

//     console.log(person.name, "is",person.age, "years old and lives in",person.country)
// }
// logdata()


// ===========Task 2===============

// let age=68

// if(age <= 6){

//     console.log("free")
// }
// else if( age <=17){

//     console.log(" child discount")
// }
// else if (age <= 26){

//     console.log("student discount")
// }
// else if (age <= 66){

//     console.log("full price")
// }
// else{

//     console.log(" senior citizen discount")
// }


// =============Task 3======================

// let largeCountries = ["China","India","USA","Indonesia","Pakistan"]
// console.log("The 5 largest countries in the world:")

// for(i=0; i < largeCountries.length; i++){

//     console.log( "-"+largeCountries[i] )
// }


// =============Task 4=======================

// let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

// largeCountries.pop()
// console.log(largeCountries)
// largeCountries.push("Pakistan")
// console.log(largeCountries)
// largeCountries.shift()
// console.log(largeCountries)
// largeCountries.unshift("China")
// console.log(largeCountries)

// ==============Task 5 ==================

// let dayOfMonth = 13
// let weekday = "Friday"

// if( dayOfMonth === 13 && weekday === "Friday"){

//     console.log("😱")
// }


// ==============Task 6 =================



function gameOn(){
    
    let hands = ["rock", "paper", "scissor"]
    let randomNum=Math.floor(Math.random()*3)
    let 
    
    if( randomNum=1){
        return "rock"
    }
    else if(randomNum=2){
       return "paper"
    }
    else{
        return "scissor"
    }
    console.log(randomNum)
}



// function helper(){
//     let age=40
//     if (age<30){
//         return"you are eligible to write exam"
//     }
//     else{
//         return"you are not eligible to write exam"
//     }
// }
// let messageFromFn=helper()
// console.log(messageFromFn)

// let a=3
// let b=6
// function mult(){
//     return a*b
// }

// let finalResult=mult()
// console.log(finalResult)

// let randomNumber=Math.floor(Math.random()*6)
// console.log(randomNumber)

// function rollDice(){
//     let randomDiceNumber=Math.floor(Math.random()*6)+1
    
//     return randomDiceNumber
    // if(randomDiceNumber===1){
    //     return"hey 1 is the randomnumber"
    // }
    // else if(randomDiceNumber===2){
    //      return "hey 2"
    // }
    // else{
    //     return "three"
    // }
    
// }
// console.log(rollDice())