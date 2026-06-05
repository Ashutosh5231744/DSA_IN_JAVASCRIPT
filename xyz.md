
function  subsequance(arr,index,n,temp,ans){
  if(index==n){
    ans.push(temp);   
  }

  // taken
  temp.push(arr[index]);
  subseuance(arr,index+1,n,temp,ans);
  // no taken
  subseuance.(arr,index+1,n,temp,ans);

}
let n=arr.length;
let temp=n;
const { RunCommandCursor } = require("mongodb");

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


// dry run

[1,2,3]
 number of possible subset or subsequance are = 2 ki power number of elments 

 [1]      
 [1,2]
 [1,2,3]
 [1,3]
 [2]
 [2,3]
 [3]
 []

                                                                                                 

arr=[1,2,1]
temp=[]
sum=0    k=2

index 1 
 arr =[1,2,1]
 temp=[1]
 sum=1;

 index 2
 arr=[1,2,1]
 temp=[1,2]
 sum=3 >2

 Backtrack again 
 arr=[1,2,1]
 temp=[1,1]
 sum=2 == k
   print temp;




