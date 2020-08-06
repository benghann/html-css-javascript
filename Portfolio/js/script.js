// 1. Trigger point: Scroll
// 2. What to do? 
// 3. How? Logic
// 4. Test
// 5. Debug

$(document).ready(function() {
    $('a[href^="#"]').click(function() {
        event.preventDefault();

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
    })

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


    const grid = $('#latest-works .works-list').isotope({
        // options...
        itemSelector: '#latest-works .work-card',
        layoutMode: 'fitRows',
        percentPosition: true,
        horizontalOrder: true,
        masonry: {
            columnWidth: '#latest-works .work-card-sizer'
        },
    });

    $('#works-filtering .nav-link').click(function(event) {
        event.preventDefault();

        $('#works-filtering .nav-link').removeClass('active');
        $(this).addClass('active');

        const filtering = $(this).attr("data-filter");
        console.log(filtering);

        grid.isotope({
            filter: filtering,
        })
    })


      
})