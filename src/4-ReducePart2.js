import fs from 'fs'

// Same as
// var fs = require('fs')

var output = fs.readFileSync('4-text.txt', 'utf8')
  .trim()
  .split('\n')
  .map(line => line.replace('\r', '').split('\t'))
  .reduce((customer, line) => {
    customer[line[0]] = customer[line[0]] || []
    customer[line[0]].push({
      name: line[1],
      price: line[2],
      quantity: line[3]
    })
    return customer
  }, {})

console.log('output', JSON.stringify(output, null, 2))
