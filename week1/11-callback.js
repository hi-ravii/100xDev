function sum(num1, num2, callbackFun) {
    let result = num1 + num2;
    callbackFun(result);
}
function display(data) {
    console.log("Answer = " + data)
}
const ans = sum(1, 2, display);

//callback function -calling a function which was used in another function by passing function as a argument

// order of line excution : 1-5-8-2-3-6

// A callback function is a function passed into another function as an argument which is then invoked inside the outer function to complete some kind of task.
// Function can take other functions as inputs. A gist of code shared in the live session to

function sum(num1, num2) {
    let result = num1 + num2;
    return result;
}

function displayResult(data) {
    console.log("result of the sum is: ", data);
}

function displayResultPassive(data) {
    console.log("Sum's Result is:- ", data);
}

// - You are only allowed to call one function after this
// - How will you display Result of a sum?

const ans1 = sum(1, 2);




// To do this we will send another argument to a function. So, sum becomes:-

function sum(num1, num2, fnToCall) {
    let result = num1 + num2;
    return fnToCall(result);
}

function displayResult(data) {
    return `result of the sum is: ${data}`;
}

function displayResultPassive(data) {
    return `Sum's Result is: ${data}`;
}

const ans2 = sum(1, 2, displayResult);
console.log(ans2);



// Another Example to understand callback function is:-

function calculateArithmetic(a, b, type) {
    if (type = "sum") {
        return a + b;
    }
    if (type = "minus") {
        return a - b;
    }
}
const value1 = calculateArithmetic(1, 2, "minus");
console.log(value1);



// which can be written as a separate sum and subtraction function as:-
function calculateArithmetic(a, b, type) {
    if (type = "sum") {
        const value = sum(a, b);
        return value;
    }
    if (type = "minus") {
        const value = sub(a, b);
        return value;
    }
}
function sum(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b
}
const value2 = calculateArithmetic(1, 2, sum);
console.log(value2);




// Now change this thing a little bit and change the type of the calculateArithmetic as we pass the function to the argument
function calculateArithmetic(a, b, arithmeticFinalFunction) {
    const ans = arithmeticFinalFunction(a, b);
    return ans;
};
function sum(a, b) {
    return a + b;
};
function sub(a, b) {
    return a - b
};

const value = calculateArithmetic(1, 2, sum);
console.log(value);


// he above three shared functions help us to explain what are callback functions. How they are helpful and helps makes our code more modular. All these changes help achieve separation of concerns and makes each function perform a specific task, enhancing code organization.

// NOTE - There are a couple of sections that were not covered in the live lecture as mentioned above for which there might be offline classes/maybe to be covered in the next week's live classes. So, will keep updating this as soon as the content is posted further!