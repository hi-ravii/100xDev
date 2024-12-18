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