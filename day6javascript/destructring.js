// let arr=[10,20,30,40]
// // let x=arr[0]
// // let y=arr[1]
// // let z=arr[2]
// // let a=arr[3]
// let [x,y,z,a]=arr
// console.log(x,y,z,a)

let obj={
    name:"rupesh",
    rollno:2300190140150,
    course:"mca",
}
let {name,rollno,course:mycourse}=obj
console.log(name,mycourse,rollno)