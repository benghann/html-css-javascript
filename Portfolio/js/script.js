$(document).ready(function() {
    $("#nav-bar .nav-link").click(function(event) {
        event.preventDefault();

        console.log('Clicked nav link');

        const sectionID = $(this).attr("href"); // #about-me
        const sectionOffsetTop = $(sectionID).offset().top;

        $('html, body').animate({
            scrollTop: sectionOffsetTop, 
        }, 500);
    })
})