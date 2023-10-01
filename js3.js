let one=document.getElementById("one");
let two=document.getElementById("two");
let mul=document.getElementById("mul");
let dvd=document.getElementById("dvd");
let ans=document.getElementById("ans");

mul.addEventListener('click',()=>{
    let a=parseInt(one.value);
    let b=parseInt(two.value);
    ans.value=a*b;
})
dvd.addEventListener('click',()=>{
    let a=parseInt(one.value);
    let b=parseInt(two.value);
    ans.value=a/b;
})