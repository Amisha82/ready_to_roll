//const rollbutton = document.querySelector("#roll-button");

//const dieRolls = []
//let roll = document.querySelector("#num-of-dice");
//rollbutton.addEventListener("click"), function () {
let cube = document.querySelector("#cube")
let text = document.querySelector("#num-of-dice")
let rollbutton = document.querySelector("#roll-button")
let totalofall = document.querySelector("#total")
let showbutton = document.querySelector("#showalldice")
let oderlist = document.querySelector("ol")
let dieRoll = []
let show = document.querySelector("#olist")
let resetbutton = document.querySelector("#reset-button")
let red_imagebutton = document.querySelector("redimage")
let numofsides = document.querySelector("#num-of-side")
let enterside = document.querySelector("#side-button")

//  var img = document.getElementById("cube")
//ctx.drawImage(img, 5, 5);
//this.angle = 0
//};

function getRandom() {
    var randomdie = Math.floor((Math.random() * numofsides.value) + 1);
    return randomdie;
}

//function sum(dieRoll) {

//  return dieRoll[0] + dieRoll[1] + dieRoll[2] +
//    dieRoll[3] + dieRoll[4] + dieRoll[5]
//}


function total1() {
    let totals = 0;
    for (let i = 0; i < dieRoll.length; i++)
        totals += dieRoll[i];

}
enterside.addEventListener("click", function () {
    let last = numofsides.value
    console.log(last)
})
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
    var sum = dieRoll.reduce(function (a, b) {
        return a + b;
    }, 0);
    console.log(sum);
    tot.innerHTML = Number(sum);

})


//https://www.tutorialrepublic.com/faq/how-to-find-the-sum-of-an-array-of-numbers-in-javascript.php

showbutton.addEventListener("click", function () {

    let numrolled = dieRoll

    counter = 0
    i = 0
    let newval = []
    while (counter < dieRoll.length) {
        let p = dieRoll[i];
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



resetbutton.addEventListener("click", function () {
    tot.innerHTML = "";
    show.innerHTML = "";
    text.value = "";
    numofsides.value = "";


})


rollbutton.addEventListener("click", function () {
    var cube = document.getElementById('cube');

    var min = 1;
    var max = 24;

    rollbutton.onclick = function () {
        var xRand = getRandom(max, min);
        var yRand = getRandom(max, min);

        cube.style.webkitTransform = 'rotateX(' + xRand + 'deg) rotateY(' + yRand + 'deg)';
        cube.style.transform = 'rotateX(' + xRand + 'deg) rotateY(' + yRand + 'deg)';


        function getRandom(max, min) {
            return (Math.floor(Math.random() * (max - min)) + min) * 90;
        }

    }
})

