// When the widow loads ...
jQuery(document).ready(function($) {

  // IE 10 pointer events polyfill - so CSS pointer-events property will work

  PointerEventsPolyfill.initialize({});

  // Remove barndoors (this will need some kind of cue...)

  $('.barndoor-bottom, .barndoor-top').addClass('remove');

  // Zero out the hash value if it is already set by a previous session
  var newHash = '';

  // Make it possible for .thumbs to trigger a hashchange in the window - the hash value is set by the attributes within the thumb

  $('.thumb').on('click', function() {
    window.location.hash = $(this).attr("data-link");
    return false;
  });

//Open Presentation

  function openPrez(){
    window.location.hash = $(this).attr("data-link");
          return false;
    prez = 'prez-' + newHash + '.html body > *';
    content = $('.presentation');

    $('.work').removeClass('hidden');
    setTimeout(function(){
      $('.black-overlay').removeClass('hidden');
    }, 1000);

    content.load(prez, function(){
      // Once loaded, fade out loading, remove workdoor-top...

      $('.loading').addClass('hidden');              
      $('.workdoor-top').addClass('hidden');

  }

  // Close Presentation

  function closePrez(){

    window.location.hash = '';

    $('.workdoor-bottom').removeClass('hidden');

          setTimeout(function(){
            $('.work').addClass('hidden');
          }, 500);

          // reset

          setTimeout(function(){
            $('.workdoor-bottom').addClass('hidden');
            $('.workdoor-top').removeClass('hidden');
            $('.loading').removeClass('hidden');
          }, 500);

          setTimeout(function(){
            $('.black-overlay').addClass('hidden');
          }, 1500);    
  }

  // create an event which will be triggered by a hashchange (by .thumb click, link or by manually entering into address bar)

  $(window).on('hashchange', function(){
    
    // pull the hash value we just made (or that was entered manually in address bar)

    newHash = window.location.hash.substring(1);

    // Load the content IF there is a hash value. Perform the transition.
    
    if (newHash) {

        openPrez();

        });

        // delegate hiding transition to presentation's close button (does not unload anything, just adds classes to trigger the CSS transitions)

        $('.close').click(function() {
          closePrez();
        });

        // delegate next and previous buttons in current work

        $('.next, .prev').on('click', function() {
          closePrez();
          openPrez();

        });
      
    };
      
  });

  // trigger the hashchange event manually, which will load the content

  $(window).trigger('hashchange');

});