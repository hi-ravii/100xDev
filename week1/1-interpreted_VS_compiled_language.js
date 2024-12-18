/*
    Interpreted vs Compiled Language

    INTERPRETED LANGUAGE (e.g., JavaScript):
    - Code is executed line by line by an interpreter at runtime.
    - Slower execution because translation happens during runtime.
    - Easier to debug and modify (no need to recompile).
    - Example in JavaScript:
        console.log("Hello, World!"); 
        // Explanation:
        // This code runs directly in a JavaScript interpreter like Node.js or a browser.
        // There's no need to compile beforehand; the interpreter reads and executes the code.

    COMPILED LANGUAGE (e.g., C++):
    - Code is converted into machine code by a compiler before execution.
    - Faster execution as it’s precompiled into a binary file.
    - Harder to debug after compilation since changes require recompilation.
    - Example in C++:
        /* C++ Code:
        #include <iostream>
        using namespace std;

        int main() {
            cout << "Hello, World!" << endl;
            return 0;
        }
        */
        // Explanation:
        // The code must be compiled first using a compiler 
        // After compilation, run the program using: `./hello`
        // The machine executes the compiled binary file, resulting in "Hello, World!" output.

        // Key Differences in Execution:
        // - JavaScript (interpreted) executes as-is when run in an interpreter.
        // - C++ (compiled) needs to be compiled into a binary file before it can be executed.

    
    /*
        Additional Comparison Example: Adding Two Numbers
    
        JavaScript (Interpreted):
    */
    function addNumbersJS(a, b) {
        return a + b;
    }
    console.log("Sum in JavaScript:", addNumbersJS(5, 7));
    // Explanation: This function is directly executed by the interpreter.
    
    /*
        C++ (Compiled):
        Example C++ Code:
        #include <iostream>
        using namespace std;
    
        int addNumbersCPP(int a, int b) {
            return a + b;
        }
    
        int main() {
            cout << "Sum in C++: " << addNumbersCPP(5, 7) << endl;
            return 0;
        }
        // Explanation:
        // This code requires compilation before execution.
        // After compiling and running, it outputs: "Sum in C++: 12".
    */
    
    /*
        Summary:
        - JavaScript is interpreted, so it's platform-independent and executes on any interpreter.IT WILL EXECUTE THE ABOVE LINE EVEN IF THE BELOW LINES ARE HAVING ERROR
        - C++ is compiled, resulting in faster execution but requiring platform-specific compilation.NOTHING GETS EXECUTED IN CASE OF ANY ERROR
    */