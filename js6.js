function valid(){
    let un=document.getElementById("un");
    let up=document.getElementById("up");
    if(un.value.trim()=="" && up.value.trim()=="")
    {
        document.getElementById('un1').style.visibility="visible"
        document.getElementById("un1").classList.add("mb-2");
        un.classList.add("is-invalid")
        up.classList.add("is-invalid")
        document.getElementById("up2").style.visibility="visible"
        document.getElementById("up2").classList.add("mb-2")
        return false;
    }
    if(un.value.trim()=="")
    {
        un.classList.add("is-invalid")
        document.getElementById('un1').style.visibility="visible"
        document.getElementById("un1").classList.add("mb-2")

        return false;
    }
    else if(up.value.trim()==""){
        up.classList.add("is-invalid")
        document.getElementById("up2").style.visibility="visible"
        document.getElementById("up2").classList.add("mb-2")

un.classList.remove("is-invalid");
un.classList.add("is-valid")
document.getElementById('un1').style.visibility="hidden"
document.getElementById("un1").classList.remove("mb-2")
        return false;
    }
}