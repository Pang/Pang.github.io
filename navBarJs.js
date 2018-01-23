window.addEventListener("load", () => { 

    const navigate = `
        <ul id="navFunc">
            <li class="MainHeader">&nbsp;RYAN BECKETT</li>
            <li><a id="menuBtn" href="index.html">Home</a></li>
            <li><a id="menuBtn" href="portfolioAboutMe.html">About Me</a></li>
            <li><a id="menuBtn" href="portfolioProjects.html">Projects</a></li>
            <li><a id="menuBtn" href="portfolioContact.html">Contact</a></li>
            <li><a href="https://www.Twitter.com/RyanBcktt" target="_blank"><img id="twitterLogo" src="Twitter_Default_Icon.png" /></a></li>
            <li><a href="https://www.linkedin.com/in/ryan-beckett-75112510b/" target="_blank"><img id="LinkedInLogo" src="Linkd_Default_Icon.png"/></a></li>
            <li><a href="https://gist.github.com/cPango/" target="_blank"><img id="GitHubLogo" src="Git_Default_Icon.png"/></a></li>
        </ul>
    `;

    document.querySelector('.navigateBar').innerHTML = navigate;

    const navFunc = document.querySelector("#navFunc");

    navFunc.addEventListener('mouseover', (x) => {
        if ( x.target.id == "twitterLogo" ) { x.target.src = 'Twitter_Hover_Icon.png'; } 
        else if ( x.target.id == "LinkedInLogo" ) { x.target.src = "Linkd_Hover_Icon.png"; }
        else if ( x.target.id == "GitHubLogo" ) { x.target.src = "Git_Hover_Icon.png"; }
    })
    navFunc.addEventListener('mouseout', (x) => {
        if ( x.target.id == "twitterLogo" ) { x.target.src = 'Twitter_Default_Icon.png'; } 
        else if ( x.target.id == "LinkedInLogo" ) { x.target.src = "Linkd_Default_Icon.png"; }
        else if ( x.target.id == "GitHubLogo" ) { x.target.src = "Git_Default_Icon.png"; }
    })
});