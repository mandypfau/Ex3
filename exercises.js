export function flattening (){
    let arrays = [[1, 2, 3], [4, 5], [6]];
    let flattened = arrays.reduce(
        function(accumulator, currentValue) {
          return accumulator.concat(currentValue)
        },
        []
      )
      console.log (flattened)
}

  export function loop (value,test,update,body){
    for(let i=value;test(i);i=update(i)){
        body(i)
    }
  }
  loop(3, n =>n>0,n=>n-1,console.log);
  export function everyLoop(array, test) 
{
 
for(let i=0;i<array.length;i++){
    if (!test(array[i])){
        return false
    }
}
return true
}

export function everySome(array, test) 
{
    return !array.some(n=>{
        return !test(n)
    })
} 

console.log(everyLoop([1, 3, 5], n => n < 10));
// → true
console.log(everyLoop([2, 4, 16], n => n < 10));
// → false
console.log(everyLoop([], n => n < 10));
// → true
console.log(everySome([1, 3, 5], n => n < 10));
// → true
console.log(everySome([2, 4, 16], n => n < 10));
// → false
console.log(everySome([], n => n < 10));
// → true