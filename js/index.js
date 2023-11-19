$(document).ready(function(){

function toggleDivs() {
    var divs = document.getElementsByClassName("fade");
    for (var i = 0; i < divs.length; i++) {
        setTimeout(function(index) {
        divs[index].classList.toggle("show");
        }, i * 300, i);
    }
}
toggleDivs();


const button = document.getElementById('colorButton');
$("#colorButton").mouseover(function(){
    $("#colorButton").css("background-color", "black");
    $("#colorButton").css("color", "white");
});
$("#colorButton").mouseout(function(){
    $("#colorButton").css("background-color", "white");
    $("#colorButton").css("color", "black");
});


const menuBlock = document.getElementById('menu-block');
const menuButton = document.getElementById('menu-button');
const rotateImage = document.getElementById('rotating-image')
document.getElementById('menu-button').addEventListener('click', function(event) {
    if (menuButton.innerHTML === "C L O S E") {
    menuButton.innerHTML = "M E N U";
    } else {
    menuButton.innerHTML = "C L O S E";
    }
    rotateImage.classList.toggle('rotate-image');
    menuBlock.classList.toggle('d-none');
    menuBlock.classList.toggle('show');
    menuBlock.classList.toggle('pointer-events-none');
});

$(".menu-nav").mouseover(function(){
    
});

$(".menu-nav").mouseout(function(){
    $(".menu-nav").removeClass("fw-semibold");
});



})