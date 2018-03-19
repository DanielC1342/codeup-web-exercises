"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */
function evenOdd(x) {
    if (x%2 === 0) {
        console.log("Number is even");
    }

    else {
        console.log("Number is Odd");
    }
}

function plus100(x) {
    var hunned = Number(x) + 100;
    console.log("Number plus 100 is " + hunned);
}

function posNeg(x) {
    if (x < 0) {
        console.log("The number is Negative");
    }

    else if (x > 0) {
        console.log("The number is Positive");
    }

    else {
        console.log("The number is 0");
    }
}

var doThis = confirm("Do you want to give me a number?");
if (doThis) {
    var num = prompt("Then hit me with it!");
    var numcheck = isNaN(num);
    if (numcheck) {
        console.log("Thats not a number!")
    }

    else {
        evenOdd(num);
        plus100(num);
        posNeg(num);
    }
}

else {
    console.log("well, okay sure...")
}
/* ########################################################################## */

// noinspection JSAnnotator
/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
function analyzeColor(subject) {
    switch(subject) {
        case "red":
            console.log(subject + " is the color of Strawberries");
            break;
        case "orange":
            console.log(subject + " is the color of Oranges");
            break;
        case "yellow":
            console.log(subject + " is the color of the Sun");
            break;
        case "green":
            console.log(subject + " is the color of Grass");
            break;
        case "blue":
            console.log(subject + " is the color of the Ocean");
            break;
        case "indigo":
            console.log(subject + " is my favorite color!");
            break;
        case "violet":
            console.log(subject + " is the color of Violets");
            break;
        default:
            console.log("I don't know anything about " + subject);
    }
}
// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */
analyzeColor(randomColor);
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
var colorPrompt = prompt("Pick a color! (lowercase please)");
analyzeColor(colorPrompt);
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal (x,y) {
    var discount;
    var total;
    switch (x) {
        case 0:
            console.log("Because your lucky number is " + x + " you don't get a discount, sorry...");
            break;
        case 1:
            discount = .1;
            total = y - (discount * y);
            console.log("Because your lucky number is " + x + " you get a discount of 10%! Meaning your total is $" + total + "!");
            break;
        case 2:
            discount = .25;
            total = y - (discount * y);
            console.log("Because your lucky number is " + x + " you get a discount of 25%! Meaning your total is $" + total + "!");
            break;
        case 3:
            discount = .35;
            total = y - (discount * y);
            console.log("Because your lucky number is " + x + " you get a discount of 35%! Meaning your total is $" + total + "!");
            break;
        case 4:
            discount = .5;
            total = y - (discount * y);
            console.log("Because your lucky number is " + x + " you get a discount of 50%! Meaning your total is $" + total + "!");
            break;
        case 5:
            discount = 0;
            total = discount * y;
            console.log("Because your lucky number is " + x + " your purchase is FREE! Meaning your total is $" + total + "!");
            break;
        case 6:
            console.log("6 is not a viable luck number, please consult a cashier");
            break;
    }
}
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
var totalbill = prompt("what is your total bill?");
calculateTotal(luckyNumber,totalbill);