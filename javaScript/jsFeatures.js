document.addEventListener("DOMContentLoaded", () => { 

    //current letter spacing value.
    let lsv = 0;

    //logo ID element
    const logo1 = document.getElementById("logo1");
    const logo2 = document.getElementById("logo2");

    //changes the letterSpacing to equal the 'lsv' value.
    const logoLs = x => { x.style.letterSpacing = lsv + "px"; }

    if ($(window).width() > 539) {

        //set interval of expand function by 10 milliseconds.
        const time = setInterval(expand, 10);

        //function that sets animation speed and dur.
        function expand() {
            if (lsv >= 31) {
                clearInterval(time);
            }
            else if (lsv < 20) {
                lsv += 0.22;
                logoLs(logo1);
                logoLs(logo2);
            }
            else if (lsv < 27) {
                lsv += 0.14;
                logoLs(logo1);
                logoLs(logo2);
            }
            else if (lsv < 29) {
                lsv += 0.06;
                logoLs(logo1);
                logoLs(logo2);
            }
            else {
                lsv += 0.03;
                logoLs(logo1);
                logoLs(logo2);
            }
        }
    }
    else {
        lsv = 10;
        logoLs(logo1);
        logoLs(logo2);
    }
    let slideIndex = 1;
    showProjects(slideIndex);

    //Slideshow for Projects
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

