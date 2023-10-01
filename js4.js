let btn1=document.getElementById("btn1");
let btn2=document.getElementById("btn2");
let txt1=document.getElementById("txt1");
let txt2=document.getElementById("txt2");
btn1.addEventListener('click',()=>{
    let x= new Date();
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let date = x.getDate();
    let month=x.getMonth()+1;

    let year = x.getFullYear();
    txt1.innerText=`${date}/${months[month]}/${year}`
})
btn2.addEventListener('click',()=>{
    const days=["Sun","Mon","Tue","Wed","Thur","Fri","Sat"]
    const months = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];
    let x= new Date();
    let day = x.getDay();
    let month=x.getMonth()+1;
    let date = x.getDate();
    let year=x.getFullYear();
    let hrs=x.getHours();
    let min = x.getMinutes();
    let sec=x.getSeconds();
    let ist=x.getTimezoneOffset()
    txt2.innerText=`${days[day]} ${months[month]} ${date} ${year} ${hrs}:${min}:${sec} GMT${ist} (India Standarad Time)`
})