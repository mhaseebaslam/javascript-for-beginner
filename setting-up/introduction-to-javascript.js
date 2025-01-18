// Introduction to JavaScript
// JavaScript is a versatile and widely-used programming language essential for modern web development.

/*
What is JavaScript?
JavaScript is the official language of the web.
 - It powers interactive and dynamic features on websites.
 - Used by 95% of websites.
 - Originally created in 1995 by Brendan Eich in just 10 days.
 - Despite its quirks, it remains the most popular language on GitHub.
 - JavaScript has no relation to Java; the name was a marketing strategy.
*/

console.log("Java is to JavaScript as car is to carpet."); // A humorous comparison by Chris Heilman.

/*
Features of JavaScript
 - Scripting language: Interpreted on the fly, not compiled.
 - Multi-paradigm: Supports object-oriented, imperative, and functional programming styles.
 - Dynamically typed: Variable types are flexible.
 - Runs on the client (browser) and server (Node.js).
*/

/*
JavaScript in Client-Server Interaction
- Client-side (front-end):
  * Runs on web browsers.
  * Handles user interactions, DOM manipulation, and updates content dynamically.
- Server-side (back-end):
  * Runs on web servers using Node.js.
  * Manages databases and ensures data security.

          +-------------------+
          |     Browser       | <--- User sends request (Client-side)
          +-------------------+
                ↑   | 
                |   |
    HTTP Respone|   |HTTP Request
                |   |
                |   ↓
          +-------------------+   
          |     Web-Server    | <--- Responds with data
          +-------------------+   
                    ↑
                    | Pre-created HTML, CSS, JS and other files
                    |
          +-------------------+    
          |  Database (files) | <--- Data retrieval or update (Server-side)
          +-------------------+    

*/

// Client-side example:
console.log("Client-side scripting example logged in console.");

/*
Server-side example (Node.js):
Save this in a file named `server.js` and run with Node.js.
const http = require('http');
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello from Node.js server!\n');
}).listen(3000);
console.log('Server running at http://localhost:3000/');
*/

/*
Practical Applications of JavaScript
- Social media platforms: Enhance user experiences (e.g., dynamic feeds, real-time notifications).
- E-commerce: Manage shopping carts and update prices dynamically.
- Search engines: Provide instant search suggestions.
- Interactive elements: Enable navigation menus, animations, and pop-ups.
*/

// Practical Example: Dynamically Adding Content
const heading = document.createElement('h1');
heading.textContent = "Welcome to JavaScript!";
document.body.appendChild(heading);

/*
Tasks for Exploring JavaScript

Task 1: Explore JavaScript Impact
1. Turn off JavaScript in your browser and observe website behavior.
2. Compare the experience on different websites.

Task 2: Inspect JavaScript Code
1. Visit any website.
2. Use `Ctrl+U` to view the page source.
3. Search for <script> elements and analyze their usage.
*/

/*
JavaScript Evolution Timeline:
+--------------------------------------------------------------------+
| 1995 - JavaScript Introduced (by Netscape)                         |
+--------------------------------------------------------------------+
| 1996 - ECMA-262 Specification (JavaScript standardization begins)  |
+--------------------------------------------------------------------+
| 2005 - AJAX (Asynchronous JavaScript and XML) popularized          |
+--------------------------------------------------------------------+
| 2009 - Node.js Released (server-side JavaScript)                   |
+--------------------------------------------------------------------+
| 2015 - ES6 (ECMAScript 6) introduces arrow functions, promises, etc|
+--------------------------------------------------------------------+
| 2020 - ES2020 introduces BigInt, Dynamic Import, etc.              |
+--------------------------------------------------------------------+
| 2025 - New Features under development (WebAssembly, modules)       |
+--------------------------------------------------------------------+
*/

/*
Node.js Overview
- JavaScript runtime built on Chrome's V8 engine.
- Released in 2011, enabling JavaScript on the server side.
- Benefits:
  * Flexible, responsive, and scalable.
  * Facilitates code sharing between front and backend.
  * Open source with an active community.

    +-----------------------+
    | V8 JavaScript Engine  | <--- Compiles JavaScript code
    +-----------------------+
            |
            |
            ↓
    +-----------------------+
    |     Event Loop        | <--- Manages asynchronous tasks
    +-----------------------+
            |
            |
            ↓
    +-----------------------+
    |   Callback Queue      | <--- Holds tasks to be executed
    +-----------------------+
            |
            |
            ↓
    +-----------------------+
    | Libuv (I/O Operations)| <--- Handles I/O (e.g., file, network)
    +-----------------------+
*/

// Example Task: Hello Node.js
// Save this as hello.js and run it using `node hello.js`
console.log('Hello, Node.js!');

/*
Getting Started with a Node.js Project
1. Initialize the project:
   * Run `npm init` to create a `package.json` file.
2. Add Node.js type definitions:
   * Run `npm install --save-dev @types/node`.
3. Explore the `package.json` file to understand dependencies.
*/

console.log("JavaScript and Node.js empower developers to create dynamic, responsive, and scalable applications.");