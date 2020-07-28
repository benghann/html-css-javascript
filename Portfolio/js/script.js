$(document).ready(function() {
    $("#nav-bar .nav-link").click(function(event) {
        event.preventDefault();

        console.log('Clicked nav link');

        const sectionID = $(this).attr("href"); // #about-me
        const sectionOffsetTop = $(sectionID).offset().top;

        $('html, body').animate({
            scrollTop: sectionOffsetTop, 
        }, 500);

        $('#nav-bar .nav-item').removeClass('active');
        const parentItem = $(this).parent()[0];
        $(parentItem).addClass('active');
    });

    setActiveLink();
    $(window).scroll(function() {
        setActiveLink();
    })

    function setActiveLink() {
        const scrollTopPosition = $(window).scrollTop();

        $('#nav-bar .nav-item').removeClass('active');

        $('section').each(function() {
            const sectionID = $(this).attr("id");
            const sectionOffsetTop = Math.floor($(this).offset().top);
            const sectionOffsetBottom = Math.floor(sectionOffsetTop + $(this).outerHeight()); 
            const navLink = $('#nav-bar .nav-link[href="#' + sectionID + '"]');
            const navLinkParent = navLink.parent()[0];

            console.log(sectionID, sectionOffsetTop, sectionOffsetBottom);

            if (scrollTopPosition >= sectionOffsetTop && scrollTopPosition < sectionOffsetBottom) {
                $(navLinkParent).addClass('active');
            }
        })

        // Bugs to be fixed:
        // scroll to position => active class not tally
        // scroll to CTA & Work Experience => no link active
    }
})