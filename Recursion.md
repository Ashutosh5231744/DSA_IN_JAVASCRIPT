what is Recursion 
function call it self again and again to solve similar kind of small problem
there are 2 part in recursion
1.Base case -> where function stop calling it self 
2.recursion part -> where function call it self 

Real life example of recursion 
1.people in the queue
2.comment in the reddit 
3.hirarichey of the peoples in the organization

Example 
function f1(num){
  if(num === 0) return;   // Base case
  console.log(num);
  num = num - 1;
  f1(num);               // Recursive call
}

let a = 8;
f1(a);

let x=7;
function f1(num){
  if(num>x){
    return
  }
  console.log(num)
  num=num+1
  f1(num)
}
f1(1)


when to use the recursion
1.when problem can be broken into the sub problem
2.tree and graph
3.Backtracking and dp and divide and conqure

#1 sum of first n number 
let sum=0
let n=5
function f1(n){
  if(n===0){
    return 
  }
  sum+=n;
  n=n-1;
  f1(n)


}
f1(5)
console.log(sum)


# small version of this code 
let sum=0;
function f1(n){
  if(n===0){
    return
  }
  sum+=n;
  f1(n-1)
}
f1(5)


# sum of all number in an array
note -> in the array we have to mange the indexes so thats why manage the index seprately that make easy to sense

function sumofarray(arr,i){
  if(i>=arr.length){
    return 0;
  }
  return arr[i]+sumofarray(arr,i+1)
}
sumofarray([1,2,3,4,5],0)

# sum of all even number in an array 
function f1(arr,i){
  if(i>=arr.length){
     return 0;
  }
  if(arr[i]%2===0){
    return arr[i]+f1(arr,i+1);
  }else{
   return f1(arr,i+1)
  }
}
console.log(f1([1,2,3,4,5],0))

# sum of all odd number in an array 
function f1(arr,i){
  if(i>=arr.length){
    return 0;
  }
  if(arr[i]%2!==0){
    return arr[i]+f1(arr,i+1)
  }else{
    return f1(arr,i+1);
  }
}
console.log(f1([1,2,3,4,5],0))


# sum of all element in the even index 
function f1(arr,i){
  if(i>=arr.length){
    return 0;
  }
    return arr[i]+f1(arr,i+2);
}
console.log(f1([1,2,3,4,5],0))

# sum of all the element in the odd position 
function f1(arr,i){
  if(i>=arr.length){
    return 0;

  }
  return arr[i]+f1(arr,i+2)
}
console.log(f1([1,2,3,4,5],1))


# factorial of number 
function factorial(n){
  if(n===0){
    return 1;
  }
  return n*factorial(n-1);
}
console.log(factorial(5));


# check if the number is in the power of two

function poweroftwo(n){
  if(n===1){
    return true;
  }
   if(n<=0 || n%2!==0){
    return false;
   }
   return poweroftwo(n/2);
}
console.log(poweroftwo(6));