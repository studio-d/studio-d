var cache = [];
// Arguments are image paths relative to the current page.
$.preLoadImages = function() {
  var args_len = arguments.length;
  for (var i = args_len; i--;) {
    var cacheImage = document.createElement('img');
    cacheImage.src = arguments[i];
    cache.push(cacheImage);
  }
}

jQuery(document).ready(function() {
  wrapperWidth = jQuery(".wrapper").width();
  if(wrapperWidth < 710) {
    wrapperWidth = wrapperWidth - 125;
  } else {
    wrapperWidth = wrapperWidth - 145;
  }
  jQuery(".content").css("width", wrapperWidth);
  jQuery(".content #sliderwrapper").css("width", wrapperWidth);
  jQuery(".page-content").css("width", wrapperWidth - 145);
  jQuery(".page-content #sliderwrapper").css("width", wrapperWidth - 145);
  
  jQuery(".page-nav-item a").bind("click", function() {
    jQuery(".page-nav-item a").removeClass("page-nav-selected");
    jQuery(this).addClass("page-nav-selected");
    var a_id = jQuery(this).attr("id");
    jQuery(".about-pages div").hide();
    jQuery("." + a_id).fadeIn();
    Cufon.refresh();
  });
  
  jQuery(".nav-item a, .page-nav-items a").hover(function () {
    jQuery(this).css("color", "#9e8f41");
    Cufon.refresh();
  }, function () {
    jQuery(this).css("color", "#000000");
    Cufon.refresh();
  });
  jQuery(".widget li a, .home-block h3 a").hover(function () {
    jQuery(this).css("color", "#9e8f41");
    Cufon.refresh();
  }, function () {
    jQuery(this).css("color", "#000000");
    Cufon.refresh();
  });
  
  /* jQuery("a[rel^='prettyPhoto']").prettyPhoto({
    theme: 'light_square',
    opacity: 0.40,
    overlay_gallery: false,
    changepicturecallback: function(){
      var url = window.location;
      backemail = 'mailto:zacksurf@gmail.com?subject=Mail From Website/Images&body=Hello %0A%0A'+encodeURIComponent(url)+'%0A%0A%0A%0A----------------';
      designeremail = 'mailto: ?subject=Mail via Mariannefassler.co.za&body=Hello %0A%0A'+encodeURIComponent(url)+'%0A%0A%0A%0A----------------';
      jQuery('a.social-email-one').attr("href", backemail);
      jQuery('a.social-email-two').attr("href", designeremail);
    }
  }); */
  $("a[rel^='prettyPhoto']").prettyPhoto({
    opacity: 0.40,
    changepicturecallback: function(){
      var url = window.location;
      backemail = 'mailto:marianne@leopardfrock.co.za?subject=Mail From Website/Images&body=Hello %0A%0A'+encodeURIComponent(url)+'%0A%0A%0A%0A----------------';
      designeremail = 'mailto: ?subject=Mail via Mariannefassler.co.za&body=Hello %0A%0A'+encodeURIComponent(url)+'%0A%0A%0A%0A----------------';
      jQuery('a.social-email-one').attr("href", backemail);
      jQuery('a.social-email-two').attr("href", designeremail);
    },
    default_width: 900,
    allow_resize: true
  });
  jQuery('.hover-over').hover(function () {
          jQuery(this).find('.carousel-prev, .carousel-next').stop().animate({opacity: "1"}, 200);
      }, function () {
          jQuery(this).find('.carousel-prev, .carousel-next').stop().animate({opacity: "0"}, 200);
      }
  );
  
  
});

jQuery(window).load(function() {
  jQuery(function(){
      var $container = jQuery('.blog-loop');
      $container.isotope({
        itemSelector: '.blog-block'
      });
  });

  jQuery('#home-carousel').carouFredSel({
      items: 1,
      width: '100%',
      circular: true,
      responsive: true,
      scroll: {
        pauseOnHover: true,
        duration: 1000,
        fx: 'crossfade'
      },
      auto: {
        play: true
      },
      pagination: {
        container: '#pager',
        duration: 300
      },
      onCreate: function(items) {
        $imgheight = jQuery('#carousel img:first').height();
        jQuery(".caroufredsel_wrapper").css("height", $imgheight);
        jQuery("#home-carousel").delay(100).animate({opacity: "1"}, 500);
        jQuery("#home-carousel .home-slider-block").css("visibility", "visible");
        setSize();
      },
      prev: ".carousel-prev",
      next: ".carousel-next"
  });
});

jQuery(window).resize(function () {
  setSize();
}).resize();

// Set the size of .content div on window resize
function setSize () {
  wrapperWidth = jQuery(".wrapper").width();
  wrapperWidth = wrapperWidth - 145;
  jQuery(".content").css("width", wrapperWidth);
  jQuery(".content #sliderwrapper").css("width", wrapperWidth);
  jQuery(".page-content").css("width", wrapperWidth - 145);
  jQuery(".page-content #sliderwrapper").css("width", wrapperWidth - 145);
}