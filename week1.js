//////////////day1

/* Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. 
Print the decimal value of each fraction on a new line with 6 places after the decimal.
Note: This challenge introduces precision problems. 
The test cases are scaled to six decimal places, though answers with absolute error of up to 10^-4 are acceptable. */

let arr = [1,1,0,-1,-1]

function plusMinus(arr) {
 let countArr = new Array(3).fill(0)
for(let i=0;i<arr.length;i++){
  if(arr[i] > 0){
   countArr[0]++ 
  }else if(arr[i]<0){
    countArr[1]++
  }else{
    countArr[2]++
  }

}
countArr.map((value)=>console.log((value/arr.length).toFixed(6)))

}

plusMinus(arr)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////day2