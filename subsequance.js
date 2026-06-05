

// printing all the subsequance 
function subsequance(arr,index,n,temp,ans){
  if(index==n){
    ans.push([...temp])
    return;
  }

  //Taken
  temp.push(arr[index])
  subsequance(arr,index+1,n,temp,ans)
  temp.pop();
  // not taken
  subsequance(arr,index+1,n,temp,ans);
}
let arr=[1,2,3];
let index=0;
let n=arr.length;
let temp=[];
let ans=[];
subsequance(arr,index,n,temp,ans);
console.log(ans);

// count the number of subsequances
function countSubsequances(arr,index,n,temp,count){
  if(index===n){
  return 1;    
  }
  // taken 
temp.push(arr[index]);
let taken=countSubsequances(arr,index+1,n,temp,count)
temp.pop();
  //not taken 
let notTaken=countSubsequances(arr,index+1,n,temp,count)
 return taken+notTaken;

}
let arr=[1,2,3,4,5];
let n=arr.length;
let temp=[];
let count=0;
let ans =countSubsequances(arr,0,n,temp,count)
console.log(ans);

//  print the subsequance with the if sum===k

function printthesubsequance(arr, index, n,  sum, temp, k ){
  if(index ===n){
 if (sum==k){
    console.log([...temp])
  }
  return ;
  }
 // take 
 temp.push(arr[index]);
 printthesubsequance(arr, index+1, n,  sum+arr[index], temp, k )
 temp.pop();
 // not taken 
 printthesubsequance(arr, index+1, n,  sum, temp, k )
}
let arr=[1,2,1];
let n=arr.length;
let sum=0
let temp=[];

let ans = printthesubsequance(arr, 0, n,  sum, temp, 2 )
console.log(ans );



function printAnysubsequance(arr, index, n,  sum, temp, k ){
  if(index ===n){
 if (sum==k){
    console.log([...temp])
    return true;
  }
  return false;
  }
 // take 
 temp.push(arr[index]);
 if(printAnysubsequance(arr, index+1, n,  sum+arr[index], temp, k )){
  return true;
 }
 temp.pop();
 // not taken 
 if(printAnysubsequance(arr, index+1, n,  sum, temp, k )){
  return true;
 }
 return false ;
}
let arr=[1,2,1];
let n=arr.length;
let sum=0
let temp=[];

let ans = printAnysubsequance(arr, 0, n,  sum, temp, 2 )
console.log(ans );


function countSubsequanceswithsumK(arr,index,n,sum,temp,k){

  // Base cases 
  if(index ===n){
    if(sum===k){
      return 1 
    }
    return 0;
  }
  // taken 
  temp.push(arr[index]);
  let taken =countSubsequanceswithsumK(arr,index+1,n,sum+arr[index],temp,k);
  temp.pop();

  //not taken 
  let nottaken=countSubsequanceswithsumK(arr,index+1,n,sum,temp,k)
  return taken +nottaken;


}

let arr=[1,2,1]
let n=arr.length;
let temp=[];

console.log(countSubsequanceswithsumK(arr,0,n,0,temp,2))


