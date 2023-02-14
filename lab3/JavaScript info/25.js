// task 1
let a = +prompt('1 number');
let b = +prompt('2 number');
alert(a + b);
// task 2
alert(Math.round(6.35 * 10)/10);
// task 3
function readNumber () {
    let n;
    do {
        n = prompt('Enter a number', 0);
    } while (!isFinite(n));

    if (num === null || num === '') return null;

    return +num;
}
alert(`Read: ${readNumber(n)}`);
// task 4
let i = 0;
while (i != 10) {
    i += 0.2;
} // That’s because i would never equal 10.

// task 5
function random (min, max){
    return min + Math.random() * (max - min);
}

// task 6
function randomInteger (min, max){
    return min + Math.random().toFixed(1) * 10 * (max - min);
}