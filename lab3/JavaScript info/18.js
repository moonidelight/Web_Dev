// Task 1
/*
function makeUser() {
    return {
        name: "John",
        ref: this
    };
}

let user = makeUser();

alert( user.ref.name ); // TypeError: Cannot read properties of undefined (reading 'name')

*/

function makeUser() {
    return {
        name: "John",
        ref() {
            return this;
        }
    };
}
let user = makeUser();

alert( user.ref().name ); // John

