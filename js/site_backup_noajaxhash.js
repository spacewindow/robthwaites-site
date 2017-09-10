jQuery(document).ready(function($){

  // IE 10 pointer events

  PointerEventsPolyfill.initialize({});

  // Load works, remove barndoors

  $('.nav-primary').load('work.html .presentations > *', function(){
    $('.barndoor-bottom, .barndoor-top').addClass('remove');

    // Once loaded, add click function to buttons

    $('.thumb').click(function(){

      link = $(this).attr('data-link');
      link = 'prez-' + link + '.html .presentation > *';
      hash = $(this).attr('data-link');
      content = $('.presentation');


      //content.addClass('hidden');
      $('.work').removeClass('hidden');

      content.load(link, function(){
        // Once loaded, remove work-door...
        $('.workdoor-top').addClass('hidden');

        // delegate action to close button...
        $('.close').click(function() {

          $('.workdoor-bottom').removeClass('hidden');

          setTimeout(function(){
            $('.work').addClass('hidden');
          }, 500);

          setTimeout(function(){
            $('.workdoor-bottom').addClass('hidden');
            $('.workdoor-top').removeClass('hidden');
          }, 500);

        });

        // pass hash URL to address bar and history

        window.location.hash = hash;

      });
      
    });
  });

});