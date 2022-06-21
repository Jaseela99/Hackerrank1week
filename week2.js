/* Julius Caesar protected his confidential information by encrypting it using a cipher. 
Caesar's cipher shifts each letter by a number of letters.
 If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. 
 In the case of a rotation by 3, w, x, y and z would map to z, a, b and c. */

 /* let s = "There's-a-Car-outside."
 let k=3 
 function caesarCipher(s, k) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    //if k=26--->no need to rotate-----so  k=26%26 ==0 
    k %= alphabet.length
    //it takes the array from kth index and then part from 0to k are concated to last part of the array
    const rotate = alphabet.slice(k).concat(alphabet.slice(0,k))
    let encrypted =""
    //for every i in s
    for(let i in s){
        //if alphabet includes that
        alphabet.includes(s[i])?
        //its index in alphabet is found out and rotated and stored in encrypted
        encrypted += rotate[alphabet.indexOf(s[i])] :
        //for capital s[i] is converted in to lowercase and done the same and then change it in to upper case
        alphabet.includes(s[i].toLowerCase())?
        encrypted += rotate[alphabet.indexOf(s[i].toLowerCase())]
        .toUpperCase() :
        //for characters other than alphabet
        encrypted +=s[i]
    }
    return encrypted
}
console.log(caesarCipher(s,k))
 */
////////////////////////////////////////////////////////////////////////
//////////day2
/* Given a square grid of characters in the range ascii[a-z], rearrange elements of each row alphabetically, ascending.
 Determine if the columns are also in ascending alphabetical order, top to bottom. Return YES if they are or NO if they are not */

 let grid =["abc","ade","bdf"]
 function gridChallenge(grid) {
    //for every row in grid
    for (let row in grid) {
        //sorting every row in grid
        grid[row] = grid[row].split('').sort().join('');
    
        if(row == 0) continue;
    //for every col in grid rows
        for (let col in grid[row]) {
            //comparing cols if they are not ascending return no
            if (grid[row][col] < grid[row - 1][col]) {
                return "NO";
            }
        }
    }
    
    return "YES";
}
console.log(gridChallenge(grid))
///////////////////////////////////////////////////////////////////////////////////////////
/////////////////////day3
/* We define super digit of an integer x  using the following rules:
Given an integer, we need to find the super digit of the integer.
If x has only 1 digit, then its super digit is x.
Otherwise, the super digit of x is equal to the super digit of the sum of the digits ofx . */
let n='8'
let k=4
function superDigit(n, k) {
    //to number
    if (n.length <= 1) return parseInt(n)
    //to array---> sum is found --->sum initial=0 k-no of repitions
    const sum= n.split('').reduce((sum, curr) => sum + parseInt(curr), 0) * k    
    //conerted to string  
    const sumStr= sum.toString()      
    //if sum str is 1 sum is returned else recursion
    return sumStr.length === 1 ? sum : superDigit(sumStr, 1)

}
console.log(superDigit(n,k))