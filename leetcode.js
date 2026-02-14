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
// Problem number 27 leetcode Remove Element
 
var removeElement=function(nums,val){
    nums.sort((a,b)=>a-b);
    
    let k=0;
     for(let i=0;i<nums.length;i++){
        if(nums[i]!=val){
           
            nums[k]=nums[i];
            k++;
        }
     }
     return k;

}


// Problem number 377 reverse String 
var reverseString=function(s){
    let i=0;
    let j=s.length-1;
    while(i<j){
         [s[i],s[j]]=[s[j],s[j]];
         i++
         j--;
    }
    
    
}

// merge two sorted array
var merge = function(nums1, m, nums2, n) {
    let i=0;
    while(i<m){
        i++;
    }
   for(let num2 of nums2){
    nums1[i]=num2
    i++;
   }
    nums1.sort((a,b)=>a-b)
    return nums1;
    
};

// move zeroes to the end of the array
var moveZeroes = function(nums) {
    let count =0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]===0){
            count++;
        }
    }
    let index=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==0){
            nums[index]=nums[i];
            index++;
        }
    }
    let j=nums.length-1;

    while(count >0){
        nums[j]=0
        j--;
        count--;

    }
    return nums;
    
};

var findmaximumConsecutiveseones=function(nums){
    let count=0;
    let maximumcount=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]===1){
            count++;
            maximumcount=Math.max(maximumcount,count);
        }
        else{
            count=0
        }
        j++;
    }
    return maximumcount;

}
// problem number 268 mising number 
var misingNumber=function(nums){
    let n=nums.length;
    let total=0;
    for(let i=0;i<=n;i++){
        total+=1;
    }
    for(let num of nums){
        total-=num;
    }
    return total;
}
//