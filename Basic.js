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
