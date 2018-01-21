window.addEventListener("load", function Nav() { 

const navigate = `
    <ul>
        <li class="MainHeader">&nbsp;RYAN BECKETT</li>
        <li><a id="menuBtn" href="index.html">Home</a></li>
        <li><a id="menuBtn" href="portfolioAboutMe.html">About Me</a></li>
        <li><a id="menuBtn" href="portfolioProjects.html">Projects</a></li>
        <li><a id="menuBtn" href="portfolioContact.html">Contact</a></li>
        <li><a href="https://www.Twitter.com/RyanBcktt" target="_blank"><img id="twitterLogo" src="Twitter_Default_Icon.png" onmouseover="hoverTwit(this)" onmouseout="unhoverTwit(this)"/></a></li>
        <li><a href="https://www.linkedin.com/in/ryan-beckett-75112510b/" target="_blank"><img id="LinkedInLogo" src="Linkd_Default_Icon.png" onmouseover="hoverLinkd(this)" onmouseout="unhoverLinkd(this)"/></a></li>
        <li><a href="https://gist.github.com/cPango/" target="_blank"><img id="GitHubLogo" src="Git_Default_Icon.png" onmouseover="hoverGit(this)" onmouseout="unhoverGit(this)"/></a></li>
    </ul>
`;

document.querySelector('.navigateBar').innerHTML = navigate;

});