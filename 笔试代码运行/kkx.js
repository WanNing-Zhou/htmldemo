
var readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.on('line', function (str) {
    const m = {}
    for(let k of str){
        if(k === ' ') continue
        if(k in m){
            m[k]++
        } else {
            m[k] = 1
        }
    }
    console.log(m)
})