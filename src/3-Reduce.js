var orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 }
]

// Boring way of doing things
// var totalAmount = 0
// for (var i = 0; i < orders.length; i++) {
//     totalAmount += orders[i].amount
// }

// Callback function example -> function(animal) is the callback function
// var totalAmount = orders.reduce(function (sum, order) {
//   return sum + order.amount
// }, 0)

// Same thing with ES6 syntax (ES6 introduced the arrow syntax)
var totalAmount = orders.reduce((sum, order) => sum + order.amount, 0)

console.log(totalAmount)