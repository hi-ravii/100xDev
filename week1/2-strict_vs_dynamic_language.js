/*
    Strictly Typed vs Dynamically Typed Languages

    1. **Strictly Typed Languages**:
        - Variables must have a defined data type, and that type cannot change.
        - Errors are caught at compile time, reducing runtime issues.
        - Examples: C++, Java.

        Example in C++:
        /*
        #include <iostream>
        using namespace std;

        int main() {
            int number = 10; // Declaring an integer variable
            number = "Hello"; // ERROR: Cannot assign a string to an integer
            return 0;
        }
        */
        // Explanation:
        // The compiler will throw an error if you try to assign a different type to `number`.

        // 2. **Dynamically Typed Languages**:
        // - Variables can hold any data type, and their type can change during execution.
        // - Errors are caught at runtime, which may cause unexpected issues.
        // - Examples: JavaScript, Python.

        // Example in JavaScript:
        let number = 10; // Initially a number
        number = "Hello"; // No error: Now it's a string
        console.log(number); // Output: Hello
        // Explanation:
        // JavaScript allows you to change the type of `number` dynamically.

//     Key Differences:
//     - **Type Checking**:
//         - Strict: Done at compile time (e.g., C++).
//         - Dynamic: Done at runtime (e.g., JavaScript).
//     - **Flexibility**:
//         - Strict: Less flexible but safer.
//         - Dynamic: More flexible but prone to runtime errors.
//     - **Performance**:
//         - Strict: Faster, as types are fixed.
//         - Dynamic: Slower, as type checking happens during execution.

//     Summary:
//     - Use strict typing when safety and performance are priorities (e.g., system programming, large applications).
//     - Use dynamic typing for rapid development and flexibility (e.g., scripting, small projects).
// */