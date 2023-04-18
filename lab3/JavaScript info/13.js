// Task 1
//Will the function work differently if else is removed?

    function checkAge(age) {
        if (age > 18) {
            return true;
        }
        // else {...
        return confirm('Did parents allow you?');
        // }
    }
    // Ans: No

// Task 2
// Rewrite the function checkAge using ? or ||


    // using ?
    function check_age(age){
        return (age>18) ? true: confirm('Did parents allow you?');
    }
    // using ||
    function checkage(age){
        return (age>18) || confirm('Did parents allow you?');
    }

// Task 3
function min(a,b){
    return (a > b) ? b : a;
}

// Task 5
function Pow(a,b){
    return a**b;
}
// or
function pow(x, n) {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
    alert(`Power ${n} is not supported, use a positive integer`);
} else {
    alert( pow(x, n) );
}