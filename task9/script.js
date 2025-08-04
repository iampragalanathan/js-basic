let dogbtn = document.getElementById("dogbtn")
let catbtn = document.getElementById("catbtn")
let tigerbtn = document.getElementById("tigerbtn")
let imgplace = document.getElementById("picture")

dogbtn.addEventListener("click", function() {
   imgplace.innerHTML = `<img src="/task9/dog.jpg" alt="" style="width: 250px;"></img>`
})

catbtn.addEventListener("click", function() {
   imgplace.innerHTML = `<img src="/task9/cat.jpeg" alt="" style="width: 250px;"></img>`
})

tigerbtn.addEventListener("click", function() {
   imgplace.innerHTML = `<img src="/task9/tiger.jpeg" alt="" style="width: 250px;"></img>`
})
