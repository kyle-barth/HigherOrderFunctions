var animals = [
  { name: 'bella' , species: 'cat' },
  { name: 'donut' , species: 'cat' },
  { name: 'kiwi' , species: 'dog' },
  { name: 'luna' , species: 'bird' }
]

// Boring way of doing things
// var names = []
// for (var i = 0; i < animals.length; i++) {
//     names.push(animals[i].name + ' is a ' + animal[i].species)
// }

// Callback function example -> function(animal) is the callback function
var prettyOut = animals.map(function(animal) {
  return animal.name + ' is a ' + animal.species
})

// Same as doing this ->
// var prettyOut = function(animal) {
//   return animal.name + ' is a ' + animal.species
// }
// var dogs = animals.map(prettyOut)

// Same thing with ES6 syntax (ES6 introduced the arrow syntax)
// var prettyOut = animals.map((a) => a.name + ' is a ' + a.species)
