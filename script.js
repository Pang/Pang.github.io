function changeImg(el)
{
    let imgs = el.parentElement.getElementsByTagName('img');
    let noActive;
    for (let i = 0; i < imgs.length; i++) {
        if (imgs[i].className == 'activeImg') noActive = i;
        imgs[i].className = '';
    }
    noActive = noActive >= imgs.length - 1 ? 0 : noActive + 1;
    imgs[noActive].className = 'activeImg';
}

function zoomImg(el)
{
    let imgs = el.parentElement.getElementsByTagName('img');
    let imgFocusEl;
    for (let i = 0; i < imgs.length; i++) {
        if (imgs[i].className == 'activeImg') {
            imgFocusEl = imgs[i];
        }
    }
    window.open(window.location.href + imgFocusEl.getAttribute('src').slice(1));
}