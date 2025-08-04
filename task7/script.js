let fighters = ["🐉", "🐥", "🐊", "💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷", "🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    let fighter1 = fighters[Math.floor(Math.random() * fighters.length)]
    let fighter2 = fighters[Math.floor(Math.random() * fighters.length)]

    stageEl.textContent = `${fighter1} vs ${fighter2}`
})
