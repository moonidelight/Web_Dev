// Task 1 - Hello, obj
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// Task 2 - Check the emptiness
function isEmpty(obj){
    for (let key in obj){
        return false;
    }
    return true;
}

let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false

// Task 3 - Sum object properties
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}
alert(sum);

// Task 4 - Multiply numeric property values by 2
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof (obj[key]) === 'number') {
            obj[key] *= 2;
        }
    }
}
