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
let dieRoll = []
let show = document.querySelector("#olist")

function getRandom() {
    var randomdie = Math.floor((Math.random() * 6) + 1);
    return randomdie;
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


function total1() {
    let totals = 0;
    for (let i = 0; i < dieRoll.length; i++)
        totals += dieRoll[i];

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
    let o = dieRoll
    var array = dieRoll;
    var sum = dieRoll.reduce(function (a, b) {
        return a + b;
    }, 0);
    console.log(sum);
    let ftotal = sum
    //https://www.tutorialrepublic.com/faq/how-to-find-the-sum-of-an-array-of-numbers-in-javascript.php
    tot.innerHTML = Number(sum);
    showbutton.addEventListener("click", function () {

        let numrolled = o

        counter = 0
        i = 0
        let newval = []
        while (counter < o.length) {
            let p = o[i];
            newval.push(p)
            i++;
            counter++
        }
        console.log(newval);
        dieRoll = []


        show.innerHTML = "<ol><li>" + newval.join('</li><li>') + "</li></ol>";
        // let newDice = newval;
        //  show.innerHTML = '<li class="ol">' + newDice. + '</li>'
    })

}



    //   const newDice = '<li class="olist">' + numrolled[0] + '</li>' + '</br>' + '<li class="olist">' + numrolled[1] + '</li>' + '</br>' + '<li class="olist">' + + numrolled[2] + '</li>' + '</br>' + '<li class="olist">' + numrolled[3] + '</li>' + '</br>' + '<li class="olist">' + numrolled[4] + '</li>' + '</br>' + '<li class="olist">' + numrolled[5];
    //  (olist.innerHTML) = newDice
)






//showbutton.addEventListener("click", function () {

  //  let numrolled = o
   // console.log(o)



//})









   // counter = 0
   // while
    //showalldice.innerHtML
   // (counter < dieRoll.length) { var p=document./////createElement("p"); p.innerHTML=dieRoll[counter]; oderlist.appendChild(p);}
