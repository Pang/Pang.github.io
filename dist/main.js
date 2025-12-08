import projects from "../data/projects.json" with { type: "json" };
import jobs from "../data/jobs.json" with { type: "json" };
import references from "../data/references.json" with { type: "json" };
(function () {
    autoScrollImgsEnabled();
    GetLatestYear();
})();
// set img auto scroll
function autoScrollImgsEnabled() {
    const activeImgs = document.getElementsByClassName('activeImg');
    setInterval(function () {
        for (let i = 0; i < activeImgs.length; i++) {
            let activeImg = activeImgs[i];
            changeImg(activeImg);
        }
    }, 5000);
}
// manually change to next img
function changeImg(el) {
    const parent = el.parentElement;
    if (!parent)
        return;
    const imgs = el.parentElement.getElementsByTagName('img');
    if (imgs.length === 0)
        return;
    // find current active img
    let noActive = 0;
    for (let i = 0; i < imgs.length; i++) {
        let img = imgs[i];
        if (img.classList.contains('activeImg'))
            noActive = i;
        img.className = '';
    }
    // set next img active
    noActive = noActive >= imgs.length - 1 ? 0 : noActive + 1;
    const newActiveImg = imgs[noActive];
    const prevIndex = noActive === 0 ? imgs.length - 1 : noActive - 1;
    const prevActiveImg = imgs[prevIndex];
    if (newActiveImg)
        newActiveImg.className = 'activeImg';
    if (prevActiveImg)
        prevActiveImg.className = 'lastImg';
}
// open image full size in new tab
function zoomImg(el) {
    const parent = el.parentElement;
    if (!parent)
        return;
    const imgs = Array.from(parent.getElementsByTagName('img'));
    const imgFocusEl = imgs.find(img => img.classList.contains('activeImg'));
    if (!imgFocusEl)
        return;
    window.open(window.location.href + imgFocusEl.src);
    // window.open(window.location.href + imgFocusEl.getAttribute('src').slice(1));
}
// open a modal using ID
function openModal(modalId) {
    let modal = document.getElementById(modalId);
    if (!modal)
        return;
    modal.style.display = "block";
}
window.openModal = openModal;
// open a modal using ID
function openRefModal(modalId, refId) {
    let modal = document.getElementById(modalId);
    if (!modal)
        return;
    modal.style.display = "block";
    const textArea = document.getElementById('referenceInFull');
    const refSelected = references.find(x => x.id == refId);
    if (!textArea || !refSelected)
        return;
    textArea.innerHTML = '<h4><b>' + refSelected.fullName + '</b></h4>';
    textArea.innerHTML += '<p>' + refSelected.longVersion + '</p>';
    const refLinkedIn = document.getElementById('refLinkedin');
    if (!refLinkedIn)
        return;
    refLinkedIn.setAttribute('href', refSelected.linkedin);
}
// close a modal using ID
function closeDialog(modalId) {
    let modal = document.getElementById(modalId);
    if (!modal)
        return;
    let video = modal.getElementsByTagName('video')[0];
    if (video)
        video.pause();
    modal.style.display = "none";
}
// replace copyright year with latest
function GetLatestYear() {
    let date = new Date();
    const latestYrEl = document.getElementById("latestYear");
    if (!latestYrEl)
        return;
    latestYrEl.innerHTML = date.getFullYear().toString();
}
//# sourceMappingURL=main.js.map