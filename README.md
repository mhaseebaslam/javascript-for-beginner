# JavaScript for Beginners

A practical, self-paced introduction to programming with JavaScript and Node.js. Each chapter pairs a runnable example with exercises so you can learn a concept, experiment with it, and practice solving problems.

## Learning path

| Chapter | Topics | Example | Practice |
| --- | --- | --- | --- |
| [Getting started](setting-up/README.md) | Programs, JavaScript, Node.js, and tools | [Intro to programming](setting-up/intro_to_programming.js) · [JavaScript](setting-up/introduction-to-javascript.js) | [Setup checklist](setting-up/task.md) |
| [Variables and operators](variables-and-operators/task.md) | Values, types, arithmetic, input, and output | [Example](variables-and-operators/variables-and-operators.js) | [Exercises](variables-and-operators/task.md) |
| [Conditionals](conditionals/task.md) | Comparisons, Boolean logic, and `switch` | [Example](conditionals/conditionals.js) | [Exercises](conditionals/task.md) |
| [Loops](loops/task.md) | `while`, `do...while`, and `for` | [Example](loops/loops.js) | [Exercises](loops/task.md) |
| [Arrays](arrays/task.md) | Indexing, iteration, array methods, and nested arrays | [Example](arrays/arrays.js) | [Exercises](arrays/task.md) |
| [Functions](functions/task.md) | Parameters, return values, and reusable logic | [Example](functions/functions.js) | [Exercises](functions/task.md) |

## Quick start

1. Install [Node.js 22 or newer](https://nodejs.org/) and a code editor. [Visual Studio Code](https://code.visualstudio.com/) is a popular option.
2. Clone this repository or download it from GitHub.
3. Open a terminal in the repository folder and check your setup:

   ```bash
   node --version
   npm run check
   npm test
   ```

The examples use only Node.js built-ins; no package installation is required. Run a chapter example with `node path/to/example.js`, for example:

```bash
node arrays/arrays.js
```

## How to study

1. Read the chapter example and run it.
2. Change a value or add a case; predict the output before running again.
3. Try the matching `task.md` exercises without copying the example.
4. Run `npm test` to check that all examples still parse and execute.

Some exercises ask for interactive input. The chapter examples are intentionally non-interactive so they can be run together by the test command.

## Repository structure

Each topic folder contains a JavaScript example and a `task.md` exercise sheet. Setup material lives in `setting-up/`; the editor shortcut reference is in [keyboard-shortcuts-for-vscode.md](keyboard-shortcuts-for-vscode.md).

## Contributing

Corrections and beginner-friendly improvements are welcome. Keep examples runnable with the supported Node.js version, explain concepts in plain language, and avoid adding dependencies without a clear need.

## License

This project is distributed under the [MIT License](LICENSE).
