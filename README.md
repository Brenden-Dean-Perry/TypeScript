# TypeScript
TypeScript project to illustrate language features and functionality.

# Overview

TypeScript is a statically typed superset of JavaScript that compiles to plain JavaScript. 
It offers optional static typing, classes, and interfaces, making it easier to write and maintain large-scale applications.

This project serves as a demonstration of various TypeScript features, including type annotations, interfaces, classes, and more.

# Features
- Type Annotations: TypeScript allows you to specify types for variables, function parameters, and return values, providing better code clarity and error checking.
- Interfaces: TypeScript interfaces define the structure of an object, ensuring that it adheres to a specific shape and providing better code organization.
- Classes: TypeScript supports object-oriented programming with classes, allowing you to create reusable and modular code.
- Generics: TypeScript generics enable you to create reusable components that can work with different types, enhancing code flexibility and maintainability.
- Modules: TypeScript supports modular programming, allowing you to organize your code into separate files and import/export functionality as needed.
- Type Inference: TypeScript can automatically infer types based on the assigned values, reducing the need for explicit type annotations in certain cases.
- Tooling Support: TypeScript has excellent tooling support, including code editors and IDEs that provide features like autocompletion, type checking, and debugging.
- Compatibility: TypeScript is compatible with existing JavaScript code, allowing you to gradually adopt it in your projects without needing to rewrite everything from scratch.
- Community and Ecosystem: TypeScript has a large and active community, with a wide range of libraries, frameworks, and resources available for developers.
- Improved Developer Experience: TypeScript's static typing and tooling support enhance the developer experience by catching errors early and providing better code navigation and refactoring capabilities.
- Enhanced Code Quality: TypeScript's type system helps catch potential bugs and improves code quality by enforcing type safety and providing better documentation through type annotations.
- Better Collaboration: TypeScript's static typing and interfaces facilitate better collaboration among developers by providing clear contracts and reducing misunderstandings about data structures and function signatures.
- Future-Proofing: TypeScript's features and tooling support make it a future-proof choice for JavaScript development, as it continues to evolve and adapt to the changing needs of developers and the JavaScript ecosystem.
- Improved Performance: TypeScript's static typing can lead to improved performance by allowing for better optimization and faster execution of code, especially in larger applications.
- Better Code Organization: TypeScript's support for modules and classes allows for better code organization and separation of concerns, making it easier to maintain and scale applications over time.
- Enhanced Code Readability: TypeScript's type annotations and interfaces can improve code readability by providing clear information about the expected types and structure of data, making it easier for developers to understand and work with the codebase.

# Getting Set Up

## JavaScript and Node.js
To run TypeScript code, you need to have Node.js installed on your machine.
You can download it from the official website: https://nodejs.org/.

npm (Node Package Manager) comes bundled with Node.js, and you can use it to install TypeScript globally or locally in your project.

## TypeScript and ts-node

To install TypeScript globally, you can run the following command in your terminal:
```powershell
npm install -g typescript
```

ts-node is a tool that allows you to run TypeScript code directly without needing to compile it to JavaScript first.

To install ts-node, run the following command in your terminal:

```powershell
npm install ts-node --save-dev
```
or globally:
```powershell
npm install -g ts-node
```

Once you have ts-node installed, you can run your TypeScript files using the following command:
```powershell
npx ts-node src/index.ts
```

## TypeScript Compiler (tsc)

Alternatively, you can use the TypeScript compiler (tsc) to compile your TypeScript code into JavaScript before running it.

Installing tsc globally:
```powerhell
npm install -g typescript
```

To compile your TypeScript code, run the following command in your terminal:

```powershell
tsc
```

This will compile all the TypeScript files in your project according to the configuration specified in your tsconfig.json file and output the JavaScript files in the specified outDir.
You can then run the compiled JavaScript files using Node.js:

```powershell
node dist/index.js
```

