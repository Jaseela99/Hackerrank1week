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
/* Given pointers to the heads of two sorted linked lists, merge them into a single, sorted linked list. 
Either head pointer may be null meaning that the corresponding list is empty. */
function mergeLists(head1, head2) {
    if (!head1) return head2
    if (!head2) return head1
    
    if(head1.data < head2.data){
        return {"data": head1.data, "next": mergeLists(head1.next, head2)}
    }else{
        return {"data": head2.data, "next": mergeLists(head1, head2.next)} 
    }

}
//////////////////////////////////////////////////
/////////////day 6
/* A queue is an abstract data type that maintains the order in which elements were added to it, allowing the oldest elements to be removed from the front and new elements to be added to the rear. This is called a First-In-First-Out (FIFO) data structure because the first element added to the queue (i.e., the one that has been waiting the longest) is always the first one to be removed.
A basic queue has the following operations:
Enqueue: add a new element to the end of the queue.
Dequeue: remove the element from the front of the queue and return it.
In this challenge, you must first implement a queue using two stacks. Then process q queries, where each query is one of the following 3 types:
1 x: Enqueue element x into the end of the queue.
2: Dequeue the element at the front of the queue.
3: Print the element at the front of the queue. */
function processData(input) {
    let data = input.split("\n");
    let queue = [];
    for (let i=1; i < data.length; i++){
        let arg = data[i].split(' ');
        if (arg[0] == 1)
                queue.push(arg[1]);
        else if (arg[0] == 2)
                queue.shift();
        else if (arg[0] == 3)
                console.log(`${queue[0]}`);
    }
} 
///////////////////////////////////////////////////
////////////day7---balanced brackets
function isBalanced(s) {
    const b = s.split("");
    const openers = ["{", "[", "("];
    const closers = ["}", "]", ")"];
    for (let i = 0; i < b.length; i += 1) {
        if (i === b.length - 1 && !closers.includes(b[i])) {
            return "NO";
        }
        if (closers.includes(b[i])) {
            const index = closers.indexOf(b[i]);
            if (b[i - 1] !== openers[index]) {
                return "NO";
            } else {
                // remove the 2 elements
                b.splice(i - 1, 2);
                // reset the pointer
                i -= 2;
            }
        }
    }
    return "YES";
}





