function binarySearch(num, arr){
  // Code goes here!
  // console.log(num)
  // console.log(arr)
  arr.sort()
  if (arr.length == 0) {
    return -1
  }
  else {
    if (arr.length % 2 == 1) {
      let middleValue = [arr.length - 1)/2]
  } else {
    let middleValue = [((arr.length/2)-1),((arr.length/2)+1)]
  }
  if (middleValue.includes(num)) {
    return num
  }
  else {
    
  }

}

var smallArray = [1,2,3,4,5]
var largeArray = [1,5,7,2,3,8,4,9]

console.log(binarySearch(1, smallArray) === 0);
console.log(binarySearch(2, smallArray) === 1);
console.log(binarySearch(3, smallArray) === 2);
console.log(binarySearch(4, smallArray) === 3);
console.log(binarySearch(5, smallArray) === 4);
console.log(binarySearch(7, largeArray) === 5);
