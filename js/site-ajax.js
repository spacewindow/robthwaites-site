jQuery(window).load(function(){
  $('.preload-main').removeClass('preloading', function(){
      window.location.hash="#about";
  });
});

// When the window loads ...
jQuery(document).ready(function($) {

  // IE 10 pointer events polyfill - so CSS pointer-events property will work

  // PointerEventsPolyfill.initialize({});

  // Zero out the hash value if it is already set by a previous session
  var newHash = '';
  var newTitle = '';

  // Make it possible for .thumbs to trigger a hashchange in the window - the hash value is set by the attributes within the thumb
  $('.thumb').on('click', function(e) {
    // just enough to register a click event so :hover state will work to reveal thumbs link
    e.preventDefault();
  });

  $('.thumb-link, .main-link').on('click', function(e) {
    e.preventDefault();
    url = $(this).attr("href");
    // url = url.split("."); // only needed this for php pages - not using that now
    // url = url[0];
    window.location.hash = url;
    // Google UA Asynchronous Tracking
    // ga('send', 'event', 'nav-primary', 'click', 'nav buttons', {'page': href, 'title':  });
    return false;
  });

  // Fn to allow an event to fire after all images are loaded
  $.fn.imagesLoaded = function () {

      $imgs = this.find('img[src!=""]');
      // if there's no images, just return an already resolved promise - NOTE: this is not working, had to add an image to Contact page becuase it was not removing the loading mask
      if (!$imgs.length) {return $.Deferred.resolve().promise();}

      // for each image, add a deferred object to the array which resolves when the image is loaded
      var dfds = [];
      $imgs.each(function(){

          var dfd = $.Deferred();
          dfds.push(dfd);
          var img = new Image();
          img.onload = function(){dfd.resolve();}
          img.src = this.src;

      });

      // return a master promise object which will resolve when all the deferred objects have resolved
      // IE - when all the images are loaded
      return $.when.apply($,dfds);

  }

  function closeDiv() {

    window.location.hash = '';

    $('.workdoor-bottom').removeClass('hidden');

    setTimeout(function(){
      $('.work').addClass('hidden');
      $('.presentation').html('');
    }, 500);

    // reset

    setTimeout(function(){
      $('.workdoor-bottom').addClass('hidden');
      $('.workdoor-top').removeClass('hidden');
    }, 1500);

    setTimeout(function(){
      $('.black-overlay').addClass('hidden');
    }, 1500);

    newTitle = 'Rob Thwaites - Web & Graphic Designer';

    document.title = newTitle;

    // ga('send', {
    //   'hitType': 'pageview',
    //   'page': '/',
    //   'title': newTitle
    // });

  }

  // create an event which will be triggered by a hashchange (by .thumb click, link or by manually entering into address bar)

  $(window).on('hashchange', loadPage);


  function loadPage(){

    // pull the hash value we just made (or that was entered manually in address bar)

    newHash = window.location.hash.substring(1);

    // Load the content IF there is a hash value. Perform the transition.

    if (newHash && newHash !== '#' || newHash !== '') {
        content = $('.presentation');

        $('.loading').removeClass('hidden');
        $('.work').removeClass('hidden');
        setTimeout(function(){
          $('.black-overlay').removeClass('hidden');
        }, 1000);


        $.ajax({
            type:'POST',
            url: '/' + newHash,
            dataType: 'html',
            success: function (data) {

                // Set the page title to that of the loaded page

                //console.log(data);
                newTitle = $(data).filter('title').text();
                document.title = newTitle;

                var fullPage = $(data).find('#slides');
                if(fullPage){
                  //console.log(fullPage);
                }
                content.html(fullPage).imagesLoaded().then(function(){
                // Once loaded, fade out loading, remove workdoor-top...
                    content.scrollTop(0);
                  $('.loading').addClass('hidden');
                  $('.workdoor-top').addClass('hidden');
                  $('#slides').focus();

                  // delegate hiding transition to presentation's close button (does not unload anything, just adds classes to trigger the CSS transitions)

                  $('.close').click(function(e) {
                    e.preventDefault();
                    closeDiv();
                  });

                  $('.black-overlay').click(function(){
                    closeDiv();
                  });


                 $('.next, .prev').click(function(e) {
                    e.preventDefault();
                    url = $(this).attr("href");
                    url = url.split(".");
                    url = url[0];
                    workDoorBottom = $('.workdoor-bottom');

                    workDoorBottom.removeClass('hidden');

                    setTimeout(function(){
                      workDoorBottom.addClass('hidden');
                      $('.workdoor-top').removeClass('hidden');
                      $('.loading').removeClass('hidden');
                    }, 2000);

                    setTimeout(function(){
                      window.location.hash = url;
                      return false;
                    }, 2500);

                  });
               });

               // Finally, log a hit on Google / Universal Analytics

              // ga('send', {
              //   'hitType': 'pageview',
              //   'page': '/' + newHash,
              //   'title': newTitle
              // });

              },

              error: function () {
                  //console.log('Ajax Error');
              }
          });
    }

    else {
      closeDiv();
    }

  }

  // sets Escape key to close the presentation

  $(document).keyup(function(e) {
    if (e.keyCode === 27) {  // esc
      closeDiv();
    }
  });

  // trigger the hashchange event manually, which will load the content

  $(window).trigger('hashchange');

});

$(window).load(function(){

  // Remove barndoors (this will need some kind of cue...)
  $('.barndoor-bottom, .barndoor-top').addClass('remove');

    var slider = $(".royalSlider").royalSlider({
        // options go here
        // as an example, enable keyboard arrows nav
        // keyboardNavEnabled: true
    }).data('royalSlider');

    slider.ev.on('rsOnCreateVideoElement', function(e, url) {
        // url - path to video from data-rsVideo attribute
        // slider.videoObj - jQuery object that holds video HTML code
        // slider.videoObj must be IFRAME, VIDEO or EMBED element, or have class rsVideoObj
        slider.videoObj = $('<video autoplay loop muted playsinline class="rsNoDrag" style="width: 300px; height: 533px"><source src="' + url + '"></video>');
      });

      slider.ev.on('rsOnDestroyVideoElement', function(e) {
        // slider.videoObj - jQuery object that holds video HTML code
});

});

// $('body').on('mousedown mouseup touchstart touchend', function(){
//   $(this).toggleClass('mousedown');
// });
