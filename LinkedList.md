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

// leetcode 707

function Node(val){
    this.val=val;
    this.next=null;
}
let MyLinkedList=function(){
    this.head=null;
    this.size=0;
}

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if(index <0 || index>=this.size){
        return -1
    }
    let current=this.head;
    let count=0;
    while(count <index){
        current=current.next;
        count++
    }
    return current.val;

    
   
      
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let node1= new Node(val);
    node1.next=this.head;
    this.head=node1;
    this.size++;
    

    
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let node2=new Node(val);
    if(this.head===null){
        this.head=node2
    }
    else{
        let current=this.head;
    while(current.next!=null){
        current=current.next;
    }
    current.next=node2;

    }
    this.size++;
    
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index >this.size){
        return
    }
    if(index===0){
        this.addAtHead(val);

        return;
    }
    let node3= new Node(val)
    let current=this.head;
    let count=0;
    while(count<index-1){
        current=current.next;
        count++
    }
    node3.next=current.next;
    current.next=node3;
    this.size++
  
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index<0 || index>=this.size){
        return;
    }
   if(index===0){
    this.head=this.head.next
    this.size--;
    return
   }


    let current=this.head;
    let count=0;
    while(count <index-1){
        current=current.next
        count++
    }
    current.next=current.next.next
    this.size--;
};



// detected cycle in the linkedlist 
var hasCycle = function(head) {
    let seenNode= new Set();
    let curr=head;
    while(curr!=null){
        if(seenNode.has(curr)){
            return true;
        }
        seenNode.add(curr);
        curr=curr.next;
    }
    return false;
    
};


// Reversing a linkedlist 
var reverseList = function(head) {
    let prev=null;
    let curr=head;
    while(curr!=null){
        let temp=curr.next;
        curr.next=prev;
        prev=curr;
        curr=temp
    }
    head=prev;
    return head;
    
};