
 Array.prototype.myforeach = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}

const arr = [35, 25, 45, 55, 50, 25]

arr.myforeach(function(element, index, array ){
    console.log(element);
})

