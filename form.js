 var x=document.getElementById('user');
var p =document.getElementById('pass')
//x.addEventListener('keyup',function(e){
  //  console.log(e.target.value)
//})
var err=document.getElementById('err')
var err1=document.getElementById('err1')
console.log(x.value)
var regex="^([ADMIN-admin])*$"
var pegex="^([1-5])*$"
function validatename(){
    //alert("clicked")
    if(x.value.trim()==""){
        err.innerText="username empty"
        x.style.border="2px  solid red"
        return false
    }
    else if(!x.value.match(regex)){
err.innerText="username is incorrect"
x.style.border="2px solid red"
return false
    }
        
        err.innerText=''
        x.style.border="2px solid green"
    return true

}


function validatepass(){
 if(p.value.trim()=='') {
    
    
    err1.innerText="password should not be empty";
    p.style.border="2px solid red";
    return false;
 }  
 else if(!p.value.match(pegex)){
    err1.innerText="password  is incorrect"
    p.style.border="2px solid red"
    return false
        }

        else if(p.value.length<5){
            err1.innerText="password  not correct"
            p.style.border="2px solid red"
            return false
                }
 
 else{
    err1.innerText='';
    p.style.border="2px solid green"
    return true
 }
}
function verify(Callback){
    if(!validatename() || !validatepass()){
          return false
    }
    else{
        Callback()
        return true
    }
}
    function nextPage(){
        window.location.href='web.html'
    }
