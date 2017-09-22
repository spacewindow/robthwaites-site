// When the window loads ...
jQuery(document).ready(function($) {


      // Fn to allow an event to fire after all images are loaded
      $.fn.imagesLoaded = function() {

        $imgs = this.find('img[src!=""]');
        // if there's no images, just return an already resolved promise - NOTE: this is not working, had to add an image to Contact page becuase it was not removing the loading mask
        if (!$imgs.length) {
          return $.Deferred.resolve().promise();
        }

        // for each image, add a deferred object to the array which resolves when the image is loaded
        var dfds = [];
        $imgs.each(function() {

          var dfd = $.Deferred();
          dfds.push(dfd);
          var img = new Image();
          img.onload = function() {
            dfd.resolve();
          }
          img.src = this.src;

        });

        // return a master promise object which will resolve when all the deferred objects have resolved
        // IE - when all the images are loaded
        return $.when.apply($, dfds);

      }

      $(window).load(function() {


        var slider = $(".royalSlider").royalSlider({
          // options go here
          // as an example, enable keyboard arrows nav
          // keyboardNavEnabled: true
          autoScaleSlider: true,
          imageScaleMode: 'fit',
          controlNavigation: 'none'

        }).data('royalSlider');


      var prevSlideVideo;
      var playSlideVideo = function() {
        if(prevSlideVideo) {
          prevSlideVideo.pause();
        }
        var video = slider.currSlide.content.find('video');
        if(video.length) {
          prevSlideVideo = video[0];
          prevSlideVideo.play();
        } else {
          prevSlideVideo = null;
        }

      };
  slider.ev.on('rsAfterSlideChange', playSlideVideo);
  playSlideVideo();

        // slider.ev.on('rsOnCreateVideoElement', function(e, url) {
        //   // url - path to video from data-rsVideo attribute
        //   // slider.videoObj - jQuery object that holds video HTML code
        //   // slider.videoObj must be IFRAME, VIDEO or EMBED element, or have class rsVideoObj
        //   slider.videoObj = $('<video autoplay loop muted playsinline class="rsNoDrag" style="width: 300px; height: 533px"><source src="' + url + '"></video>');
        // });
        //
        // slider.ev.on('rsOnDestroyVideoElement', function(e) {
        //   // slider.videoObj - jQuery object that holds video HTML code
        // });

      });

      });
