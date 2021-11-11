Array.prototype.myfilter = function(condition) {
    let newArray = []
    for (let index = 0; index < this.length; index++) {
        if(condition(this[index])){
            newArray.push(this[index])
        }
    }
    return newArray
}

const ages = [32, 33, 16, 40];

const result = ages.myfilter( function condition(age) {
    return age >= 18;
});


console.log(result);