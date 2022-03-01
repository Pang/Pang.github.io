(function() {
    // your page initialization code here
    // the DOM will be available here
    let activeImgs = document.getElementsByClassName('activeImg');
    setInterval(function() {
        for (let i = 0; i < activeImgs.length; i++) {
            changeImg(activeImgs[i]);
        }
    }, 5000);
 })();

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

function openModal(modalId) {
    let modal = document.getElementById(modalId);
    modal.style.display = "block";
}

function closeDialog(modalId) {
    let modal = document.getElementById(modalId);
    let video = modal.getElementsByTagName('video')[0];
    if (video) video.pause();
    modal.style.display = "none";
}