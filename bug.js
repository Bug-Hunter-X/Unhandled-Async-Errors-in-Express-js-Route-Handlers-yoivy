const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  someAsyncOperation().then(result => {
    res.send(result);
  }).catch(error => {
    // Error handling is missing here! 
    console.error(error);
  });
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation that might fail
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      resolve('Success!');
    } else {
      reject(new Error('Something went wrong!'));
    }
  });
}