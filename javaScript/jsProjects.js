document.addEventListener("DOMContentLoaded", () => { 

    $('ol').eq(1).slideUp();
    $('ol').eq(2).slideUp();  

    //KnightVsFoe
    $('div').eq(4).hover(function() {
        $("ol").eq(1).slideDown();
    });
    $('div').eq(4).mouseleave(function() {
        $("ol").eq(1).slideUp();
    });

    //ListCreator
    $('div').eq(5).hover(function() {
        $('ol').eq(2).slideDown();
    });
    $('div').eq(5).mouseleave(function() {
        $('ol').eq(2).slideUp();
    });
});