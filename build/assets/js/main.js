//body preloader
$(window).on('load', function () {
  setTimeout(function () { // allowing 3 secs to fade out loader
    $('.page-loader').fadeOut('slow');
  }, 3500);
});

//On Scroll Header fixed to top
$(window).scroll(function () {
  if ($(window).scrollTop() >= 50) {
    $('header').addClass('fixed-top smooth');
  }
  else {
    $('header').removeClass('fixed-top smooth');
  }
});

// user dashboard
$('.item-wrap .user-btn').on('click', function () {
  $('.user-content').toggleClass('active');
  $('.notify-box').removeClass('active');
});
$('.item-wrap .notify-btn').on('click', function () {
  $('.notify-box').toggleClass('active');
  $('.user-content').removeClass('active');
});

// On hover open dropdown menu & clickable parent link
jQuery(function ($) {
  if ($(window).width() > 320) {
    $('.navbar .dropdown').hover(function () {
      $(this).find('.dropdown-menu').first().stop(true, true).delay(20).slideDown();

    }, function () {
      $(this).find('.dropdown-menu').first().stop(true, true).delay(20).slideUp();

    });

    $('.navbar .dropdown > a').click(function () {
      location.href = this.href;
    });

  }
});

//menu toggel
$('.menu-toggle').on('click', function () {
  $('.btn-wrapper').toggleClass('menu--is-revealed');
});

//  On Scroll back to top
$(window).on('scroll', function () {

  // Back Top Button
  if ($(window).scrollTop() > 500) {
    $('.scrollup').addClass('back-top');
  } else {
    $('.scrollup').removeClass('back-top');
  }
});
// On Click Section Switch
// used for back-top
$('[data-type="section-switch"]').on('click', function () {
  if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
    var target = $(this.hash);
    if (target.length > 0) {

      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});

// Background Set
$('.set-bg').each(function () {
  var bg = $(this).data('setbg');
  $(this).css('background-image', 'url(' + bg + ')');
});

// hero boxed slider
$('#hero-boxed-slider').owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  dots: false,
  navText: ["<i class='bi bi-chevron-left'></i>", "<i class='bi bi-chevron-right'></i>"],
  nav: true,
  mouseDrag: false,
  animateOut: 'fadeOut',
  responsiveClass: true,
  stagePadding: 30,
  margin: 10,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 2
    }
  }
});

// hero single slider
$('#hero-single-slider').owlCarousel({
  loop: true,
  autoplayHoverPause: true,
  dots: true,
  navText: ["<i class='bi bi-chevron-left'></i>", "<i class='bi bi-chevron-right'></i>"],
  nav: true,
  mouseDrag: false,
  responsiveClass: true,
  stagePadding: 30,
  margin: 10,
  center: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
});

//partner slider
$('#carouselfeatures').owlCarousel({
  loop: true,
  margin: 30,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  nav: true,
  dots: false,
  navText: ["<i class='bi bi-arrow-left-short'></i>", "<i class='bi bi-arrow-right-short'></i>"],
  responsiveClass: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 4
    }
  }
});

//review slider
$('#carouselReview').owlCarousel({
  loop: false,
  margin: 30,
  nav: true,
  dots: false,
  items: 3,
  navText: ["<i class='bi bi-arrow-left-short'></i>", "<i class='bi bi-arrow-right-short'></i>"],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 3
    }
  }
});

// hero pic effect
const bg = document.querySelector('.hero-image');
const windowWidth = window.innerWidth / 5;
const windowHeight = window.innerHeight / 5;

bg.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX / windowWidth;
  const mouseY = e.clientY / windowHeight;

  bg.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
});

// video frame open popup
jQuery(document).ready(function ($) {
  // Define App Namespace
  var popup = {
    // Initializer
    init: function () {
      popup.popupVideo();
    },
    popupVideo: function () {

      $('.video_model').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        gallery: {
          enabled: true
        }
      });

      // Image Gallery Popup
      $('.gallery_container').magnificPopup({
        delegate: 'a',
        type: 'image',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        gallery: {
          enabled: true
        }
      });

    }
  };
  popup.init($);
});

// Data calender
$(function () {
  $("#datepicker").datepicker();
  $("#closing-date").datepicker();
  $("#finish-date").datepicker();
  $("#dateSelect").datepicker();
});

// wow js
$(document).ready(function () {
  wow = new WOW(
    {
      boxClass: 'wow',      // default
      animateClass: 'animated', // default
      offset: 0,          // default
      mobile: true,       // default
      live: true        // default
    }
  )
  wow.init();
});

// Add active class to the current button (highlight it)
$(function () {
  $('.navbar-nav li a').filter(function () { return this.href == location.href }).parent().addClass('active').siblings().removeClass('active')
  $('.navbar-nav li a').click(function () {
    $(this).parent().addClass('active').siblings().removeClass('active')
  })
});


