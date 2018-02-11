window.addEventListener("load", () => { 

    const links = document.querySelector("#links");

    links.addEventListener('mouseover', (x) => {
        if ( x.target.id == "twitterLogo" ) { x.target.src = 'icons/Twitter_Hover_Icon.png'; } 
        else if ( x.target.id == "LinkedInLogo" ) { x.target.src = "icons/Linkd_Hover_Icon.png"; }
        else if ( x.target.id == "GitHubLogo" ) { x.target.src = "icons/Git_Hover_Icon.png"; }
    })
    links.addEventListener('mouseout', (x) => {
        if ( x.target.id == "twitterLogo" ) { x.target.src = 'icons/Twitter_Default_Icon.png'; } 
        else if ( x.target.id == "LinkedInLogo" ) { x.target.src = "icons/Linkd_Default_Icon.png"; }
        else if ( x.target.id == "GitHubLogo" ) { x.target.src = "icons/Git_Default_Icon.png"; }
    })
});

document.addEventListener("DOMContentLoaded", () => { 

    $(".kvf").slideUp();
    $('.lisCr').slideUp();  

    //KnightVsFoe
    $('div').eq(4).hover(function() {
        $('.kvf').slideDown();
    });
    $('div').eq(4).mouseleave(function() {
        $('.kvf').slideUp();
    });

    //ListCreator
    $('div').eq(5).hover(function() {
        $('.lisCr').slideDown();
    });
    $('div').eq(5).mouseleave(function() {
        $('.lisCr').slideUp();
    });
});