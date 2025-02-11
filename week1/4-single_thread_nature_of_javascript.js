/*
    Single-Threaded Nature of JavaScript

    1. **What Does Single-Threaded Mean?**
        - JavaScript runs on a single thread, meaning it can do only one task at a time.
        - It processes tasks one by one in order (synchronously).

    2. **How Does JavaScript Handle Multiple Tasks?**
        - JavaScript uses **asynchronous functions** (like `setTimeout`, `Promises`) and the **Event Loop** to handle tasks in the background without blocking the main thread.

    3. **Example of Single-Threaded Behavior**:
*/
console.log("Start"); 
setTimeout(() => console.log("Task in Background"), 1000); // Runs later
console.log("End");

/*
    Output:
    Start
    End
    Task in Background

    Explanation:
    - "Start" runs first.
    - "End" runs next because `setTimeout` is asynchronous.
    - The "Task in Background" runs after 1 second, once the main tasks are done.

    4. **What Happens If a Task Takes Too Long?**
        - Long tasks block everything else.
*/
function longTask() {
    const start = Date.now();
    while (Date.now() - start < 3000) {} // Block for 3 seconds
    console.log("Finished Long Task");
}

console.log("Start");
longTask(); // Blocks the thread for 3 seconds
console.log("End");

/*
    Output:
    Start
    Finished Long Task
    End

    Explanation:
    - The `longTask` blocks the thread, delaying "End" until it finishes.

    5. **How to Avoid Blocking?**
        - Use asynchronous functions like `setTimeout` or `async/await` to prevent blocking.
*/
console.log("Start");
setTimeout(() => console.log("Task Done Without Blocking"), 1000); // Non-blocking
console.log("End");

/*
    Output:
    Start
    End
    Task Done Without Blocking

    Explanation:
    - Asynchronous code (like `setTimeout`) runs in the background, allowing other tasks to proceed.
*/

/*
    Summary:
    - JavaScript is single-threaded: it can process one task at a time.
    - Use asynchronous functions to handle background tasks without blocking the main flow.
*/