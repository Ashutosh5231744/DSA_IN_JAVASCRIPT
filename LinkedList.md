 Linkedlist is an linear data structure 
it is non contigious 
it is dynamic in size 
it is a colllection of nodes
every node have two things (value or data , pointer for next addresh )

Disadvantages of linkedlist 
getting element is very hard 
double memory allocation

Advantages of linkedlist 
insertion or deletion is very easy as compare to the Array

There are two types of linkedlist 
1.singlelinkedlist 
2.doubley linkedlist 

doubleylinkedlist have two pointer 
1. one is for the next node addres
2.one is for the previous node addresh


uses cases for linkedist and array

Acess by index for any elemt           ->Array
inset or delet any elememt frequently ->linkedlist
Memory efficient storage for static size ->Array
Avoiding sizing and dynamics unknow input size ->linkedlist
doing alot of traversl technique than use ->linkedlist

// te tumne bluePrint bna liya
function Node(val){
  this.val=val;
  this.next=null;
}

// ye tumne Register bna liya 
let mylinkedlist=function(){
  this.head=null;
  this.size=0;
}

//
let node1=new Node(10);
let node2= new Node(20);

// ye tumne Acces liya mylinkedlist function se actuall linkedlist bnana k liye 
let list= new mylinkedlist();

list.head=node1;
node1.next=node2;



