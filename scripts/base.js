(function() {
    autoScrollImgsEnabled();
    GetLatestYear();
 })();

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

    const refLinkedIn = document.getElementById('refLinkedin');
    refLinkedIn.setAttribute('href', refSelected.linkedin);
}

// close a modal using ID
function closeDialog(modalId) {
    let modal = document.getElementById(modalId);
    let video = modal.getElementsByTagName('video')[0];
    if (video) video.pause();
    modal.style.display = "none";
}

// replace copyright year with latest
function GetLatestYear() {
    let date = new Date();
    document.getElementById("latestYear").innerHTML = date.getFullYear();
}