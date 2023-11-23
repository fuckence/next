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

    document.getElementById("myForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission
        if (validateForm()) {
          alert("Form submitted successfully");
        }
    });
    
    function validateForm() {
        var fullname = document.getElementById("input1").value;
        var email = document.getElementById("input2").value;
        var company = document.getElementById("input3").value;
        var message = document.getElementById("input4").value;

        if (fullname.trim() === "") {
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