

Array.prototype.myReduce = function(getcalc, total = 0) {
    for (let i = 0; i < this.length; i++) {
        total = getcalc(this[i], total)
    }
    return total
}

const arr = [10, 20, 15, 32, 65, 45]

let result = arr.myReduce(function(total, elements) {
    return total + elements
})

console.log(result);