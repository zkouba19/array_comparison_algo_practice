function Node(value){
  this.val = value;
  this.next = null;
}
function SLL(){
	this.head = null
	this.tail = null
	this.push = function(node){	
		if(!this.head){
			this.head = node
			this.tail = node
			return this
		}
		else{
			this.tail.next = node
			this.tail = this.tail.next
			return this
		}
	}
	this.pop = function(){
		if(!this.head){
			return this
		}
		if(!this.head.next){
			this.head = null
		}
		curr = this.head
		while(curr.next.next){
			curr = curr.next
		}
		curr.next = null
		return this
	}
	this.compare_stacks = function compare_stacks(sll){
  		if(!this.head && !sll.head){
  			return true
 		 }
  		if(!this.head || !sll.head){
  			return false
  		}
	  if(this.head.val !== sll.head.val){
	  	return false
	  }
	  var curr1 = this.head
	  var curr2 = sll.head
	  while(curr1.next || curr2.next){
	  	if(!curr1.next || !curr2.next){
	  		return false
	  	}
	  	else if(curr1.next.val !== curr2.next.val){
	  		return false
	  	}
	  	curr1 = curr1.next
	  	curr2 = curr2.next
	  }
	  return true 
	}
}



var list1 = new SLL()
var node1 = new Node(value = 1)
list1.push(node1)
var node2 = new Node(2)
list1.push(node2)
var node3 = new Node(3)
list1.push(node3)
var node4 = new Node(4)
list1.push(node4)
// end of first list & nodes
var list2 = new SLL()
var node5 = new Node(1)
list2.push(node5)
var node6 = new Node(2)
list2.push(node6)
var node7 = new Node(3)
list2.push(node7)
var node8 = new Node(4)
list2.push(node8)
// end of second list & nodes
var list3 = new SLL()
var node9 = new Node(1)
list3.push(node9)
var node10 = new Node(2)
list3.push(node10)
var node11 = new Node(3)
list3.push(node11)
var node12 = new Node(4)
list3.push(node12)
var node13 = new Node(13)
list3.push(node13)
// end of third list & nodes
var list4 = new SLL()
// end of fourth list
var list5 = new SLL()
// end of fifth list
var test1 = list1.compare_stacks(list2)
console.log("Below should be True")
console.log(test1)
var test2 = list1.compare_stacks(list3)
console.log("Below should be false")
console.log(test2)
var test3 = list1.compare_stacks(list4)
console.log("Below should be False")
console.log(test3)
var test4 = list4.compare_stacks(list5)
console.log("Below should be True")
console.log(test4)









