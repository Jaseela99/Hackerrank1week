//Implement a simple text editor. 
function processData(input) {
    const lines = input.split('\n')
   lines.shift()
   
   const state = []
   const getLast = () => state[state.length - 1] || ''
   
   const OPs = {
       '1': (input) => {
           state.push(getLast() + input)
       },
       '2': (input) => {
           const last = getLast()
           const str = last.substr(0, last.length - parseInt(input))
           state.push(str)
       },
       '3': (input) => {
           console.log(getLast()[parseInt(input) - 1])
       },
       '4': (input) => {
           state.pop()
       },
   }
   
   for (const line of lines) {
       const [op, input] = line.split(' ')
       OPs[op](input)
   }
} 
//////////////////////////
////////day2

///////////lego bocks

function legoBlocks(n, m) {
    var mod = BigInt(Math.pow(10, 9) + 7);
   var oneFloor = [];
   var dirtyMultiFloor = [];
   var cleanMultiFloor = [];

   oneFloor = [0n, 1n, 2n, 4n, 8n];

   for (let width = 1; width <= m; width++) {
       if (width > 4) {
           oneFloor[width] = (oneFloor[width - 1] + oneFloor[width - 2] + oneFloor[width - 3] + oneFloor[width - 4]) % mod;
       }

       dirtyMultiFloor[width] = 1n;
       for (let k = 0; k < n; k++) {
           dirtyMultiFloor[width] *= oneFloor[width];
           dirtyMultiFloor[width] %= mod;
       }
   }


   for (let width = 1; width <= m; width++) {
       cleanMultiFloor[width] = dirtyMultiFloor[width] + mod;
       for (let k = 1; k < width; k++) {
           cleanMultiFloor[width] -= (cleanMultiFloor[k] * dirtyMultiFloor[width - k]) % mod;
           cleanMultiFloor[width] += mod;
       }
   }

   return cleanMultiFloor[m] % mod;
}
///////////////////////////////////////////////////////
/////////////////jesse cookies
let k=9
let A=[2,3,7,6,4,6]

function cookies(k, A) {
    let i = 0, j = 0, n = 0, C = []

  A.sort((a, b) => a - b)
  if (A[0] >= k) return 0
  if (A.length < 2) return -1

  while (i < A.length || j < C.length - 1) {

    C.push(i >= A.length ? C[j++] + 2 * C[j++] : [1, 2]
      .map(v => (A[i]<C[j] || j>=C.length) ? v*A[i++] : v*C[j++])
      .reduce((t, v) => t + v, 0))

    n++

    if ((A[i] >= k || i >= A.length) && C[j] >= k) return n
  }

  return -1

}
