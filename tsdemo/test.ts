
interface aaa{
    b:string,
    c:number
}

// @ts-ignore
const fn = async ():Promise<aaa> =>{
    await setTimeout(()=>{
        console.log('aaa')
    })
    return {
        b:'1',
        c:1
    }
}
const cat = {
    age:'11'
}

// @ts-ignore
const fn2 = async():Promise<string>=>{
    return cat.age;
}

const a = fn2();
console.log('a',a)

