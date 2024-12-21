# Unhandled Async Errors in Express.js Route Handlers

This repository demonstrates a common error in Express.js applications: unhandled errors within asynchronous route handlers.  When an asynchronous operation throws an error, if not properly caught, the server might crash silently, leaving no indication of the issue to the client.

## Bug
The `bug.js` file shows an Express.js route handler that performs an asynchronous operation.  If the operation fails, an error is logged to the console, but no error response is sent to the client.  This leads to a poor user experience and makes debugging difficult.

## Solution
The `bugSolution.js` file demonstrates the correct approach. It uses a `try...catch` block within the asynchronous operation's `then` block and explicitly sends an error response to the client if an error occurs.