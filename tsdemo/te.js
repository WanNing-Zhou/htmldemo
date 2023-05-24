

const fn = async ()=>{

    return {
        a:'1',
        b:1
    }
}
const {a,b} = fn();
console.log('promise',fn())
console.log(a,b)


 const fu = async() =>{
     const {a,b} = await fn();
     console.log(a,b)
 }
 fu()

