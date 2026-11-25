# Getting started

This chapter introduces programming, JavaScript, and the tools used to run the examples in this repository. No prior programming experience is required.

## Install the tools

1. Install [Node.js 22 or newer](https://nodejs.org/). Node.js lets you run JavaScript from a terminal and includes npm.
2. Choose a code editor. [Visual Studio Code](https://code.visualstudio.com/) is optional; any editor that can save plain-text files works.
3. Install [Git](https://git-scm.com/) if you plan to clone the repository or contribute changes.

Verify Node.js and npm from a terminal:

```bash
node --version
npm --version
```

## Run an example

From the repository folder:

```bash
node setting-up/intro_to_programming.js
```

The `node` command runs a JavaScript file. Output written with `console.log()` appears in the terminal.

## Continue learning

- [Introduction to programming](intro_to_programming.js)
- [Introduction to JavaScript](introduction-to-javascript.js)
- [Setup checklist and exercises](task.md)
- [Visual Studio Code keyboard shortcuts](../keyboard-shortcuts-for-vscode.md)

JavaScript also runs in web browsers, but browser APIs such as `document` are not available in Node.js. The examples in this repository are designed to run with Node.js unless stated otherwise.
