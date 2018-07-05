// Basic boring recursion
// let countDownFrom = (num) => {
//     if (num === 0) return
//     console.log(num)
//     countDownFrom(num - 1)
// }

// countDownFrom(10)

let categories = [
    { id: 'animals', 'parent': null },
    { id: 'mamals', 'parent': 'animals' },
    { id: 'cats', 'parent': 'mamals' },
    { id: 'dogs', 'parent': 'mamals' },
    { id: 'poodle', 'parent': 'dogs' },
    { id: 'husky', 'parent': 'dogs' },
    { id: 'tabby', 'parent': 'cats' },
    { id: 'maine-coon', 'parent': 'cats' }
]

let makeTree = (categories, parent) => {
    let node = {}
    categories
        .filter(c => c.parent === parent)
        .forEach(c => node[c.id] = makeTree(
            categories, c.id
        ))
    return node
}

console.log(
    JSON.stringify(
        makeTree(categories, null)
        , null, 2
    )
)