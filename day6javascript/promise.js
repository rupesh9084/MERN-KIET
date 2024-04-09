let age=10
let info=new Promise((resolve,reset)=>{
    if(age>=20){
        resolve("you can vote")
    }
    else{
        reset("you cant vote")
    }
})

info.then(result=>console.log(result)).catch(error=>console.log(error))

let result=async()=>{
    try{
    let result=await info;
    console.log(result)}
catch(err){
    console.log(err)
}}

result()