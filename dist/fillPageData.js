import projects from "../data/projects.json" with { type: "json" };
import jobs from "../data/jobs.json" with { type: "json" };
import references from "../data/references.json" with { type: "json" };
(function () {
    fillReferences();
    fillJobs();
    fillProjects('web', 'WebProjects');
    fillProjects('game', 'GameProjects');
    CreateBookmark();
})();
function CreateBookmark() {
    const webBookmark = document.getElementById('WebBookmark');
    if (webBookmark)
        webBookmark.innerHTML = '<div class="bookmark"><div><span>' + 'Web Dev' + '</span></div></div>';
    const gameBookmark = document.getElementById('GameBookmark');
    if (gameBookmark)
        gameBookmark.innerHTML = '<div class="bookmark"><div><span>' + 'Game Dev' + '</span></div></div>';
}
// place references
function fillReferences() {
    const refArea = document.getElementById('referenceSection');
    if (!refArea)
        return;
    console.log(references.length);
    for (let i = 0; i < references.length; i++) {
        let reference = references[i];
        if (!reference)
            return;
        let ref = '<div class="referenceItem">' +
            '<h5><b>' + reference.fullName + '</b></h5>' +
            '<p><i>' + reference.shortVersion + '</i></p>' +
            '<p><a class="dialoglink" onclick="openRefModal(`referenceDialogWrapper`,' + reference.id + ')"><b>See More</b></a></p>' +
            '</div>';
        refArea.innerHTML += ref;
    }
}
// place jobs
function fillJobs() {
    const timelineArea = document.getElementById('Timeline');
    if (!timelineArea)
        return;
    for (let i = 0; i < jobs.length; i++) {
        let job = jobs[i];
        if (!job)
            return;
        let ref = '<div class="timelineSection">' +
            '<div class="content">' +
            '<h2>' + job.employer + '</h2>' +
            '<div class="timelineJobDate">' + job.datesWorked + '</div>' +
            job.description +
            '</div>' +
            '</div>';
        timelineArea.innerHTML += ref;
    }
}
// fill all projects on page
function fillProjects(projType, id) {
    const featuredProjects = document.getElementById(id);
    if (!featuredProjects)
        return;
    for (let i = 0; i < projects.length; i++) {
        let project = projects[i];
        if (!project)
            return;
        let isEven = i % 2 == 0;
        if (project.type != projType)
            continue;
        let imageRef = fillProjectImages(project, isEven);
        let ref = '<div class="projectContainer ' + (isEven ? 'img3dReverse' : 'reverseFlexMobile') + '">';
        if (isEven)
            ref += imageRef;
        ref += '<div class="projectDetailsContainer">' +
            '<h4>' + project.title + '</h4>' +
            '<div>' + project.description + '</div>' +
            '</div>';
        if (!isEven)
            ref += imageRef;
        ref += '</div>';
        featuredProjects.innerHTML += ref;
    }
}
// fill in images for project
function fillProjectImages(project, isEven) {
    if (project.images?.length == 0)
        return '<div id="img3dContainer"><div class=\"ytWrapper\">' + project.video + '</div></div>';
    let imageRef = '<div id="img3dContainer">' +
        '<figure id="img3d" class="imgShadow glossyImg ' + (isEven ? 'img3dReverse' : '') + '">';
    for (let z = 0; z < project.images.length; z++) {
        let className;
        if (z == 0)
            className = 'class="activeImg"';
        else if (z == project.images.length)
            className = 'class="lastImg"';
        imageRef += '<img ' + className + ' src="' + project.images[z] + '">';
    }
    imageRef +=
        '<div id="nextIcon" class="imgIcons" onclick="changeImg(this)">&#10148;</div>' +
            '<div id="zoomIcon" class="imgIcons" onclick="zoomImg(this)">&#9974;</div>' +
            '</figure>' +
            '</div>';
    return imageRef;
}
//# sourceMappingURL=fillPageData.js.map