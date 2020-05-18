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

//function total() {
//  let total = 0;
//for (let i = 0; i < ray.length; i++)
//  total += ray[i];
//console.log(ray)}
function sum(dieRoll) {
    return dieRoll[0] + dieRoll[1] + dieRoll[2] +
        dieRoll[3] + dieRoll[4] + dieRoll[5]
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

    console.log(dieRoll);
    var array = dieRoll;
    var sum = dieRoll.reduce(function (a, b) {
        return a + b;
    }, 0);
    console.log(sum);
    let ftotal = sum
    //https://www.tutorialrepublic.com/faq/how-to-find-the-sum-of-an-array-of-numbers-in-javascript.php
    tot.innerHTML = Number(sum)


})

//showbutton.addEventListener("click", function () {
  //  console.log("Show all die")

   // counter = 0
   // while
    //showalldice.innerHtML
   // (counter < dieRoll.length) { var p=document./////createElement("p"); p.innerHTML=dieRoll[counter]; oderlist.appendChild(p); }




