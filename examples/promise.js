// const promise = new Promise(function(resolve, reject) {
//     const status = false
//     if(status) {
//         resolve("Thành công rồi!!!")
//     } else {
//         reject("Em không đợi rồi")
//     }
// })

// // Consumer
// promise
// .then(function(result) {
//     console.log(result);
// })
// .catch(function(reason) {
//     console.log(reason);
// })

// Promise
const asyncFunc = function(text, status) {
    const rand = Math.random() * (3000 - 500) + 500
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            // console.log(text);
            if(status) {
                resolve(`${text} - ${Math.round(rand)}`)
            } else {
                reject(`${text} có lỗi rồi anh ơi!`)
            }
        }, rand)
    })
}

// Consumer - promise chain
asyncFunc("Task1", true)
.then(function(response) {
    console.log(response);
    return asyncFunc("Task2", false)
})
.then(function(response) {
    console.log(response);
    return asyncFunc("Task3")
})
.then(function(response) {
    console.log(response);
    return asyncFunc("Task4")
})
.then(function(response) {
    console.log(response);
})
.catch(function(error) {
    console.log(error);
})
// asyncFunc("Task2").then(function(res) {
//     console.log(res);
// })