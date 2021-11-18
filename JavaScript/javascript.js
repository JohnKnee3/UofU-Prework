document.getElementById("button1").addEventListener("click", function(){
    document.getElementById("box").style.height = "250px";
});

document.getElementById("button2").addEventListener("click", function(){
    document.getElementById("box").style.backgroundColor = "Blue";
});

document.getElementById("button3").addEventListener("click", fadeOutEffect);

document.getElementById("button4").addEventListener("click", function(){
    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").style.opacity = 1;
    document.getElementById("box").style.outline = "none";
});

document.getElementById("button5").addEventListener("click", function(){
    document.getElementById("box").style.outline = "solid black";
});



function fadeOutEffect() {
    var fadeTarget = document.getElementById("box");
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        }
        else {
            clearInterval(fadeEffect);
        }
    }, 50);
}