Time Complexity !=Time taken by an Alogorithm
for example in linear search it take n time when it have to fnd the last  element of an array
in binary search for example if there is 100 elements in an array it takes 7 time for treaversing the whole array 

Time complexity is represented by Big O Notation
Notation is a representation of the Worst Case 

so for the Linear Search O(n)
so for the binary Search O(logn)
Note O(logn)>>>O(n)

lets see Some common Time Complexity 
1.O(n^2)   this is for the nested loop 
2.O(n*logn) this is for the binary seaarch inside the for loop (Merge sort)
3.O(n^3)  three nested loop 
4.O(2^n)  for total number of n it take 2*n times 


Remember O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(n³) < O(2ⁿ)


The More left side you go the better the Time Complexity will be


Example . finding the Maximum element in an array 

Time Complexity will be O(n)
Space Complexity will be O(1)

Example . Return the double of the array 
Time complexity will be O(n)
Space Compelxity will be O(n)  
Beacuse Let new array=[size(n)]


Important 
if there is two nested loop  and there two independent loop for worst case time complexity will be O(n^2)   and O(2n)  but we ignore 2 here Beacuase as the input size increases in order to the nested the independent will be be the Smaller .


Important 
if we have O(2ⁿ + n² + log n)   so the final answer will be the  2ⁿ



