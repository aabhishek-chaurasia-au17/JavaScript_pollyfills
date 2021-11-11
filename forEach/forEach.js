
 Array.prototype.myforeach = function(myfunc){
    newArr = []
    for(let i = 0; i < this.length; i++){
        newArr.push(myfunc(this[i], i, this))
    }
    return newArr
}

const arr = [35, 25, 45, 55, 50, 25]

let result = arr.myforeach(function(element, index, array ){
    return element
})

console.log(result);