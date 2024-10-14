// Synchronous code
// console.log("task1")

// console.log("task1");
// // console.log("task2");
// alert('task2')
// console.log("task3");
// console.log("task4");

// Asynchronous
// setTimeout()
const asyncFunc = function(text, time, callback) {
    setTimeout(function() {
        console.log(text);
        callback()
    }, time)
}

// Callback
asyncFunc("task1", 1000, function() {
    asyncFunc("task2", 500, function() {
        asyncFunc('task3', 0, function() {
            asyncFunc('task4', 0)
        })
    })
}) 

// Callback in callback - callback hell



