/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
     let arr=[];
    function traveral(node){
        if(!node) return;
        arr.push(node.val);
        traveral(node.left);
        traveral(node.right);
      
    }
     traveral(root);
    return arr;
    
};


var inorderTraversal = function(root) {
    let arr=[];
    function traversal(node){
     if(!node) return;
     traversal(node.left);
     arr.push(node.val);
     traversal(node.right);

    }
    traversal(root);
    return arr;
    
};  


var postorderTraversal = function(root) {
     let arr=[];
    function traversal(node){
     if(!node) return;
     traversal(node.left);
     traversal(node.right);
       arr.push(node.val);
    }
    traversal(root);
    return arr;
    
};    

// preorder traversal using itrrative code 

function preorder(root){
    if(!root) return [];
    let ans=[];
    let stack=[];
    ans.push(root.val);
    if(root.right) stack.push(root.right);
    if(root.left) stack.push(root.left);
    while(stack.length>0){
        let curr=stack.pop();
    
            ans.push(curr.val);
            if(curr.right) stack.push(curr.right);
            if(curr.left) stack.push(curr.left);
        
    }
    return ans;
}


// Itrative coce for inorde

function inorderTraversal(root){
    let ans =[];
    let stack=[];
    let curr=root;
    while(curr || stack.length >0){
        while(curr){
           stack.push(curr);
            curr=curr.left;
        }
         curr=stack.pop();
         ans.push(curr.val);
         curr=curr.right;



    }
    return ans;

}