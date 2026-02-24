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
//Reversing a linkedlist 
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
// getting  the ibntersection of two linkedlist 
var getIntersection = function(headA, headB){

    let a1 = headA;
    let seenLinkedlist = new Set();

    // store all nodes of first list
    while(a1){
        seenLinkedlist.add(a1);
        a1 = a1.next;
    }

    // check second list
    let a2 = headB;
    while(a2){
        if(seenLinkedlist.has(a2)){
            return a2;
        }
        a2 = a2.next;
    }

    return null;
}
