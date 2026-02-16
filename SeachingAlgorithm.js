// Linear Search 


// find the target element in the array and return the index if not present return -1;

function linearSearch(arr,target){
  for(let i=0;i<arr.length;i++){
    if(arr[i]===target){
      return i;
    }
  }
  return -1
}
console.log(linearSearch([1,2,3,4,5],5))

// Binary search Algorithm

var search = function(nums, target) {
let i=0;
let j=nums.length-1;


while(i<=j){
    let middle =Math.floor((i+j)/2);
    if(nums[middle]===target){
        return middle;
    }
    else if(nums[middle] < target){
        i=middle+1;
    }
    else{
        j=middle-1;
    }
   
}
return -1;
    
};

