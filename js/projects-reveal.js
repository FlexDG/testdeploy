var sectionHeight = window.innerHeight;
var revealElements = document.getElementsByClassName('reveal--onscroll');

// Function to trigger animations
var animate = function () {
    for (var i = 0; i < revealElements.length; i++) {
        var positionFromTop = revealElements[i].getBoundingClientRect().top;
        if (positionFromTop - sectionHeight <= 0) {
            if (revealElements[i].classList.contains('fade-in')) {
                revealElements[i].classList.add("reveal--fade-in");
            } else if (revealElements[i].classList.contains('slide-in-left')) {
                revealElements[i].classList.add("reveal--slide-in-left");
            }
        }
    }
}

// Function to reset animations
var resetAnimations = function () {
    for (var i = 0; i < revealElements.length; i++) {
        revealElements[i].classList.remove("reveal--fade-in");
        revealElements[i].classList.remove("reveal--slide-in-left");
    }

    animate();
}

var sectionButtons = document.getElementsByClassName('nav-item link-item');
for (var j = 0; j < sectionButtons.length; j++) {
    sectionButtons[j].addEventListener('click', resetAnimations);
}

window.onload = animate;