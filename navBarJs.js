window.addEventListener("load", () => { 

    const navigate = `
        <ul>
            <li class="MainHeader">&nbsp;RYAN BECKETT</li>
            <li><a id="menuBtn" href="index.html">Home</a></li>
            <li><a id="menuBtn" href="portfolioAboutMe.html">About Me</a></li>
            <li><a id="menuBtn" href="portfolioProjects.html">Projects</a></li>
            <li><a id="menuBtn" href="portfolioContact.html">Contact</a></li>
            <li><a href="https://www.Twitter.com/RyanBcktt" target="_blank"><img class="logoChange" id="twitterLogo" src="Twitter_Default_Icon.png" /></a></li>
            <li><a href="https://www.linkedin.com/in/ryan-beckett-75112510b/" target="_blank"><img class="logoChange" id="LinkedInLogo" src="Linkd_Default_Icon.png"/></a></li>
            <li><a href="https://gist.github.com/cPango/" target="_blank"><img class="logoChange" id="GitHubLogo" src="Git_Default_Icon.png"/></a></li>
        </ul>
    `;

    document.querySelector('.navigateBar').innerHTML = navigate;


    const logoChange = document.querySelectorAll(".logoChange");

    for ( let i = 0 ; i < logoChange.length ; i++ ) {
        logoChange[i].addEventListener("mouseover", () => {
            if(logoChange[i].id == "twitterLogo"){
                logoChange[i].src = 'Twitter_Hover_Icon.png';
            } 
            if (logoChange[i].id == "LinkedInLogo") {
                logoChange[i].src = 'Linkd_Hover_Icon.png';
            } 
            if(logoChange[i].id == "GitHubLogo"){
                logoChange[i].src = 'Git_Hover_Icon.png';
            }
        });

        logoChange[i].addEventListener("mouseout", () => {
            if(logoChange[i].id== "twitterLogo"){
                logoChange[i].src = 'Twitter_Default_Icon.png';
            } 
            if (logoChange[i].id == "LinkedInLogo") {
                logoChange[i].src = 'Linkd_Default_Icon.png';
            } 
            if(logoChange[i].id == "GitHubLogo"){
                logoChange[i].src = 'Git_Default_Icon.png';
            }
        });
    }

})