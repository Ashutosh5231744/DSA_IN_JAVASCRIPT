console.log("hello world");

function largestelement(arr){
   let largest=-Infinity;
   for(let i=0;i<arr.length;i++){
     if(arr[i]>largest){
      largest=arr[i];
     }
   }
   return largest;
}
console.log(largestelement([1,2,3,4,5,6,7]));

function counteven(arr){
  let count=0;
  for(let i=0;i<arr.length;i++){
    if(arr[i]%2===0){
      count++;
    }
  }
  return count;
}
console.log(counteven([1,2,3,4]));

function secondlargestelemt(arr){
    if(!arr || arr.length<2){
        return "second elemt is not posible"
    }
    let firstlargest=-Infinity;
    let secondlargest=-Infinity;
    for(let num of arr){
        if(num >firstlargest){
            secondlargest=firstlargest;
            firstlargest=num;
            
            
        }else if(num >secondlargest && num !=firstlargest){
            secondlargest=num;
            
        }
    }
    return secondlargest;
    
}
let arr=[1,2,3,5,7,4,9];
console.log(secondlargestelemt(arr))
