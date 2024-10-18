## Synchronous JavaScript:

1. Code executes sequentially, one line at a time.
2. Each statement waits for the previous statement to complete.
3. Blocking: subsequent code execution is halted until the current task finishes.

Example:
```
console.log("Start");
alert("Hello");
console.log("End");
```
### Asynchronous JavaScript:

1. Code executes concurrently, allowing multiple tasks to run simultaneously.
2. Non-blocking: subsequent code execution continues without waiting.
3. Uses callbacks, promises, or async/await.

Example (using setTimeout):
```
console.log("Start");
setTimeout(() => {
  console.log("Async task completed");
}, 2000);
console.log("End");
```
