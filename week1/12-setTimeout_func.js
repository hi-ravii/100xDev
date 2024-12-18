/*
    Understanding setTimeout in JavaScript

    1. **What is setTimeout?**
        - `setTimeout` is a built-in JavaScript function used to delay the execution of a task.
        - It runs the specified function after a given amount of time (in milliseconds).

    2. **Syntax**:
        setTimeout(function, delay, [arguments]);

        - `function`: The function to execute after the delay.
        - `delay`: The time in milliseconds to wait before running the function.
        - `[arguments]`: Optional parameters to pass to the function.

    3. **Basic Example**:
*/
console.log("Start");
setTimeout(() => {
    console.log("Hello after 2 seconds!");
}, 2000); // Runs the function after 2000ms (2 seconds)
console.log("End");

/*
    Output:
    Start
    End
    Hello after 2 seconds!

    Explanation:
    - "Start" and "End" execute immediately because `setTimeout` does not block the code.
    - "Hello after 2 seconds!" runs after the delay.

    4. **Passing Arguments to the Callback**:
*/
function greet(name) {
    console.log(`Hello, ${name}!`);
}
setTimeout(greet, 3000, "John"); // Calls `greet("John")` after 3 seconds

/*
    Output:
    Hello, John!

    Explanation:
    - The `greet` function is executed after 3 seconds, with "John" passed as an argument.

    5. **Cancelling a setTimeout**:
        - Use `clearTimeout` to cancel a scheduled `setTimeout`.
*/
const timeoutId = setTimeout(() => {
    console.log("This will not run!");
}, 5000);

clearTimeout(timeoutId); // Cancels the timeout before it executes

/*
    Output:
    Nothing happens because the timeout was cleared.

    6. **setTimeout with 0 Delay**:
        - A `setTimeout` with `0` delay executes after the current task is complete.
*/
console.log("Task 1");
setTimeout(() => {
    console.log("Task 3 (from setTimeout)");
}, 0);
console.log("Task 2");

/*
    Output:
    Task 1
    Task 2
    Task 3 (from setTimeout)

    Explanation:
    - Even with 0 delay, the callback runs after the current tasks finish because `setTimeout` pushes it to the queue.

    7. **Common Use Cases**:
        - Delaying tasks
        - Scheduling animations
        - Simulating wait times in code
*/