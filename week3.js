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
