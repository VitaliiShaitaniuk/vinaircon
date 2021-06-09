function buttonClickR(button) {
    var dots = document.getElementById("dots");
    var more = document.getElementById("more");
    var btn = document.getElementById("btn");
    var repair_container = document.getElementsByClassName("repair_container");
    

    if(dots.style.display === "none") {
        dots.style.display="inline";
        btn.innerHTML="докладніше";
        more.style.display="none";
    } else {
        dots.style.display="none";
        btn.innerHTML="приховати";
        more.style.display="inline";
        repair_container.style.height=10+"%";
    }
}
function buttonClickS(button) {
    var dotsS = document.getElementById("dotsS");
    var moreS = document.getElementById("moreS");
    var btnS = document.getElementById("btnS");
    var selecting_container = document.getElementsByClassName("selecting_container");

    if(dotsS.style.display === "none") {
        dotsS.style.display="inline";
        btnS.innerHTML="докладніше";
        moreS.style.display="none";
    } else {
        dotsS.style.display="none";
        btnS.innerHTML="приховати";
        moreS.style.display="inline";
        selecting_container.style.height=10+"%";
    }
} 

function buttonClickM(button) {
    var dotsM = document.getElementById("dotsM");
    var moreM = document.getElementById("moreM");
    var btnM = document.getElementById("btnM");
    var measurements_container = document.getElementsByClassName("measurements_container");

    if(dotsM.style.display === "none") {
        dotsM.style.display="inline";
        btnM.innerHTML="докладніше";
        moreM.style.display="none";
    } else {
        dotsM.style.display="none";
        btnM.innerHTML="приховати";
        moreM.style.display="inline";
        measurements_container.style.height=10+"%";
    }
} 
