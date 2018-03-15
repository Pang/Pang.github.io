document.addEventListener("DOMContentLoaded", () => { 

    //Slideshow for Projects
    let slideIndex = 1;
    showProjects(slideIndex);

    $("#rightArrow").click(function() { nextProj(1) } );
    $("#leftArrow").click(function() { nextProj(-1) } );

    function nextProj(n) {
        showProjects(slideIndex += n);
    }

    function currentSlide(n) {
        showProjects(slideIndex = n);
    }

    function showProjects(n) {
        let myProjects = document.querySelectorAll(".codeProjects");
        
        if (n > myProjects.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = myProjects.length }

        for (let i = 0; i < myProjects.length; i++) {
            myProjects[i].style.display = "none";
        }
        myProjects[slideIndex - 1].style.display = "block";
    }
});