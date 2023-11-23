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

var audio = new Audio("audio.mp3");
var buttons = document.querySelectorAll("button");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});

window.addEventListener('scroll', function() {
    var targetDiv = document.getElementById('next');
    var navbar = document.getElementById('navbar');
    var logo = this.document.getElementById('logo');
    var searchInput = document.getElementById('searchInput');
    var targetDivTop = targetDiv.offsetTop;
    var targetDivBottom = targetDivTop + targetDiv.offsetHeight;
    
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop >= targetDivTop && scrollTop <= targetDivBottom) {
        navbar.classList.add('border-black');
        navbar.classList.remove('border-light');
        menuButton.classList.add('text-black');
        menuButton.classList.remove('text-white');
        logo.classList.add('text-black');
        logo.classList.remove('text-white');
        $("#search").css("color", "black");
        $("#searchInput").css("border-bottom", "1px solid black");
        $("#searchInput").css("border-top", "1px solid black");
        $("#searchInput").css("color", "black");
        $("#closeSearch").css("color", "black");

    } else {
        navbar.classList.add('border-light');
        navbar.classList.remove('border-black');
        menuButton.classList.add('text-white');
        menuButton.classList.remove('text-black');
        $("#search").css("color", "white");
        logo.classList.add('text-white');
        logo.classList.remove('text-black');
        $("#searchInput").css("border-bottom", "1px solid white");
        $("#searchInput").css("border-top", "1px solid white");
        $("#searchInput").css("color", "white");
        $("#closeSearch").css("color", "white");
    }
});


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
const rotateImage = document.getElementById('rotating-image');
document.getElementById('menu-button').addEventListener('click', function(event) {
    if (menuButton.innerHTML === "CLOSE") {
    menuButton.innerHTML = "MENU";
    } else {
    menuButton.innerHTML = "CLOSE";
    }
    rotateImage.classList.toggle('rotate-image');
    menuBlock.classList.toggle('d-none');
    menuBlock.classList.toggle('show');
    menuBlock.classList.toggle('pointer-events-none');
});

var searchButton = document.getElementById('searchButton');
var searchContainer = document.getElementById('searchContainer');
var searchInput = document.getElementById('searchInput');
var closeButton = document.getElementById('closeButton');

searchButton.addEventListener('click', function() {
  searchContainer.classList.add("d-flex");
  searchContainer.classList.remove("d-none")
});

closeButton.addEventListener('click', function() {
  searchContainer.classList.add('d-none');
  searchContainer.classList.remove('d-flex');
});

searchInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    var searchQuery = searchInput.value;
    performSearch(searchQuery);
  }
});

function performSearch(query) {
  removeSearchHighlights();
  var elementsToSearch = document.querySelectorAll('.searchable-element');
  var regex = new RegExp(query, 'gi');
  elementsToSearch.forEach(function(element) {
    var content = element.textContent;
    var highlightedContent = content.replace(regex, function(match) {
      return '<span class="highlight">' + match + '</span>';
    });
    element.innerHTML = highlightedContent;
  });
}
  
function removeSearchHighlights() {
  var highlightedElements = document.querySelectorAll('.highlight');
  
  highlightedElements.forEach(function(element) {
    element.outerHTML = element.innerHTML;
  });
}

$("#conceptbtn").mouseover(function(){
  this.classList.add('text-decoration-underline');
});

$("#conceptbtn").mouseout(function(){
  this.classList.remove('text-decoration-underline');
});

$("#documentbtn").mouseover(function(){
  this.classList.add('text-decoration-underline');
});

$("#documentbtn").mouseout(function(){
  this.classList.remove('text-decoration-underline');
});


$("#ecommercebtn").mouseover(function(){
  this.classList.add('text-decoration-underline');
});

$("#ecommercebtn").mouseout(function(){
  this.classList.remove('text-decoration-underline');
});


$("#uxuibtn").mouseover(function(){
  this.classList.add('text-decoration-underline');
});

$("#uxuibtn").mouseout(function(){
  this.classList.remove('text-decoration-underline');
});


document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault();
  if (validateForm()) {
    alert("Form submitted successfully");
  }
});

function validateForm() {
  var fullName = document.getElementById("input1").value;
  var email = document.getElementById("input2").value;
  var company = document.getElementById("input3").value;
  var message = document.getElementById("input4").value;

  if (fullName.trim() === "") {
    alert("Please enter your full name");
    return false;
  }

  if (email.trim() === "") {
    alert("Please enter your email address");
    return false;
  }

  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address");
    return false;
  }

  if (company.trim() === "") {
    alert("Please enter your company name");
    return false;
  }

  if (message.trim() === "") {
    alert("Please enter a message");
    return false;
  }
  return true;
}




})