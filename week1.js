//////////////day1

/* Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. 
Print the decimal value of each fraction on a new line with 6 places after the decimal.
Note: This challenge introduces precision problems. 
The test cases are scaled to six decimal places, though answers with absolute error of up to 10^-4 are acceptable. */

/* let arr = [1,1,0,-1,-1]

function plusMinus(arr) {
  //made a new arr of length 3 and filled it with 0 as elements
 let countArr = new Array(3).fill(0)
 //looping through given array
for(let i=0;i<arr.length;i++){
  //if element is positive; first element in countArr increases by 1
  if(arr[i] > 0){
   countArr[0]++ 
   //if negative secong inc by 1
  }else if(arr[i]<0){
    //if 0 ,third inc by 1
    countArr[1]++
  }else{
    countArr[2]++
  }

}
// mapping through countArr and each of the elemnt in it is divided by arr.length to get ratio
countArr.map((value)=>console.log((value/arr.length).toFixed(6)))

}

plusMinus(arr) */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////day2
/* Given five positive integers,
 find the minimum and maximum values that can be calculated by summing exactly four of the five integers.
  Then print the respective minimum and maximum values as a single line of two space-separated long integers.
arr: an array of 5 integers
Print two space-separated integers on one line: the minimum sum and the maximum sum of  of  elements.
A single line of five space-separated integers. */

let arr=[1,3,5,9,7]
  function miniMaxSum(arr) {
    //sort to get increasing order  
let newArr =arr.sort((a,b)=>  a- b) //bcoz else 1,10, 100 ,2,3  this is the way it sort ,considers only first place of the integer
//to get min we need first 4 elements ,so we use slice and then reduce it
let min = newArr.slice(0,arr.length-1).reduce((a,b)=>a+b) //1,3,5,7 =>nums[arr.length-1] will not be stored
//last 4 elements
let max = newArr.slice(1).reduce((a,b)=>a+b) //removes the first element => 3,5,7,9 
console.log(min, max)
}

miniMaxSum(arr)

////////////////////////////////////////////////////////////////////////////////

/////////////////day 3