$(document).ready(function(){

    function toggleDivs() {
        var divs = document.getElementsByClassName("fade");
        for (var i = 0; i < divs.length; i++) {
            setTimeout(function(index) {
            divs[index].classList.toggle("show");
            }, i * 200, i);
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

    const menuBlock = document.getElementById('menu-block');
    const menuButton = document.getElementById('menu-button');
    const rotateImage = document.getElementById('rotating-image');
    document.getElementById('menu-button').addEventListener('click', function(event) {
        if (menuButton.innerHTML === "CLOSE") {
        menuButton.innerHTML = "MENU";
        } else {
        menuButton.innerHTML = "CLOSE";
        }
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

    function validateForm() {
        var name = document.getElementById("input1").value;
        var lastname = document.getElementById("input2").value;
        var email = document.getElementById("input3").value;
        var password = document.getElementById("input4").value;
    
        if (name.trim() === "") {
          alert("Please enter your full name");
          return false;
        }
        if (lastname.trim() === "") {
            alert("Please enter your last name");
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
      
        if (password.trim() === "") {
          alert("Please enter a password");
          return false;
        }

        if (password.length <= 8) {
            alert("Password must be longer than 8 characters");
            return false;
        }
      
        var symbolPattern = /[!@#$%^&*().]/;
        if (!symbolPattern.test(password)) {
            alert("Password must contain at least one symbol like dot");
            return false;
        }
        return true;
    }

    document.getElementById("register").addEventListener("submit", function(event) {
        event.preventDefault();
        if (validateForm()) {
          window.location.href="index.html";
        }
    });
})