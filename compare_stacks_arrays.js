function compare_stacks(arr1,arr2){
  if(arr1.length != arr2.length){
  	return false
  }
  for(var i = 0; i < arr1.length; i++){
  	if(arr1[i] !== arr2[i]){
  		return false
  	}
  }
  return true
}


var arr1 = [1, 2, 3, 4, 5, 6]
var arr2 = [1, 2, 3, 4, 5, 6]
var test1 = compare_stacks(arr1, arr2)
console.log(test1)

var arr3 = [1, 2, 3, 4, 5, 6]
var arr4 = [1, 2, 3, 4, 6, 6]
var test2 = compare_stacks(arr3, arr4)
console.log(test2)

arr5 = [1, 2, 3, 4, 5, 6]
arr6 = [1, 2, 3, 4, 5]
var test3 = compare_stacks(arr5, arr6)
console.log(test3)