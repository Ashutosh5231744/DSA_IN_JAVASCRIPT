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
// finding the target element in the array and return its index
function findelement(arr,target){
   for(let i=0;i<arr.length;i++){
    if(arr[i]==target){
       return i;
    }
   }
   return -1;
}
console.log(findelement([1,2,3,4,5,6],4))

// count the number of digits in a number 
function countdigits(num){
  let count =0;
  while(num>0){
    num=Math.abs(num); // Handles negatives numbers
    if(num==0){        // handles the case when num is 0
      return 1;
    }
    num=Math.floor(num/10); // Handles decimal number 
    count++;
  }
  return count;
}
console.log(countdigits(12345));

//check if a number is palindrome or not by pointers

function palindrome(num){
    let str=num.toString();   //indexing is not allow on a number so we convert it to the String
    if(num<0){
        return false;  // edge cases 
    }
    let i=0;
    let j=str.length-1;
    while(i<j){
        if(str[i]==str[j]){
            i++;
            j--;
        }else{
            return false;
        }
    }
    return true;
}

console.log(palindrome(12344321));

// check the number is palindrome or not by reversing the number 
function palindrome(num){
    let rev=0;
    let original=num;
    while(num>0){
        let remainder=num%10;
        rev=rev*10+remainder;
        num=Math.floor(num/10);
    }
    if(original==rev){
        return true;
    }
    return false;
}

console.log(palindrome(12344321));