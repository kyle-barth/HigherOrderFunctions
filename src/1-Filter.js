var animals = [
  { name: 'bella', species: 'cat' },
  { name: 'donut', species: 'cat' },
  { name: 'kiwi', species: 'dog' },
  { name: 'luna', species: 'bird' }
]

// Boring way of doing things
// var cats = []
// for (var i = 0; i < animals.length; i++) {
//   if (animals.species === 'cat')
//     cats.push(animals[i])
// }

// Callback function example -> function(animal) is the callback function
// var cats = animals.filter(function (animal) {
//   return animal.species === 'cat'
// })

// Same as doing this ->
// var isCat = function (animal) {
//   return animal.species === 'cat'
// }
// var cats = animals.filter(isCat)

// ES6 Syntax
var cats = animals.filter((a) => a.species === 'cat')

console.log(cats)