let username = document.getElementById("username");
let password = document.getElementById("password");

let flag = 1;

function validateform() {
    
    if(username.value =="")
    {
    document.getElementById("usererror").innerHTML="username is empty :";
    flag = 0;

    }
     else if (username.value.length<3) {
        document.getElementById("usererror").innerHTML="username must be fill minimum three charector:";
        flag = 0;
     }

     else if(username.value.length>20) {
        document.getElementById("usererror").innerHTML="username maxmimum 20 charector:";
        flag = 0;
     }

     else {
        document.getElementById("usererror").innerHTML="";
        flag = 1;
     }
     
     if( password.value ==""){
        document.getElementById("passerror").innerHTML="password is empty:";
        flag = 0;
     }

     else {
        document.getElementById("passerror").innerHTML="";
        flag = 1;
     }
    if(flag){
        return true;
    }
    else {
        return false;
    }
}