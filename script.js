document.getElementById("foot01").innerHTML =
"<p>&copy;  " + new Date().getFullYear() + " David Fridovich-Keil. All rights reserved.</p>";

document.getElementById("nav01").innerHTML =
"<ul id='menu'>" + 
    "<li><a href='index.html'>Home</a></li>" + 
    "<li><a href='research.html'>Research</a></li>" +
    "<li><a href='side_projects.html'>Side Projects</a></li>" +
    "<li><a href='pdfs/dfk_curriculum_vitae.pdf'>CV</a></li>"
"</ul>";

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
}
