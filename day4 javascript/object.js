let info={
   rollno:1,
   name:"rupesh gupta",
   course:"mca",
   college:"kiet",
   marks:[25,15,60,45],
   music:()=>console.log("play music")

}
let arr=[info,info,info,info]
arr.forEach(element => {
    return element
   
});
console.log(arr)
