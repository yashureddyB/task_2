let val = document.getElementById("val");
let rslt = document.getElementById("rslt");
let ans=document.getElementById("ans")
rslt.addEventListener("click", () => {
    let x=val.value.split("").reverse().join("");
    ans.value = x;
});
