

// const set = new Set()

// console.log(set)
// set.add('banana')
// set.add('apple')
// set.add('mango')
// set.add('banana') // not 

// console.log(set)
// console.log(set.size)



// const mezba = {userName: 'Mezba'}
// const mizan = {userName: 'Mizan'}
// const tanmoy = {userName: 'tanmoy'}

// const set = new Set()

// set.add(mizan)
// set.add(mezba)
// set.add(tanmoy)
// set.add('mizan')

// console.log(set.size)
// console.log(set)




// const arr = ['apple', 'mango', 'banana', 'apple']

// const set = new Set(arr)
// set.add('tomato')
// set.forEach((value) => console.log(value))
// const test = Array.from(set)


// console.log(set)




const arr = ['apple', 'mango', 'banana', 'apple']
// Brute Force
const removeDupArr = (arr) => {
    const newArr = []

    arr.forEach((element) => {
        if(!newArr.includes(element)){
            newArr.push(element)
        }
    })
    return newArr
}

console.log(removeDupArr(arr))

// ----- Set implementation
const removeDupSet = (arr) => {
    const set = new Set(arr)

    return Array.from(set)
}
console.log(removeDupSet(arr))