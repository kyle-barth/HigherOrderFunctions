// Boring let function
// let dragon = (name, size, element) =>
//     name + ' is a ' +
//     size + ' dragon that breathes ' +
//     element + '!'

// Exciting Curry function
let dragon =
    name =>
        size =>
            element =>
                name + ' is a ' +
                size + ' dragon that breathes ' +
                element + '!'

console.log(dragon('donut')('stupid')('air'))