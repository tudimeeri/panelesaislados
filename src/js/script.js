window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    navbar = document.getElementById("navbar");
    image = document.getElementById("main-image-id");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.style.top = "0px";
        navbar.style.height = "100px";
        image.style.height = "100px";

    } else {
        navbar.style.top = (50 - document.documentElement.scrollTop).toString() + "px";
        navbar.style.height = "150px";
        image.style.height = "150px";
    }
}


function gotoSection() {
    if (window.location.href != 'file:///home/manuel/Work/multypanelproductos/index.html') {
        window.location.href = 'file:///home/manuel/Work/multypanelproductos/index.html';
        
    } else {
        var section = document.getElementById("products");
        section.scrollIntoView();
    }
}

/* 
Dropdown function
*/

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
