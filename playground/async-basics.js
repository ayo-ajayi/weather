console.log('first code')


setTimeout(()=>{
    console.log('Inside the callback')
}, 2000)

setTimeout(()=>{
    console.log('Inside the SECOND callback')
}, 0)

console.log('second code')