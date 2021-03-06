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

/* let arr=[1,3,5,9,7]
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
 */
////////////////////////////////////////////////////////////////////////////////

/////////////////day 3

/* Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock. */

/* let s = '05:01:00PM'

function timeConversion(s) {
  //only time
  let time = s.substring(0,8)
  //am or pm
  let merediem = s.substring(8)
  //converting in to array 
  let array = time.split(":")
  //if pm 
  if( merediem ==="PM"){
    //arr[0]!==12
    if(array[0]!=="12"){
      //converted in to number and 12 is added to it
      array[0]= parseInt(array[0])+12
    }
    //am
  }else{
    if(array[0]==="12"){
      //12 is replaced with 00
      array[0]="00"
    }
  }
  //converted to string without merediem 
return array.join(":")
}

console.log(timeConversion(s)) */

//******************************************************************** */
//given an arr of odd  number of elements ,find the median

/* let arr =[1,3,4,7,8]

function findMedian(arr){
  //sorting
  let newArr = [...arr].sort((a,b)=> a-b)
  //its length/2
  let mid =Math.floor(arr.length/2)
  //if length is odd  middle num is median,else average of the two middle numbers
  return arr.length%2 !==0 ? newArr[mid] :(newArr[mid-1]+newArr[mid])/2

}
console.log(findMedian(arr)) */

//////////////////////////////////////////////////////////////////////////////////////////

//////////////day 4

//Given an array of integers, where all elements but one occur twice, find the unique element.
let a = [1,2,3,3,2]
function lonelyinteger(a) {
  //set 
let set = new Set()
//for each elemnt in x , if set has that element it will be deleted and else it will be added
a.forEach((x)=>set.has(x) ? set.delete(x):set.add(x))
//converting set in to array and returning the first element
return Array.from(set)[0]

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// if first index of n =last index then n is found and returned
//return a.find( n => a.indexOf(n) === a.lastIndexOf(n))
}
console.log(lonelyinteger(a))

//////////////////////////////////////////////////////////////////////////////

///day5
//Given a square matrix, calculate the absolute difference between the sums of its diagonals.

/* let arr = [[1,2,3],
           [4,5,6],
           [7,8,9]]

function diagonalDifference(arr) {

  //left and right diagonal sum
  let leftSum=0;
  let rightSum=0; */
  
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! up to this common
  /*let col = arr[0].length //3
  //i =0 to 2 j=2 to 0
  for(let i=0,j=col-1;i<col;i++,j--){
      leftSum += arr[i][i] //principal diagonal -->[0][0] [1][1] [2][2]
      rightSum += arr[i][j]//right diagonal -->[2][0] [1][1] [0][2] 
  } */

  //************************************************************************** */

  /* for(let i=0;i<arr.length;i++ ){
    leftSum+= arr[i][i]  
    rightSum+= arr[i][arr.length-1-i] //here col= row  so, j=collength-1 -i
  } */

  //!!!!!!!!!!!!!!!!!!!!!!!!!!!! after this common
  /* let difference = Math.abs(leftSum-rightSum) //to get positive diff
   return difference
        
        }
        console.log(diagonalDifference(arr))

 */

 /////////////////////////////////////////////////////////////////////////////////
/////day6


//counting sort -non comparison sorting
//for a range k ,arr of size n ; we create a new arr of size k and increment its index w.r.t n sized arr
//Given a list of integers, count and return the number of times each value appears as an array of integers.

let string ="63 25 73 1 98 73 56 84 86 57 16 83 8 25 81 56 9 53 98 67 99 12 83 89 80 91 39 86 76 85 74 39 25 90 59 10 94 32 44 3 89 30 27 79 46 96 27 32 18 21 92 69 81 40 40 34 68 78 24 87 42 69 23 41 78 22 6 90 99 89 50 30 20 1 43 3 70 95 33 46 44 9 69 48 33 60 65 16 82 67 61 32 21 79 75 75 13 87 70 33"
let arr = string.split(",")

function countingSort(arr) { 
  //range =100  so we create a new arr with 0 s as element and length=100
  let countingArray = Array(100).fill(0)
  //for every num in arr 
  for(let num of arr ){
    //countarray s num increases
      countingArray[num]++
  }
  return countingArray

}

//////////////////////////////////////////////////////////////
////////day7

/* Given an array of n distinct integers, transform the array into a zig zag sequence by permuting the array elements.
 A sequence will be called a zig zag sequence if the first k elements in the sequence are in increasing order and the last k elements 
 are in decreasing order, where k=(n+1/2). You need to find the lexicographically smallest zig zag sequence of the given array.
 */



//let an= [2,3,5,1,4]

//*********************************************************** */

/* Two players are playing a game of Tower Breakers! Player 1 always moves first, and both players always play optimally.The rules of the game are as follows:
Initially there are n towers.
Each tower is of height m.
The players move in alternating turns.
In each turn, a player can choose a tower of height x and reduce its height to y, where 1<=y<x  and  evenly dividesx .
If the current player is unable to make a move, they lose the game.
Given the values of n and m, determine which player will win. If the first player wins, return 1. Otherwise, return 2. */
let n=2
let m=6
function towerBreakers(n, m) {
  if(n%2==0){ return 2 } if(m==1){ return 2 } else{ return 1 }

}
