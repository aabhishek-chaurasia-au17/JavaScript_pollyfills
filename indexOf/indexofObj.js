
Array.prototype.myIndexof = function(text) {
    for (let i = 0; i < this.length; i++) {
        if(this[i] === text){
            return i
        }
    }
    return -1
}

const arr = ['Abhishek', 'Pallav', 'Bhumika', 'Riya']

console.log(arr.myIndexof('Pallav'));