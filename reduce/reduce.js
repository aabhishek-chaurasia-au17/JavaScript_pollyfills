
const array = [5,14,6,13,7,9,18]
const total = 0

function reduce(array, calcsum, total) {
    for (let i = 0; i < array.length; i++) {
        total = calcsum(array[i], total)
    }
    return total
}

function calcsum(total, element) {
    return total + element
}

console.log(reduce(array, calcsum, total));