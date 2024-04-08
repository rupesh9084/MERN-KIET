let printerror=(id,msg)=>{
document.getElementById(id).innerHTML=msg
}
let validate=()=>{
    let nameerror=mobileerror=langerror=hobbieserror=emailerror
    let obj={
        name:"",
        mobile:"",
        email:"",
        language:"",
        email:"",
        hobbies:[],
    }

        let name=document.studentfrm.name.value
        let email=document.studentfrm.email.value
        let mobile=document.studentfrm.mobile.value
        let language=document.studentfrm.language.value
        let hobbies=document.getElementById("hobies")

        if(name===""){
            printerror("nameerror","please enter your name")
        }else{
            printerror("nameerror","")
            obj= {...obj,name}
            nameerror=false;
        }
        if(mobileerror===""){
            printerror("mobileerror","please enter your mobile")
        }else{
            printerror("mobileerror","")
            obj={...obj,mobile}
        }
        if(emailerror===""){
            printerror("eamilerror","please enter your email")
        }else{
            printerror("emailerror","")
            obj={...obj,email}
        }
        if(langerror===""){
            printerror("langerror","please select your language")
        }else{
            printerror("langerror","")
            obj={...obj,langerror}
        }
        if(obj.hobbies.lenght>0){
            for(let hobbie of hobbies){
                if(hobbie.checked===true){
                    obj.hobbies.push(hobbie.value)
                }
            }
            if(obj.hobbies.length>0){
                printerror("hobbieserror","")
                hobbies=false
            }else{
                printerror("hobbieserror","Select your hobies")


            }
        }
        if(nameerror||mobileerror||langerror1||hobbieserror||emailerror){
            return false
        }else{
            alert(JSON.stringify(obj))
        }
   
}