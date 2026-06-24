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



function LeftRotateArray(arr){
  let x=arr[0];
  for(let i=1;i<arr.length;i++){
    arr[i-1]=arr[i];
  }
  arr[arr.length-1]=x;
  return arr;
}

let ans3 =LeftRotateArray([1,2,3,4,5]);
console.log(ans3);


function checkShorted(arr){
  for(let i=1;i<arr.length;i++){
    if(arr[i] < arr[i-1])
      return false;
  }
  return true;
}
let ans4=checkShorted([1,2,3,4,5,1]);
console.log(ans4);

function MoveZero(arr){
  let ans5 =[];
  let count =0;
  for(let i=0;i<arr.length;i++){
    if(arr[i]!=0){
      ans5.push(arr[i]);
    }else{
      count++
    }
  }
  while(count >0){
    ans5.push(0)
    count--;
  }
  return ans5;

}
let ans6= MoveZero([1,2,3,40,0,0,5,7,9]);
console.log(ans6);

function LinearSearch(arr, target){
  for(let i=0;i<arr.length;i++){
    if(arr[i]==target){
      return i;
    }
  }
  return -1
  
}
let ans7=LinearSearch([1,2,3,4,5],3);
console.log(ans7);


function finduniqueElemnet(arr){
  for(let i=0;i<arr.length;i++){
    let count=0;
    for(let j=0;j<arr.length;j++){
      if(arr[i]==arr[j])
        count++;
    }
     if(count==1){
    return arr[i];
  }
  }
 
}
let ans8=finduniqueElemnet([1,2,3,4,1,2,3,]);
console.log(ans8);


function short(arr){
  let zero=0;
  let one=0;
  let two=0;
  let ans9=[];
  for(let i=0;i<arr.length;i++){
    if(arr[i]==0){
      zero++
    }
    else if(arr[i]==1){
      one++
    }else{
      two++
    }
  }
  while(zero){
    ans9.push(0)
    zero--;
  }
  while(one){
    ans9.push(1);
    one--;
  }
  while(two){
    ans9.push(2)
    two--;
  }
  return ans9;

}
let ans10=short([1,2,0,1,0,2,0,0,0,1,]);
console.log(ans10);

function MaximumElements(arr){
  let freq={};
  for(let i=0;i<arr.length;i++){
    if(freq[arr[i]]){
      freq[arr[i]]++
    }else{
      freq[arr[i]]=1;
    }
  }
  let maxfreq=0;
  let ans;
  for(let key in freq){
    if(freq[key] >maxfreq){
      maxfreq=freq[key];
      ans=key;
    }


  }
  return ans;
}
let ans11=MaximumElements([1,2,3,4,4,4,4,2,2,2,2,2,2,2,2,,1,1,1,1,1,1,1,,3,3,3,3,1,2]);
console.log(ans11);