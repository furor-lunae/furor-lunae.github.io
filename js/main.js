/* 

Vanilla Template

https://templatemo.com/tm-526-vanilla

*/

jQuery(document).ready(function($) {


  // Smooth scrolling (https://css-tricks.com/snippets/jquery/smooth-scrolling/)
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 600, function () {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });
     
  // smoothscroll on sidenav click

  $('.tabgroup > div').hide();
  $('.tabgroup > div:first-of-type').show();
  $('.tabs a').click(function (e) {
    e.preventDefault();
    var $this = $(this),
      tabgroup = '#' + $this.parents('.tabs').data('tabgroup'),
      others = $this.closest('li').siblings().children('a'),
      target = $this.attr('href');
    others.removeClass('active');
    $this.addClass('active');
    $(tabgroup).children('div').hide();
    $(target).show();

  })

  var owl = $("#owl-testimonials");

  owl.owlCarousel({

    pagination: true,
    paginationNumbers: false,
    autoPlay: false, //Set AutoPlay to 3 seconds
    items: 3, //10 items above 1000px browser width
    itemsDesktop: [1000, 3], //5 items between 1000px and 901px
    itemsDesktopSmall: [900, 2], // betweem 900px and 601px
    itemsTablet: [600, 1], //2 items between 600 and 0
    itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option

  });


});
