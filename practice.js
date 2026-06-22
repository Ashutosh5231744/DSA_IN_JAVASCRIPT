function largestElemt(arr){
  let largest=-Infinity;
  for(let i=0;i<arr.length;i++){
    if(arr[i] >largest){
      largest=arr[i];
    }
  }
  return largest
}
 let ans=largestElemt([1,2,3,4,5]);
 console.log(ans);

 function secondLargestElements(arr){
  let largest=-Infinity;
  let second=-Infinity;
  for(let i=0;i<arr.length;i++){
    if(arr[i]> largest){
      second=largest;
      largest=arr[i];
    }
  }
  return second;
 }
console.log( secondLargestElements([1,2,3,4,5,6,7,8,9]));

function countEvenNumber(arr){
 let count =0;
  for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
      count++
    }
  }
  return count;
}
console.log(countEvenNumber([1,2,3,4,5]));


function countDigits(number){
  let count=0;
  number =Math.abs(number)
  while(number >0){
    number=Math.floor(number/10);
    count++;

  }
  return count;
}
console.log(countDigits(12345));


function RemoveEelemts(arr,val){
  let k=0;
  for(let i=0;i<arr.length;i++){
    if(arr[i]!=val){
      arr[k]=arr[i];
      k++
    }
  }
  return k;
}

console.log(RemoveEelemts([1,2,1,1,1,1],1));
