document.addEventListener("DOMContentLoaded", () => { 

    $('ol').eq(0).slideUp();
    $('ol').eq(1).slideUp();  
    $('ol').eq(2).slideUp(); 

    //KnightVsFoe
    $('div').eq(2).hover(function() {
        $('ol').eq(0).slideDown();
    });
    $('div').eq(2).mouseleave(function() {
        $('ol').eq(0).slideUp();
    });

    //ListCreator
    $('div').eq(4).hover(function() {
        $('ol').eq(1).slideDown();
    });
    $('div').eq(4).mouseleave(function() {
        $('ol').eq(1).slideUp();
    });
});