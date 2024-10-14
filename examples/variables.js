// var
// let
// const

// // global scope
// var global = 10

// // Local scope
// function localFunction() {
//     var local = 20
//     console.log(global + local);
// }

// // localFunction()

// console.log(global + scope);

// ES6
// Block: vùng code bên trong dấu {}

const global = 10
global = 20
const scope = 30
{
    // Block
    const scope = 20
}

console.log(global + scope);