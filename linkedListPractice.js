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

