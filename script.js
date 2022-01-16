// Get the modal
const modal0 = document.getElementsByClassName("open-window")[0];
const modal1 = document.getElementsByClassName("open-window")[1];
const modal2= document.getElementsByClassName("open-window")[2];
const modal3 = document.getElementsByClassName("open-window")[3];
const modal4 = document.getElementsByClassName("open-window")[4];

// Get the button that opens the modal
const btn0 = document.getElementsByClassName("btn")[0];
const btn1 = document.getElementsByClassName("btn")[1];
const btn2 = document.getElementsByClassName("btn")[2];
const btn3 = document.getElementsByClassName("btn")[3];
const btn4 = document.getElementsByClassName("btn")[4];

// Get the <span> element that closes the modal
const span0 = document.getElementsByClassName("close")[0];
const span1 = document.getElementsByClassName("close")[1];
const span2 = document.getElementsByClassName("close")[2];
const span3 = document.getElementsByClassName("close")[3];
const span4 = document.getElementsByClassName("close")[4];

// When the user clicks the button, open the modal
btn0.onclick = function() {
    modal0.style.display = "block";
}

btn1.onclick = function() {
    modal1.style.display = "block";
}

btn2.onclick = function() {
    modal2.style.display = "block";
}

btn3.onclick = function() {
    modal3.style.display = "block";
}

btn4.onclick = function() {
    modal4.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span0.onclick = function() {
    modal0.style.display = "none";
}

span1.onclick = function() {
    modal1.style.display = "none";
}

span2.onclick = function() {
    modal2.style.display = "none";
}

span3.onclick = function() {
    modal3.style.display = "none";
}

span4.onclick = function() {
    modal4.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal0) {
        modal0.style.display = "none";
    } else if (event.target == modal1) {
        modal1.style.display = "none";
    } else if (event.target == modal2) {
        modal2.style.display = "none";
    } else if (event.target == modal3) {
        modal3.style.display = "none";
    } else if (event.target == modal4) {
        modal4.style.display = "none";
    }
}


// header
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})