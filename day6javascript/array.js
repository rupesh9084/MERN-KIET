const msg=()=>console.log("arow function")
let arr=[1,2,3,4,5,'5',"kiet",msg]
// console.log(arr)
// arr[7]()
// for(let i=0;i<arr.length;i++){
//     console.log(`value of ${i} is ${arr[i]}`)
// }
// for(let i in arr){
//     console.log(`value of ${i} is ${arr[i]}`)
// }
// for(let i of arr){
//     console.log(`value of is ${i}`)
// }
// arr.forEach(value=>console.log(`value of is ${arr.value}`))
//    let array=[1,2,3,4,5]
// let b=array.filter((a)=>{
//     return a%2===0
    
// })
// console.log(`value of is ${b}`)
let rup=[1,2,3,4,5]
let d=rup.reduce((a,b)=>{
    return a*b
    
})
console.log(`value of is ${d}`)
