"use strict";
function showMultiplicationTable(x) {
    for (var y = 1; y <= 10;y++) {
        var product = x * y;
        console.log(x + " x " + y + " = " + product);
    }
}

showMultiplicationTable(7);

for (var r = 1;r<=10;r++) {
    var rando = Math.floor(Math.random() * 181) + 20;
    var evenodd;
    var modulus = rando % 2;
    if (modulus === 0) {
        evenodd = "even"
    }
    else {
        evenodd = "odd"
    }
    console.log(rando + " is " + evenodd);
}

function numstring(x) {
    var turn = x;
    var strung = "";
    while (turn>0){
        strung = strung + x;
        turn--;
    }
    return strung;
}

for (var primero = 1; primero < 10; primero++) {
    console.log(numstring(primero));
}

for (var countdown = 100;countdown>0;countdown-=5) {
    console.log(countdown);
}