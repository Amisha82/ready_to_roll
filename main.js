//const rollbutton = document.querySelector("#roll-button");

//const dieRolls = []
//let roll = document.querySelector("#num-of-dice");
//rollbutton.addEventListener("click"), function () {
//  console.log("#num-of-dice")

//get the value of the input text box and ssignand each time "roll" randomly from 1-6
//
// loop that num of TimeRanges//


let text = document.querySelector("#num-of-dice")
let rollbutton = document.querySelector("#roll-button")
let totalofall = document.querySelector("#total")
let showbutton = document.querySelector("#showalldice")
let oderlist = document.querySelector("ol")
const dieRoll = []
let show = document.querySelector("#olist")

function getRandom() {
    var Randomdie = Math.floor((Math.random() * 6) + 1);
    return Randomdie;
}

function total() {
    let total = 0;
    for (let i = 0; i < ray.length; i++)
        total += ray[i];
    console.log(ray)
}



rollbutton.addEventListener("click", function () {
    console.log("roll the die")
    let x = text.value;
    console.log(x)
    let counter = 0

    while (counter < x) {
        var rand = getRandom();
        dieRoll.push(rand)

        counter += 1;

    }

    console.log(dieRoll)
    let ray = dieRoll
    //ray.total();
    //document.getElementById("#Rolls").innerHTML = showalldice
})

showbutton.addEventListener("click", function () {
    console.log("Show all die")

    counter = 0
    while
    //showalldice.innerHtML


})


