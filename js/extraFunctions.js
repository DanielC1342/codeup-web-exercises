function identity(x) {
    return x;
}

console.log(identity(1));
console.log(identity(2));
console.log(identity(3));

function isEven(y) {
    var modulus = y % 2;

    return (modulus === 0);
}

console.log(isEven(1));
console.log(isEven(2));
console.log(isEven(3));

function isOdd(z) {
    var modulus = z % 2;

    return (modulus !== 0);
}

console.log(isOdd(1));
console.log(isOdd(2));
console.log(isOdd(3));

function isPositive(a) {
    return (a > 0);
}

console.log(isPositive(1));
console.log(isPositive(2));
console.log(isPositive(3));

function decrement(b) {
    return --b;
}

console.log(decrement(1));
console.log(decrement(2));
console.log(decrement(3));

function hasSpaces(c) {
   return (c.indexOf(" ") !== -1);
}

console.log(hasSpaces("blehblah"));
console.log(hasSpaces("bloohgag"));
console.log(hasSpaces("wham bam"));

function isFive(d) {
    return (d === 5);
}

console.log(isFive(4));
console.log(isFive(5));
console.log(isFive(6));

function square(e) {
    return Math.pow(e,e);
}

console.log(square(1));
console.log(square(2));
console.log(square(3));

function cube(f) {
    var expo = Math.pow(f,f);
    return Math.pow(f,expo);
}

console.log(cube(1));
console.log(cube(2));
console.log(cube(3));

function half(g) {
    return (g/2);
}

console.log(half(4));
console.log(half(6));
console.log(half(8));

function double(h) {
    return (h*2);
}

console.log(double(1));
console.log(double(2));
console.log(double(3));

function isValidPassword(password, username) {
    return (password.length > 5 && password.indexOf(username) === -1 && password.length < 20 && password.indexOf(" ") === -1 && password.indexOf(" ") === -1);
}
console.log(isValidPassword("swordfish","rockarolla"));

function isRightTriangle(sin,cos,tan) {
    return (Math.pow(sin,2) + Math.pow(cos,2) === Math.pow(tan,2));
}

console.log(isRightTriangle(3,4,5));