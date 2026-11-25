"use strict";

/*
 * JavaScript is a programming language standardized as ECMAScript.
 * It runs in web browsers and in runtimes such as Node.js. The Java
 * programming language is separate and distinct from JavaScript.
 */
console.log("JavaScript runs in Node.js.");

// Node.js provides APIs such as process and the file system, but not the
// browser's document object.
console.log("Node.js version:", process.version);

// Browser-only code must run in a browser with a document.
if (typeof document !== "undefined") {
  const heading = document.createElement("h1");
  heading.textContent = "Welcome to JavaScript!";
  document.body.appendChild(heading);
}

/*
 * To try a small Node.js HTTP server, save this example as server.js and run
 * it with `node server.js`. Stop it with Ctrl+C.
 *
 * const http = require("node:http");
 *
 * const server = http.createServer((request, response) => {
 *   response.writeHead(200, { "content-type": "text/plain; charset=utf-8" });
 *   response.end("Hello from Node.js!\n");
 * });
 *
 * server.listen(3000, "127.0.0.1", () => {
 *   console.log("Server listening at http://127.0.0.1:3000/");
 * });
 */

/*
 * Learn more:
 * - JavaScript: https://developer.mozilla.org/docs/Web/JavaScript
 * - Node.js: https://nodejs.org/docs/latest/api/
 */
