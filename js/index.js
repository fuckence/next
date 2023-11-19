$(document).ready(function(){

const button = document.getElementById('colorButton');

$("#colorButton").mouseover(function(){
    $("#colorButton").css("background-color", "black");
    $("#colorButton").css("color", "white");
});

$("#colorButton").mouseout(function(){
    $("#colorButton").css("background-color", "white");
    $("#colorButton").css("color", "black");
});

})