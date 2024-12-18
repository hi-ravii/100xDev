/*
    Understanding setInterval in JavaScript

    1. **What is setInterval?**
        - `setInterval` is a built-in JavaScript function that repeatedly executes a given function at specified time intervals.
        - It keeps running until it is explicitly stopped using `clearInterval`.

    2. **Syntax**:
        setInterval(function, interval, [arguments]);

        - `function`: The function to execute repeatedly.
        - `interval`: Time in milliseconds between each execution.
        - `[arguments]`: Optional parameters to pass to the function.

    3. **Basic Example**:
*/
let count = 0;
const intervalId = setInterval(() => {
    count++;
    console.log(`Count: ${count}`);
    if (count === 5) {
        clearInterval(intervalId); // Stops after 5 repetitions
    }
}, 1000); // Executes every 1000ms (1 second)

/*
    Output (1 message every second):
    Count: 1
    Count: 2
    Count: 3
    Count: 4
    Count: 5

    Explanation:
    - The function runs every 1 second.
    - `clearInterval` stops it when `count` reaches 5.

    4. **Passing Arguments to the Callback**:
*/
function greet(name) {
    console.log(`Hello, ${name}!`);
}
const greetInterval = setInterval(greet, 2000, "John"); // Calls `greet("John")` every 2 seconds

setTimeout(() => {
    clearInterval(greetInterval); // Stops the interval after 6 seconds
}, 6000);

/*
    Output:
    Hello, John!
    Hello, John!
    Hello, John!

    Explanation:
    - The `greet` function runs every 2 seconds.
    - The interval is stopped after 6 seconds using `clearInterval`.

    5. **Common Use Cases**:
        - Creating timers or clocks
        - Periodically checking a server or updating UI
*/

console.log("Clock Example:");
setInterval(() => {
    const now = new Date();
    console.log(now.toLocaleTimeString()); // Displays the current time every second
}, 1000);

/*
    Output:
    (Updates every second with the current time)
    10:00:00
    10:00:01
    10:00:02
    ...

    6. **Stopping setInterval**:
        - Use `clearInterval(intervalId)` to stop a running interval.
*/
let i = 0;
const id = setInterval(() => {
    i++;
    console.log(`Iteration: ${i}`);
    if (i >= 3) {
        clearInterval(id); // Stops after 3 iterations
        console.log("Interval Stopped!");
    }
}, 1000);

/*
    Output:
    Iteration: 1
    Iteration: 2
    Iteration: 3
    Interval Stopped!
*/

/*
    Summary:
    - `setInterval` is used for repetitive tasks at regular intervals.
    - Always stop it with `clearInterval` to avoid infinite loops.
*/