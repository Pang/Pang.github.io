document.addEventListener("DOMContentLoaded", () => { 

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

