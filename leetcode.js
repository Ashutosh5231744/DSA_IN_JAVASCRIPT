// problem number 7 leetcode  Reverse Integer
var reverse = function(x) {
let copy=x;
   if(x<0){
    x=Math.abs(x)

   }
let rev=0;
while(x>0){
    let last=x%10;
    rev=rev*10+last;
    x=Math.floor(x/10);

} 
 if(copy<0){
    rev=-rev;
 }
 if(rev <-(2**31)|| rev >(2**31 -1)){
    return 0;
 }
 return rev;

    
};

// problem number 26 leetcode Remove Duplicate from the sorted array
var removeDuplicates = function(nums) {
    let i=0;
    for(let j=i+1; j<nums.length; j++){
        if(nums[j]!==nums[i]){
             i++;
            nums[i]=nums[j];
           
        }
    }
    return i+1;
    
};