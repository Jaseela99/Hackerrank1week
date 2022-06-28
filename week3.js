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
