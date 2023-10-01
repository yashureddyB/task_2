

function validate(){
   var  name=document.getElementById("name");
    var email=document.getElementById("email");
    var web=document.getElementById("web");
    var txt=document.getElementById("txt");
    if(name.value.trim()=="" && email.value.trim()=="" && web.value.trim()=="" && txt.value.trim()==""){
        name.classList.add("formerror")
        email.classList.add("formerror")
        web.classList.add("formerror")
        txt.classList.add("formerror")
        document.getElementById("vbl1").style.visibility="visible"
        document.getElementById("vbl2").style.visibility="visible"
        document.getElementById("vbl3").style.visibility="visible"
        document.getElementById("vbl4").style.visibility="visible"
        return false;
    }
   else if(name.value.trim()=="")
    {
        name.classList.add("formerror")
        document.getElementById("vbl1").style.visibility="visible"
        return false;
    }
   else if(email.value.trim()=="")
    {
        email.classList.add("formerror")
        document.getElementById("vbl2").style.visibility="visible"
        return false;
    }
   else if(web.value.trim()=="")
    {
        web.classList.add("formerror")
        document.getElementById("vbl3").style.visibility="visible"
        return false;
    }
  else  if(txt.value.trim()=="")
    {
        txt.classList.add("formerror")
        document.getElementById("vbl4").style.visibility="visible"
        return false;
    }
}