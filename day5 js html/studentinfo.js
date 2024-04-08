let validata=()=>{
let nameerror=mobileerror=emailerror=langerror
let obj={
    name:"",
    mobile:"",
    email:"",
    lang:"",
}
const name=document.studentfrm.name.value
const mobile=document.studentfrm.mobile.value
const email=document.studentfrm.email
const lang=document.studentfrm.lang.value
if(name===""){
    printerror("nameerror","please enter your name")
}else{
    printerror("nameerror"," ")
    nameerror=false;
}
if(mobile===""){
    printerror("nameerror","please enter your mobile")
}else{
    printerror("mobileerror"," ")
    mobileerror=false;
}
if(email===""){
    printerror("nameerror","please enter your email")
}else{
    printerror("emailerror"," ")
    emailerror=false;
}
if( nameerror||mobileerror||emailerror||langerror){
    return false;
}else{
    alert(JSON.stringify(obj))
}
}
let printerror=(id,msg)=>{
document.getElementById("id").innerHTML=msg
}