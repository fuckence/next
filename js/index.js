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

window.addEventListener('scroll', function() {
    var targetDiv = document.getElementById('next');
    var navbar = document.getElementById('navbar');
    var logo = this.document.getElementById('logo');
    var targetDivTop = targetDiv.offsetTop;
    var targetDivBottom = targetDivTop + targetDiv.offsetHeight;
    
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop >= targetDivTop && scrollTop <= targetDivBottom) {
        navbar.classList.add('border-black');
        navbar.classList.remove('border-light');
        menuButton.classList.add('text-black');
        menuButton.classList.remove('text-white');
        $("#search").css("color", "black");
        logo.classList.add('text-black');
        logo.classList.remove('text-white');
    } else {
        navbar.classList.add('border-light');
        navbar.classList.remove('border-black');
        menuButton.classList.add('text-white');
        menuButton.classList.remove('text-black');
        $("#search").css("color", "white");
        logo.classList.add('text-white');
        logo.classList.remove('text-black');
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
    event.preventDefault(); // Prevent form submission or page refresh

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








var tableContainer;
function searchForm(){
    var searchInput = `
    <a id="searchButton" class="me-2"><i id="search" class="fa-solid fa-magnifying-glass fa-lg" style="color: #ffffff;"></i></a>
    <div class="input-group" style="width: 20vh;">
        <input type="text" class="form-control border-white text-white bg-transparent">
    </div>
    <a id="closeSearch" class="ms-2"><i class="fa-solid fa-xmark fa-lg" style="color: #ffffff;"></i></a>
    `;

    tableContainer = document.getElementById('searchForm');
    tableContainer.innerHTML = searchInput;
}

function useDiv(){
    if(tableContainer){
        console.log('Using the dynamically created div:', myDiv);
    }   else {
    console.log('The dynamically created div does not exist yet.');
    }

}

document.getElementById('searchButton').addEventListener('click', searchForm);
useDiv();

function closeSearchForm(){
    var searchInput = `
    <a id="searchButton" class="me-2"><i id="search" class="fa-solid fa-magnifying-glass fa-lg" style="color: #ffffff;"></i></a>
    `;
    tableContainer = document.getElementById('searchForm');
    tableContainer.innerHTML = searchInput;
};

document.getElementById('closeSearch').addEventListener('click', closeSearchForm);




})