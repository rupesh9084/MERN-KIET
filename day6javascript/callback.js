let sum=(num1,num2,msg)=>{
    let s=num1+num2
    msg(s)
}
// let print=(msg)=>{
//     console.log(msg)
// }
sum(10,5,(sum)=>{
    if(sum%2===0){
        console.log("the sum of a and b is even number")
    }else{
        console.log("the sum of a and b is odd number")
    }
});