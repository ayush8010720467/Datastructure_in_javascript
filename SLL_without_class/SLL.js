function createNewNode(data){
    return {
        data:data,
        next:null
    }
}
// the function to create the dummy linked list contaning 3 elements as
// 1 -> 2 -> 4
function createDummySLL(){
    let list = {};
    list.head = this.createNewNode(1);
    let secondNode = this.createNewNode(2);
    let thirdNode = this.createNewNode(3);
    list.head.next = secondNode;
    secondNode.next = thirdNode;
    return list;
}
// traversal through the linked list in the recursive way
function traversalOfLinkedList(singlyLinkedList){
    // itrate through the list if the list is not empty
    if(singlyLinkedList !== undefined && singlyLinkedList !== null) {
        console.log(singlyLinkedList.data);
        // the base condition for the recursion to terminate
        if(singlyLinkedList.next) {
            traversalOfLinkedList(singlyLinkedList.next);
        } else {
            console.log( " End of the linked list");
        }
        
    } else {
        console.log( "No element found in the linked list");
    }
}
// inserting the element in the linked list
// // This section would contain three parts
// // the first being insertion at the front of the linked list

// // // let the linked list is 
// // // 
////////   head -> 1 ->2 -> 3
/////// 
///////// after inserting the element 4 the linked list should look like
////////   head ->4-> 1 ->2 -> 3

function insertAtFront(elem , list){
    let newNode = this.createNewNode(elem);
    newNode.next = list.head;
    list.head = newNode;
}

// // second being insetion at the nth position of the linked list

// // // let the linked list is 
// // // 
////////   head -> 1 ->2 -> 3
/////// 
///////// after inserting the element 4 at 2nd position the linked list should look like
////////   head ->1 -> 4 ->2 -> 3 

function insertAtNthPosition(elem,pos,list){
    let newNode = this.createNewNode(elem);
    // the count variable actualy counts the total nodes travesed
    let count = 0;
    let temp;
    if(!(list.head)){
        // the list is empty
        if(pos === 1){
            // a valid pos
            list.head = newNode;
        } else{
            // the position is invalid
            console.log("Error during insertion No such position can be found");
            return;
        }
    } else{
        // the list is not empty
        // check for the length of the list
        var lengthOfList = this.getLength(list);
        if(pos === lengthOfList+1){
            // insert at the end of the list 
            this.insertAtEnd(elem,list)
        } else{
            if(pos<= lengthOfList && pos >0){
                if(pos === 1){
                    this.insertAtFront(elem,list);
                }
                else{
                    // iterate to pos-1 and then add the new node
                    let count = 1;
                    let temp = list.head;
                    while(temp.next && count < pos-1){
                        temp = temp.next;
                        count = count +1;
                    }
                    newNode.next = temp.next;
                    temp.next = newNode;               
                }
            } else{
                // the position is invalid
                console.log("The POSITION ENTERED IS INVALID");
                return;
            }
        }
    }

}

function getLength(list){
    var temp = list.head;
    var len = 0;
    while(temp){
        len++;
        temp = temp.next;
    }
    return len;
}

// // and the last being at the end of the linked list

// // // let the linked list is 
// // // 
////////   head -> 1 ->2 -> 3
/////// 
///////// after inserting the element 4 the linked list should look like
////////   head ->1 ->2 -> 3 ->4

// for this task we need to traverse through the end of the linkedlist and point the last_nodes.next to newNode
function insertAtEnd(elem,list){
    let temp;
    // first create the element
    let newNode = this.createNewNode(elem);
    // if the list has no elements
    if(list.head === undefined || list.head === null){
        list.head = newNode;
    } else{
        // if the linked list is not empty
        // then iterate through the list till the end and add the new node to the end of the linked list
        // here for in loop cant be used as the loop itrates over the keys of object and the key here is head only
        temp = list.head;
        while(temp.next){
            temp = temp.next;
        }
        temp.next = newNode;
    }
    
}

// Deletion of the node in the linked list

// delete a node on the first occurance of the key
function deleteNodeFirstOccurance(key, list){
    let temp = list.head;
    let previousNode = null;
    // first find the node and if the node is found then delete the node from the linked list
    if (temp !== null && temp.data === key){
       // this means that the first element of the list is the desired node
       list.head = temp.next;
       return;
    }
    while(temp!== null && temp.data !== key){
        prev = temp;
        temp = temp.next;
    }
    if(temp === null){
        // could not find the key 
        return;
    } 
    prev.next = temp.next;
}
function deleteNodeAtNthPosition(pos, list){
    let temp = list.head;
    let prev = null;
    let count = 1;
    if( temp !== null && count === pos){
        // if the position is first position
        list.head = temp.next;
        return;
    }
    while( temp!== null && count!=pos){
        // iterate through the linked list
        prev = temp;
        temp = temp.next;
        count++;
    }
    if (temp === null){
        // could not find the position 
        return;
    }
    prev.next = temp.next;
}
function getNthNodeFromLast_M1(n, list){
    // in this method first we calculate the length of the linked list 
    let len = this.getLength(list);
    // then compute Length - n and then iterate through the linked list till the length -n elements
    if(n> len){
        return;
    }
    let pos = len - n;
    let temp = list.head;
    for(let i=1;i<pos+1;i++){
        temp = temp.next;
    }
    return temp.data;
}
function getNthNodeFromLast_M2(n, list,i=0){
    // Here we use the recursive approach to solve this problem
    if(list.head === null){
        return;
    }
    getNthNodeFromLast_M2(n,list.next,i);
    if(++i === n){
        return list.data;
    }
}
// method 3

var list = this.createDummySLL();
console.log(this.list);
// this.insertAtFront(9,this.list);
// this.insertAtEnd(9,this.list);
this.insertAtNthPosition(12,4,this.list);
this.insertAtNthPosition(11,4,this.list);
this.insertAtNthPosition(10,4,this.list);
this.deleteNodeAtNthPosition(4,this.list);
console.log(this.list)
console.log(this.getLength(this.list));
// this.traversalOfLinkedList();
// this.deleteNodeFirstOccurance(2,this.list);
// console.log(this.list);
