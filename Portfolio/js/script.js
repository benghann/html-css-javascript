// 1. Trigger point: Scroll
// 2. What to do? 
// 3. How? Logic
// 4. Test
// 5. Debug

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

        // To fix bug on scrolling to position => active class not tally
        $(window).off('scroll');
        $(window).on('scroll', function() {
            setActiveLink();
        });
    });

    setActiveLink();
    $(window).on('scroll', function() {
        setActiveLink();
        setNavBarFixed();
    });

    function setNavBarFixed() {
        const scrollTopPosition = $(window).scrollTop();

        if (scrollTopPosition >= 50) {
            $("#nav-bar").addClass('affix-top');
        } else {
            $("#nav-bar").removeClass('affix-top');
        }
    }

    function setActiveLink() {
        const scrollTopPosition = $(window).scrollTop();

        $('#nav-bar .nav-item').removeClass('active');

        $('section').each(function() {
            const sectionID = $(this).attr("id");
            let sectionOffsetTop = Math.floor($(this).offset().top);
            let sectionOffsetBottom = Math.floor(sectionOffsetTop + $(this).outerHeight()); 
            const navLink = $('#nav-bar .nav-link[href="#' + sectionID + '"]');
            const navLinkParent = navLink.parent()[0];

            // To fix bugs on scrolling to CTA & Work Experience => no link active
            switch (sectionID) {
                case 'home':
                    sectionOffsetTop = 0;
                    break;
                case 'latest-works':
                    sectionOffsetBottom += $("#work-experiences").outerHeight();
                    break;
                case 'contact-me':
                    sectionOffsetTop -= $("#cta").outerHeight();
                    break;
                default:
            }

            if (scrollTopPosition >= sectionOffsetTop && scrollTopPosition < sectionOffsetBottom) {
                $(navLinkParent).addClass('active');
            }
        });
    }
})