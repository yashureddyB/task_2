var m=0;
var s = 0;
function move(){
    var train = document.getElementById("train");
    var score=document.getElementById("score");
     anim=setInterval(anime,50);
    function anime(){
        if(m==85)
        {
            m=0;
            train.style.marginLeft=m+"%";
            s++;
            score.innerText="SCORE = "+s;
        }
        else{
        m++;
        train.style.marginLeft=m+"%";
        }
    }
}

function stop(){
    console.log("hi")
    clearInterval(anim)
}

function restart(){
    train.style.marginLeft=0+"%";
    clearInterval(anim)
    m=0;
    s=0
    score.innerHTML="SCORE = "+s;

}
