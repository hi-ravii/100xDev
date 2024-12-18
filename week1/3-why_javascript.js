/*
    Why JavaScript is Preferred in Some Use Cases:

    1. **Web Development**:
        - JavaScript runs directly in web browsers to make websites interactive.
        - Example:
            document.body.style.backgroundColor = "lightblue"; // Changes the background color of the page.

    2. **Cross-Platform Apps**:
        - Build mobile apps for Android and iOS using one codebase with frameworks like React Native.
        - Example:
            // React Native code:
            const App = () => <Text>Hello, Mobile!</Text>;

    3. **Server-Side Programming**:
        - Using Node.js, JavaScript can handle server tasks like building APIs.
        - Example:
            const http = require('http');
            http.createServer((req, res) => {
                res.end("Hello from the server!");
            }).listen(3000);
            // Starts a server on port 3000.

    4. **Real-Time Applications**:
        - JavaScript handles real-time tasks like chat apps and live notifications with ease.
        - Example:
            async function getData() {
                const response = await fetch('https://api.example.com');
                console.log(await response.json());
            }
            getData(); // Fetches live data without delays.

    5. **Huge Library Support**:
        - JavaScript has tons of libraries (like React, Vue) to make coding easier and faster.
        - Example:
            import React from 'react';
            const App = () => <h1>Hello, React!</h1>;

    6. **Versatility**:
        - Works everywhere: browsers, servers (Node.js), mobile apps, desktop apps, and even IoT devices.
        - Example:
            // Desktop app with Electron.js:
            const { app, BrowserWindow } = require('electron');
            app.on('ready', () => {
                let win = new BrowserWindow({ width: 800, height: 600 });
                win.loadURL('https://example.com');
            });

    7. **Easy to Learn & Use**:
        - Simple syntax and runs without setup make it great for beginners.

    8. **Community Support**:
        - A huge developer community helps solve problems and keeps improving the language.

    Summary:
    - JavaScript is popular because it's flexible, powerful, and can be used for almost everything.
*/