"use strict";
var number = prompt("Give me an odd number between 1 and 50");
for (var iter = 1;iter<50;iter++) {
    if (iter == number) {
        console.log("yikes! skipping the number " + number);
        continue;
    }
    if (iter % 2 != 0) {
        console.log("Here is an odd number: " + iter);
    }
}