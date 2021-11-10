
const arr = [5, 7, 8, 9, 10, 4, 6]

function filter(arr, condition) {
    let filteredArray = []
    for(let i = 0; i < arr.length; i++){
        if(condition(arr[i])){
            filteredArray.push(arr[i])
        }
    }
    return filteredArray
}


function condition(element) {
    if(element > 5){
       return true
    }else{
       return false
    }
}

console.log(filter(arr, condition));