(function() {
    fillReferences();
    fillJobs();
    fillProjects('web', 'WebProjects');
    fillProjects('game', 'GameProjects');
    CreateBookmark();
 })();

function CreateBookmark() {
    document.getElementById('WebBookmark').innerHTML = '<div class="bookmark"><div><span>' + 'Web Dev' + '</span></div></div>';
    document.getElementById('GameBookmark').innerHTML = '<div class="bookmark"><div><span>' + 'Game Dev' + '</span></div></div>';
}

// place references
function fillReferences() {
    const refArea = document.getElementById('referenceSection');
    for (let i = 0; i < references.length; i++) {
        let ref = '<div class="referenceItem">' +
        '<h5><b>' + references[i].fullName +'</b></h5>' +
        '<p><i>"' + references[i].shortVersion + '"</i></p>' +
        '<p><a class="dialoglink" onclick="openRefModal(`referenceDialogWrapper`,' + references[i].id + ')"><b>See More</b></a></p>' +
        '</div>';
        refArea.innerHTML += ref;
    }
}

// place jobs
function fillJobs() {
    const timelineArea = document.getElementById('Timeline');
    for (let i = 0; i < jobs.length; i++) {
        let ref = '<div class="timelineSection">' +
        '<div class="content">' +
        '<h2>' + jobs[i].employer +'</h2>' +
        '<div class="timelineJobDate">' + jobs[i].datesWorked + '</div>' +
        jobs[i].description +
        '</div>' +
        '</div>';
        timelineArea.innerHTML += ref;
    }
}

// fill all projects on page
function fillProjects(projType, id) {
    const featuredProjects = document.getElementById(id);
    
    for (let i = 0; i < projects.length; i++) {
        let isEven = i % 2 == 0;
        if (projects[i].type != projType) continue;
        let imageRef = fillProjectImages(projects[i], isEven);
        let ref = '<div class="projectContainer ' + (isEven ? 'img3dReverse' : 'reverseFlexMobile') + '">';

        if (isEven) ref += imageRef;

        ref += '<div class="projectDetailsContainer">' +
        '<h4>' + projects[i].title +'</h4>' +
        '<div>' + projects[i].description + '</div>' +
        '</div>'

        if (!isEven) ref += imageRef;

        ref += '</div>';
        featuredProjects.innerHTML += ref;
    }
}

// fill in images for project
function fillProjectImages(project, isEven) {
    if (project.images?.length == 0) return '<div id="img3dContainer"><div class=\"ytWrapper\">' + project.video + '</div></div>';

    let imageRef = 
    '<div id="img3dContainer">' +
    '<figure id="img3d" class="imgShadow glossyImg ' + (isEven ? 'img3dReverse' : '') + '">';

    for (let z = 0; z < project.images.length; z++) {
        let className;
        if (z == 0) className = 'class="activeImg"';
        else if (z == project.images.length)  className = 'class="lastImg"';
        imageRef += '<img ' + className + ' src="' + project.images[z] + '">'
    }

    imageRef += 
    '<div id="nextIcon" class="imgIcons" onclick="changeImg(this)">&#10148;</div>' +
    '<div id="zoomIcon" class="imgIcons" onclick="zoomImg(this)">&#9974;</div>' +
    '</figure>' +
    '</div>';
    
    return imageRef;
}