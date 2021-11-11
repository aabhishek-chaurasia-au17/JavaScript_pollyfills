
Array.prototype.myMap = function (callback){
  let result = [];
  for(let index = 0; index < this.length; index++){
        result.push(callback(this[index], index, this));
  }
  return result;
}

const arr = [2, 4, 5, 6, 8, 10]

const myarr = arr.myMap(function(element) {
    return element
})

console.log(myarr);