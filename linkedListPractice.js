// // detected cycle in the linkedlist 
// var hasCycle = function(head) {
//     let seenNode= new Set();
//     let curr=head;
//     while(curr!=null){
//         if(seenNode.has(curr)){
//             return true;
//         }
//         seenNode.add(curr);
//         curr=curr.next;
//     }
//     return false;
    
// };
// //Reversing a linkedlist 
// var reverseList = function(head) {
//     let prev=null;
//     let curr=head;
//     while(curr!=null){
//         let temp=curr.next;
//         curr.next=prev;
//         prev=curr;
//         curr=temp
//     }
//     head=prev;
//     return head;
    
// };
// // getting  the ibntersection of two linkedlist 
// var getIntersection = function(headA, headB){

//     let a1 = headA;
//     let seenLinkedlist = new Set();

//     // store all nodes of first list
//     while(a1){
//         seenLinkedlist.add(a1);
//         a1 = a1.next;
//     }

//     // check second list
//     let a2 = headB;
//     while(a2){
//         if(seenLinkedlist.has(a2)){
//             return a2;
//         }
//         a2 = a2.next;
//     }

//     return null;
// }

// Adding a node in the front of the head in linkedlist 
// function AddNodeINFRONT(val){
// let node1=new node(val);
// node1.next=this.head;
// this.head=node1;
// this.size++;
// }


// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// function insertAtFront(head, val) {
//     let newNode = new Node(val);

//     newNode.next = head;

//     head = newNode;

//     return head;
// }

// let head = new Node(10);
// head.next = new Node(20);
// head.next.next = new Node(30);

// head = insertAtFront(head, 5);

// let temp = head;

// while(temp){
//     console.log(temp.data);
//     temp = temp.next;
// }

class Node {
    constructor (data){
  this.data=data;
    this.next=next;
    }
}

// function InsertAtHEad(head,val){
//     let node1= new node(val);
//     node1.next=head;
//     head=node1;
//     return head;


// }
// let head=new node(10);
// head.next=new node(20);
// head.next.next= new node(30);

// head=nsertAtHEad(head,40);

// let temp=head;
// while(temp){
// console.log(temp.data)
// temp=temp.next;

// }

// function addtailinthelinkedlist(head, val){
//     let current=this.head;
//     while(current.next!=null){
//         current=current.next;

//     }
//     let node1=new node(val);
//     current.next=node1;
//     this.size++;
// }



// function addParticularIndex( head , val, index ){
//     let node3= new node(val);
//     let current=this.head;
//     while(curent.next <index-1){
//         current=current.next;

//     }
//     node3.next=current.next;
//     current.next=node3;

    

// }

// function todeletedanode(head,index){
//     let current=this.head;
//     while(current<index){
//         cureent=current.next;

//     }
//     curent.next=cureent.next.next;

// }



function findMiddle(head){
    let slow=head;
    let fast=head;
    while(fast!=null && fast.next!=null){
        solw=slow.next;
        fast=fast.next.next;
    }
}
return slow 


function DetactLoop(head){
    let slow=head;
    let fast=head;
    while(fast!=null && fast.next!=null){
        slow=slow.next;
        fast=fast.next.next
    }
    if(slow==fast){
        return true
    }
    return false;
}