function numberChecker(arr){
  return function (num){
    for(let i = 0; i < arr.length; i++){
        if(num === arr[i]){
            return true
        }
    }
    return false
  } 
}
const arr = [1,2,3,4,5]
const check = numberChecker(arr)
console.log(check(6));
console.log(check(3));