document.addEventListener("DOMContentLoaded", () => { 

    $('ol').eq(1).slideUp();
    $('ol').eq(2).slideUp();
    $('ol').eq(3).slideUp();  
    $('ol').eq(4).slideUp(); 

    //AdminNotes
    $('div').eq(4).hover(function() {
        $("ol").eq(1).slideDown();
    });
    $('div').eq(4).mouseleave(function() {
        $("ol").eq(1).slideUp();
    });

    //TreehouseAPI
    $('div').eq(5).hover(function() {
        $('ol').eq(2).slideDown();
    });
    $('div').eq(5).mouseleave(function() {
        $('ol').eq(2).slideUp();
    });

    //KnightVsFoe
    $('div').eq(6).hover(function() {
        $('ol').eq(3).slideDown();
    });
    $('div').eq(6).mouseleave(function() {
        $('ol').eq(3).slideUp();
    });

    //TicTacBoom
    $('div').eq(7).hover(function() {
        $('ol').eq(4).slideDown();
    });
    $('div').eq(7).mouseleave(function() {
        $('ol').eq(4).slideUp();
    });
});