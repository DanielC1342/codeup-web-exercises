var wile = 2;
while (wile < 70000) {
    console.log(wile);
    wile = wile * 2;
}

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;

do {
    var customers = Math.floor(Math.random() * 5) + 1;
    if (customers > allCones) {
        console.log("I cannot sell you " + customers + " cones, I only have " + allCones);
        break;
    }
    else if (allCones = 0) {
        console.log("I sold all the cones!");
        break;
    }
    else {
        console.log("sold " + customers + " cones");
    }
    allCones = allCones - customers;
} while(allCones < 0);