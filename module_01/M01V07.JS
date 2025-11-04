// console.time('task')
// for(let i = 0; i <= 60000; i++){
//     console.log(i)
// }
// console.timeEnd('task')


// const startTime = performance.new()

// for(let i = 0; i <= 5000; i++){
//     console.log(i)
// }

// const endTime = performance.now()

// console.log(`This code took ${endTime - startTime} ms`)

const firstArray = []
const secondArray = []

for(let i = 0; i < 60000; i++){
    if(i < 30000){
        firstArray.push(i)
    }
    secondArray.push(i)
}
console.log('first array', firstArray.length)
console.log('second array', secondArray.length)


console.time('map1')
const firstUserList = firstArray.map((number) => ({userId: number}))
console.timeEnd('map1')

console.time('map2')
const secondUserList = secondArray.map((number) => ({userId: number}))
console.timeEnd('map2')

console.time('find')
// const user = secondUserList.find((user) => user.userId === 500000)
const user = secondUserList[400000]
console.timeEnd('find')
