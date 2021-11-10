
const array = [2, 3, 4, 5, 6, 7, 8, 9]

function map(array, myFun) {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(myFun(array[i]))
    }
    return newArray
}

function myFun(element) {
    return element * 2;
}

console.log(map(array, myFun));