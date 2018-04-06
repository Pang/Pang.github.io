document.addEventListener("DOMContentLoaded", () => { 

    let skillsDisplayed = false;
    const $dropSkills = $("#dropSkills");

    $dropSkills.click(function () {
        if (!skillsDisplayed) { revealSkills() }
        else { hideSkills() };
    });

    function revealSkills() {
        $dropSkills.html("Skills &#9650;")
        $("#skillsContainer").slideDown();
        skillsDisplayed = true;
    }
    function hideSkills() {
        $dropSkills.html("Skills &#9660;")
        $("#skillsContainer").slideUp();
        skillsDisplayed = false;
    }


    let projectsDisplayed = false;
    const $dropProjects = $("#dropProjects");

    //determines if project container is open/closed
    $dropProjects.click(function () {
        if (!projectsDisplayed) { revealProjects() }
        else { hideProjects() };
    });

    //Uses jquery to show container, change button and animate using slideDown
    function revealProjects() {
        const projectContainer = document.querySelector("#projectContainer")
        $dropProjects.html("Projects &#9650;")
        $("#projectContainer").slideDown();
        showProjects(slideIndex);
        projectsDisplayed = true;
    }
    function hideProjects() {
        const projectContainer = document.querySelector("#projectContainer")
        $dropProjects.html("Projects &#9660;")
        $("#projectContainer").slideUp();
        projectsDisplayed = false;
    }

    //Slideshow for Projects
    let slideIndex = 1;

    //Jquery assigning functions to buttons
    $("#rightArrow").click(function() { nextProj(1) } );
    $("#leftArrow").click(function() { nextProj(-1) } );

    //slides right when clicked, 'n' decides how many times
    nextProj = (n) => showProjects(slideIndex += n);

    //current slide shown
    currentSlide = (n) => showProjects(slideIndex = n);

    showProjects = (n) => {
        const myProjects = document.querySelectorAll(".codeProjects");

        //Reset to 1 if max number of projects exceeds
        if (n > myProjects.length) { slideIndex = 1 }
        //Allows looping backwards
        if (n < 1) { slideIndex = myProjects.length }

        //Hides all projects
        for (let i = 0; i < myProjects.length; i++) {
            myProjects[i].style.display = "none";
        }
        //shows the project currently selected in the array
        myProjects[slideIndex-1].style.display = "block";
    }



});