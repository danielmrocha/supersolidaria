/**
 * @file
 * Global utilities.
 *
 */
(function($, Drupal) {
  'use strict';
  Drupal.behaviors.Accesibility = {
    attach: function(context, settings) {
      $('#a_more').on('click', function(e){
        //console.log("Aumentando")
        // let curSize= parseInt($('html').css('font-size')) + 2;
        // if(curSize<=24)
        // $('html').css('font-size', curSize);
        $("body p, body span, body h1, body h2, body h3, body h4, body h5, body a, body b, body strong").each(function (elm) {
          var currentSize = parseInt($(this).css('font-size'))
          if (currentSize > 0) {
            var newSize = currentSize + 1;
            $(this).attr('style', 'font-size: '+newSize+'px !important');
          }
        });
      });
      /*Disminuir tamaño de la fuente*/
      $('#a_less').on('click', function(e){
        // let curSize= parseInt($('html').css('font-size')) - 2;
        // if(curSize>=14)
        // $('html').css('font-size', curSize);
        $("body p, body span, body h1, body h2, body h3, body h4, body h5, body a").each(function (elm) {
          var currentSize = parseInt($(this).css('font-size'))
          var newSize = currentSize - 1;
          if (newSize > 0) {
            $(this).attr('style', 'font-size: '+newSize+'px !important');
          }
        });
      });
      /*Alto contraste*/
      $('#high_contrast').on('click', function(e){
        if($('html').hasClass('altoContraste')){
          $('html').removeClass('altoContraste');
          $(".navbar-default" ).removeClass( "navbar-inverse" );
        }
        else{
          $('html').addClass('altoContraste');
          $(".navbar-default" ).addClass( "navbar-inverse" );
        }
      });
    }
  };

})(jQuery, Drupal);
