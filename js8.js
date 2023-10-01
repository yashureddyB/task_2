function valid(){
    let fn=document.getElementById("fn")
    let ln=document.getElementById("ln")
    let em=document.getElementById("em")
    let pwd=document.getElementById("pwd")
    let rpwd=document.getElementById("rpwd")
    let age=document.getElementById("age")
    let pn=document.getElementById("pn")
    let add=document.getElementById("add")
    let st=document.getElementById("st")
    if(fn.value.trim()=="" && ln.value.trim()==""  && em.value.trim()==""&& pwd.value.trim()=="" && rpwd.value.trim()=="" && age.value.trim()=="" && pn.value.trim()=="" && add.value.trim()=="" && st.value.trim()=="")
    {
        document.getElementById("err1").style.visibility="visible";
        fn.classList.add("formerror")


        document.getElementById("err2").style.visibility="visible";
        ln.classList.add("formerror")


        document.getElementById("err3").style.visibility="visible";
        em.classList.add("formerror")


        document.getElementById("err4").style.visibility="visible";
        pwd.classList.add("formerror")

        document.getElementById("err5").style.visibility="visible";
        rpwd.classList.add("formerror")

        document.getElementById("err6").style.visibility="visible";
        age.classList.add("formerror")

        document.getElementById("err7").style.visibility="visible";
        pn.classList.add("formerror")

        document.getElementById("err8").style.visibility="visible";
        add.classList.add("formerror")

        document.getElementById("err9").style.visibility="visible";
        st.classList.add("formerror")

        
        return false;
    }
    else if(fn.value.trim()=="")
    {
        document.getElementById("err1").style.visibility="visible";
        fn.classList.add("formerror")

        return false;
    }
    else if(ln.value.trim()=="")
    {
         document.getElementById("err2").style.visibility="visible";
        ln.classList.add("formerror")
        fn.classList.remove("formerror")
        document.getElementById("err1").style.visibility="hidden";

        fn.classList.add("formsuc")

        return false;
    }
    else if(em.value.trim()=="")
    {
        document.getElementById("err3").style.visibility="visible";
        em.classList.add("formerror")

        ln.classList.remove("formerror")
        document.getElementById("err2").style.visibility="hidden";

        ln.classList.add("formsuc")

        return false;
    }
    else if(pwd.value.trim()=="")
    {
        document.getElementById("err4").style.visibility="visible";
        pwd.classList.add("formerror")
        em.classList.remove("formerror")
        document.getElementById("err3").style.visibility="hidden";
       
        em.classList.add("formsuc")

        return false;
    }
    else if(rpwd.value.trim()=="")
    {
        document.getElementById("err5").style.visibility="visible";
        rpwd.classList.add("formerror")

        pwd.classList.remove("formerror")
        document.getElementById("err4").style.visibility="hidden";
        pwd.classList.add("formsuc")
 
        return false;
    }
    else if(age.value.trim()=="")
    {
        document.getElementById("err6").style.visibility="visible";
        age.classList.add("formerror")

        rpwd.classList.remove("formerror")
        document.getElementById("err5").style.visibility="hidden";
        rpwd.classList.add("formsuc")

        return false;
    }
    else if(pn.value.trim()=="")
    {
 
        document.getElementById("err7").style.visibility="visible";
        pn.classList.add("formerror")
        age.classList.remove("formerror")
        document.getElementById("err6").style.visibility="hidden";
       
        age.classList.add("formsuc")

        return false;
    }
    else if(add.value.trim()=="")
    {
        document.getElementById("err8").style.visibility="visible";
        add.classList.add("formerror")

        pn.classList.remove("formerror")
        document.getElementById("err7").style.visibility="hidden";
        pn.classList.add("formsuc")

        return false;
    }
    else if(st.value.trim()=="")
    {
        document.getElementById("err9").style.visibility="visible";
        st.classList.add("formerror")

        add.classList.remove("formerror")
        document.getElementById("err8").style.visibility="hidden";
        add.classList.add("formsuc")

        return false;
    }

}