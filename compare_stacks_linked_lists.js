function Node(val){
  this.val = val;
  this.next = null;
}
function SLL(){
  this.head = null
}
function compare_stacks(arr1,arr2){
  if(!arr1.head && !arr2.head){
  	return true
  }
  if(!arr1.head || !arr2.head){
  	return false
  }
  if(arr1.head.val !== arr2.head.val){
  	return false
  }
  var curr1 = arr1.head
  var curr2 = arr2.head
  while(curr1.next || curr2.next){
  	if(curr1.next.val !== curr2.next.val){
  		return false
  	}
  	curr1 = curr1.next
  	curr2 = curr2.next
  }
  return true 
}
