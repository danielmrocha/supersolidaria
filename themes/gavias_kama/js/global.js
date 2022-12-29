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
        let curSize= parseInt($('html').css('font-size')) + 2;
        if(curSize<=24)
        $('html').css('font-size', curSize);
      });
      /*Disminuir tamaño de la fuente*/
      $('#a_less').on('click', function(e){
        let curSize= parseInt($('html').css('font-size')) - 2;
        if(curSize>=14)
        $('html').css('font-size', curSize);
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
