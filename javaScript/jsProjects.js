document.addEventListener("DOMContentLoaded", () => { 

    $("ol").eq(0).slideUp();
    $('ol').eq(1).slideUp();
    $('ol').eq(2).slideUp();  

    //KnightVsFoe
    $('div').eq(0).hover(function() {
        $("ol").eq(0).slideDown();
    });
    $('div').eq(0).mouseleave(function() {
        $("ol").eq(0).slideUp();
    });

    //ListCreator
    $('div').eq(1).hover(function() {
        $('ol').eq(1).slideDown();
    });
    $('div').eq(1).mouseleave(function() {
        $('ol').eq(1).slideUp();
    });

    //flashAnime
    $('div').eq(2).hover(function() {
        $('ol').eq(2).slideDown();
    });
    $('div').eq(2).mouseleave(function() {
        $('ol').eq(2).slideUp();
    });
});