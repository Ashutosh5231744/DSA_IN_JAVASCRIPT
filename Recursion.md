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