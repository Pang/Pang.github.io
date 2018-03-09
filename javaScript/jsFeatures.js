document.addEventListener("DOMContentLoaded", () => { 

    //Hover over Icons feature
    const links = document.querySelector("#links");

    links.addEventListener('mouseover', (x) => {
        if ( x.target.id === "twitterLogo" ) { x.target.src = 'icons/Twitter_Hover_Icon.png'; } 
        else if ( x.target.id === "LinkedInLogo" ) { x.target.src = "icons/Linkd_Hover_Icon.png"; }
        else if ( x.target.id === "GitHubLogo" ) { x.target.src = "icons/Git_Hover_Icon.png"; }
    })
    links.addEventListener('mouseout', (x) => {
        if ( x.target.id === "twitterLogo" ) { x.target.src = 'icons/Twitter_Default_Icon.png'; } 
        else if ( x.target.id === "LinkedInLogo" ) { x.target.src = "icons/Linkd_Default_Icon.png"; }
        else if ( x.target.id === "GitHubLogo" ) { x.target.src = "icons/Git_Default_Icon.png"; }
    })

    //Skip through projects feature
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

