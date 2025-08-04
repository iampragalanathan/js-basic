// ============Task 1===============

let person={name:"Pragalanathan",age:"22",country:"India"}
function logdata(){

    console.log(person.name, "is",person.age, "years old and lives in",person.country)
}
logdata()


// ===========Task 2===============

let age=68

if(age < 6){

    console.log("free")
}
else if( age <18){

    console.log(" child discount")
}
else if (age < 27){

    console.log("student discount")
}
else if (age < 67){

    console.log("full price")
}
else{

    console.log(" senior citizen discount")
}


// =============Task 3======================

let largeCountries = ["China","India","USA","Indonesia","Pakistan"]
console.log("The 5 largest countries in the world:")

for(let i=0; i < largeCountries.length; i++){

    console.log( "-"+largeCountries[i] )
}


// =============Task 4=======================

 largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

largeCountries.pop()
console.log(largeCountries)
largeCountries.push("Pakistan")
console.log(largeCountries)
largeCountries.shift()
console.log(largeCountries)
largeCountries.unshift("China")
console.log(largeCountries)

// ==============Task 5 ==================

let dayOfMonth = 13
let weekday = "Friday"

if( dayOfMonth === 13 && weekday === "Friday"){

    console.log("😱")
}


// ==============Task 6 =================


let hands = ["rock", "paper", "scissor"]
function gameOn(){
    
   let randomNum=Math.floor(Math.random()*3)
    console.log(hands[randomNum])
}
gameOn()


// =============== Task 7==============

let fighters = ["🐉", "🐥", "🐊", "💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷", "🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    let fighter1 = fighters[Math.floor(Math.random() * fighters.length)]
    let fighter2 = fighters[Math.floor(Math.random() * fighters.length)]

    stageEl.textContent = `${fighter1} vs ${fighter2}`
})


// =============== Task 8==============

let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

function sortFruits() {
    for (let i = 0; i < fruit.length; i++) {
        if (fruit[i] === "🍎") {
            appleShelf.textContent += "🍎"
        } else if (fruit[i] === "🍊") {
            orangeShelf.textContent += "🍊"
        }
    }
}


sortFruits()

// ===============Task 9================

let dogbtn = document.getElementById("dogbtn")
let catbtn = document.getElementById("catbtn")
let tigerbtn = document.getElementById("tigerbtn")
let imgplace = document.getElementById("picture")

dogbtn.addEventListener("click", function() {
   imgplace.innerHTML = `<img src="/images/dog.jpg" alt="" style="width: 250px;"></img>`
})

catbtn.addEventListener("click", function() {
   imgplace.innerHTML = `<img src="/images/cat.jpeg" alt="" style="width: 250px;"></img>`
})

tigerbtn.addEventListener("click", function() {
   imgplace.innerHTML = `<img src="/images/tiger.jpeg" alt="" style="width: 250px;"></img>`
})
