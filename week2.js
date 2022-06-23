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
/////////////////////////////////////////////////////////
/////day4
/* It is New Year's Day and people are in line for the Wonderland rollercoaster ride.
 Each person wears a sticker indicating their initial position in the queue from 1 to n.
  Any person can bribe the person directly in front of them to swap positions, but they still wear their original sticker. 
One person can bribe at most two others.
Determine the minimum number of bribes that took place to get to a given queue order.
 Print the number of bribes, or, if anyone has bribed more than two people, print Too chaotic. */
 let q=[1,2,3,5,4,6,7,8]

 function minimumBribes(q) {
    let bribesCount = 0;
    let i = q.length - 1;
    //whilelength >=0
    while (i>=0) {
        const originalI = q[i] - 1;       //8
        const differences = originalI - i;//7

        if (differences <= 0) {
            i--;                 
            continue;
        }
        //more than 2 bribes
        if (differences > 2) {
            console.log('Too chaotic');
            return;
        }

        bribesCount += differences;

        const temp = q[i];
        for (let j=0; j<differences; j++) {
            q[i+j] = q[i+j+1];
        }
        q[originalI] = temp;
    }

    console.log(bribesCount);

}
console.log(minimumBribes(q))
//////////////////////////////////////////////////////////////////////
//////////day5
/* There are n different online courses numbered from 1 to n.
 You are given an array courses where courses[i] = [durationi, lastDayi] 
 indicate that the ith course should be taken continuously for durationi days and must be finished before or on lastDayi.
You will start on the 1st day and you cannot take two or more courses simultaneously.
Return the maximum number of courses that you can take.
Input: courses = [[100,200],[200,1300],[1000,1250],[2000,3200]]
Output: 3
Explanation: 
There are totally 4 courses, but you can take 3 courses at most:
First, take the 1st course, it costs 100 days so you will finish it on the 100th day, and ready to take the next course on the 101st day.
Second, take the 3rd course, it costs 1000 days so you will finish it on the 1100th day, and ready to take the next course on the 1101st day. 
Third, take the 2nd course, it costs 200 days so you will finish it on the 1300th day. 
The 4th course cannot be taken now, since you will finish it on the 3300th day, which exceeds the closed date. */
let courses = [[100,200],[200,1300],[1000,1250],[2000,3200]]
var scheduleCourse = function(courses) {
    courses.sort((a,b) => a[1] - b[1])
    let total = 0, pq = new MaxPriorityQueue({priority: x => x})
    for (let [dur, end] of courses)
        if (dur + total <= end)
            total += dur, pq.enqueue(dur)
        else if (pq.front() && pq.front().element > dur)
            total += dur - pq.dequeue().element, pq.enqueue(dur)
    return pq.size()  
};