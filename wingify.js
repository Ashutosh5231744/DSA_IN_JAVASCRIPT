// function isArraySorted(arr){
//  for(let i=1;i<arr.length;i++){
//   if(arr[i]<arr[i-1]){
//      return false;
//   }
//  }
//  return true;
// }

// let ans = isArraySorted([1,2,3,4,5]);
// console.log(ans);

// let ans2 = isArraySorted([1,3,4,2,6,8]);
// console.log(ans2);

// let ans4= isArraySorted([1,4,5,7,3]);
// console.log(ans4);

// function leftRotateArrayByOne(arr){
//    // storing the firt element if an array
//    let first=arr[0];
//    for(let i=1;i<arr.length;i++){
//       arr[i-1]=arr[i];
//    }
//    arr[arr.length-1]=first;
//     return arr;
// }
// let ans= leftRotateArrayByOne([1,2,3,4,5,6,7,8]);
// console.log(ans);


function movingnZERO(arr){
   // storing non zero element in to a seprate array
     let temp=[];
     for(let num of arr){
      if(num!==0){
         temp.push(num);
      }
     }
     while(temp.length<arr.length){
      temp.push(0);
     }
     return temp;
}
let ans=movingnZERO([1,2,0,0,0,4,0]);
console.log(ans);

