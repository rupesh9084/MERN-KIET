
const fetchdata= async()=>{
let data= await fetch("https://api.github.com/users")
const a=await data.json()

// // let displayinfo="<table>"
// // displayinfo+="<tr>"
// // displayinfo+="<th>ID</th><th>name</th><th>photo</th>"
// // displayinfo+="</tr>"
// // for(let person of data){
// //     displayinfo+="<tr>"
// // displayinfo+=`<td>${person.id}`
// // displayinfo+="</tr>"
// // }

  console.log(a[0].login)
 console.log(a[0].url)
  console.log(a[0].id)
 }

