(function() {
    autoScrollImgsEnabled();
    fillReferences();
    fillJobs();
 })();

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
    const timelineArea = document.getElementsByClassName('timeline')[0];
    console.log(jobs);
    for (let i = 0; i < jobs.length; i++) {
        let ref = '<div class="timelineSection">' +
        '<div class="content">' +
        '<h2>' + jobs[i].employer +'</h5>' +
        '<div class="timelineJobDate">' + jobs[i].datesWorked + '</div>' +
        jobs[i].description +
        '</div>' +
        '</div>';
        timelineArea.innerHTML += ref;
    }
}

// set img auto scroll
function autoScrollImgsEnabled() {
    let activeImgs = document.getElementsByClassName('activeImg');
    setInterval(function() {
        for (let i = 0; i < activeImgs.length; i++) {
            changeImg(activeImgs[i]);
        }
    }, 5000);
}

// manually change to next img
function changeImg(el) {
    let imgs = el.parentElement.getElementsByTagName('img');
    let noActive;
    for (let i = 0; i < imgs.length; i++) {
        if (imgs[i].className == 'activeImg') noActive = i;
        imgs[i].className = '';
    }
    noActive = noActive >= imgs.length - 1 ? 0 : noActive + 1;
    imgs[noActive].className = 'activeImg';
    imgs[noActive == 0 ? imgs.length - 1 : noActive - 1].className = 'lastImg';
}

// open image full size in new tab
function zoomImg(el) {
    let imgs = el.parentElement.getElementsByTagName('img');
    let imgFocusEl;
    for (let i = 0; i < imgs.length; i++) {
        if (imgs[i].className == 'activeImg') {
            imgFocusEl = imgs[i];
        }
    }
    window.open(window.location.href + imgFocusEl.getAttribute('src').slice(1));
}

// open a modal using ID
function openModal(modalId) {
    let modal = document.getElementById(modalId);
    modal.style.display = "block";
}

// open a modal using ID
function openRefModal(modalId, refId) {
    let modal = document.getElementById(modalId);
    modal.style.display = "block";
    const textArea = document.getElementById('referenceInFull');
    const refSelected = references.find(x => x.id == refId);
    textArea.innerHTML = '<h4><b>' + refSelected.fullName + '</b></h4>';
    textArea.innerHTML +='<p>' +  refSelected.longVersion + '</p>';
}

// close a modal using ID
function closeDialog(modalId) {
    let modal = document.getElementById(modalId);
    let video = modal.getElementsByTagName('video')[0];
    if (video) video.pause();
    modal.style.display = "none";
}