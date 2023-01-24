// Make a function called patient2
// Make a private object variable called pii inside the function
// Create private properties by making functions called getName() and getSSN()


const patient2 = function () {
    let pii = {
        firstName: 'John',
        ssn: '123-45-6789' 
    }

    return {
        firstName: pii.firstName,
        getName() {
            return pii.firstName;
        },
        getSSN() {
            return pii.ssn;
        }
    }
}(); // calling the function with ()
console.log(patient2);

console.log(patient2.ssn); // output undefined
console.log(patient2.firstName); // output undefined
console.log(patient2.getName());
console.log(patient2.getSSN());