(function ($) {
   "use strict";
  
   //------- OWL carousle init  ---------------
  jQuery(document).ready(function(){
    function init_carousel_owl(){
      $('.init-carousel-owl').each(function(){
        var items = $(this).data('items') ? $(this).data('items') : 5;
        var items_lg = $(this).data('items_lg') ? $(this).data('items_lg') : 4;
        var items_md = $(this).data('items_md') ? $(this).data('items_md') : 3;
        var items_sm = $(this).data('items_sm') ? $(this).data('items_sm') : 2;
        var items_xs = $(this).data('items_xs') ? $(this).data('items_xs') : 1;
        var loop = $(this).data('loop') ? $(this).data('loop') : false;
        var speed = $(this).data('speed') ? $(this).data('speed') : 200;
        var auto_play = $(this).data('auto_play') ? $(this).data('auto_play') : false;
        var auto_play_speed = $(this).data('auto_play_speed') ? $(this).data('auto_play_speed') : false;
        var auto_play_timeout = $(this).data('auto_play_timeout') ? $(this).data('auto_play_timeout') : 1000;
        var auto_play_hover = $(this).data('auto_play_hover') ? $(this).data('auto_play_hover') : false;
        var navigation = $(this).data('navigation') ? $(this).data('navigation') : false;
        var rewind_nav = $(this).data('rewind_nav') ? $(this).data('rewind_nav') : false;
        var pagination = $(this).data('pagination') ? $(this).data('pagination') : false;
        var mouse_drag = $(this).data('mouse_drag') ? $(this).data('mouse_drag') : false;
        var touch_drag = $(this).data('touch_drag') ? $(this).data('touch_drag') : false;
        if(items == 1 ) items_lg = items_md = items_sm = items_xs = 1;
        $(this).owlCarousel({
            nav: navigation,
            autoplay: auto_play,
            autoplayTimeout: auto_play_timeout,
            autoplaySpeed: auto_play_speed,
            autoplayHoverPause: auto_play_hover,
            navText: [ '<i class="gv-icon-164"></i>', '<i class="gv-icon-165"></i>' ],
            autoHeight: false,
            loop: loop, 
            dots: pagination,
            rewind: rewind_nav,
            smartSpeed: speed,
            mouseDrag: mouse_drag,
            touchDrag: touch_drag,
            responsive : {
                0 : {
                  items: 1,
                  nav: false
                },
                640 : {
                  items : items_xs
                },
                768 : {
                  items : items_sm
                },
                992: {
                  items : items_md
                },
                1200: {
                  items: items_lg
                },
                1400: {
                  items: items
                }
            }
        });
     }); 
  }

  init_carousel_owl();

/* ============ Isotope ==============*/
  if ( $.fn.isotope ) {
    if($('.isotope-items').length){
      $( '.isotope-items' ).each(function() {
        var _pid = $(this).data('pid');
        var $el = $( this ),
            $filter = $( '.portfolio-filter a.' + _pid ),
            $loop =  $( this );

        $loop.isotope();

        $loop.imagesLoaded(function() {
          $loop.isotope( 'layout' );
        });
        var i = 0;
        function reloay(){
          var e = $(document).scrollTop();
          //console.log($(window).height());
          $loop.each(function(){
            var o = $loop.parents('.gva-portfolio-items');
            if(o.offset().top <= (e + $(window).height())  && o.offset().top + $(window).height() > e){
              $loop.isotope( 'layout' );
            } 
          });
        }

        $(window).load(function(){
          setTimeout(function() {
            reloay();
          }, 1000);
        });  

        $(document).scroll(function() {
          reloay();
        });

        if ( $filter.length > 0 ) {
          $filter.on( 'click', function( e ) {
            e.preventDefault();
            var $a = $(this);
            $filter.removeClass( 'active' );
            $a.addClass( 'active' );
            $loop.isotope({ filter: $a.data( 'filter' ) });
          });
        };
      });
    }
  };

  function scrolltop() {
    var offset = 300;
    var duration = 500;
    jQuery(window).scroll(function() {
      if (jQuery(this).scrollTop() > offset) {
        jQuery('.return-top').fadeIn(duration);
      } else {
        jQuery('.return-top').fadeOut(duration);
      }
    });

    jQuery('.return-top').click(function(event) {
      event.preventDefault();
      jQuery('html, body').animate({scrollTop: 0}, duration);
      return false;
    });
  }
  scrolltop();

  if ($(window).width() > 780) {
    if ( $.fn.jpreLoader ) {
      var $preloader = $( '.js-preloader' );
      $preloader.jpreLoader({
        autoClose: true,
      }, function() {
        $preloader.addClass( 'preloader-done' );
        $( 'body' ).trigger( 'preloader-done' );
        $( window ).trigger( 'resize' );
      });
    }
  }else{
    $('body').removeClass('js-preloader');
  };

  $('#gva-offcanvas-inner').perfectScrollbar();
  
  // ==================================================================================
  // Offcavas
  // ==================================================================================
  $('#menu-bar').on('click',function(e){
    if($('.gva-offcanvas-inner').hasClass('show-view')){
        $(this).removeClass('show-view');
        $('.gva-offcanvas-inner').removeClass('show-view');
        $('body').removeClass('enable-offcanvas');
    }else{
        $(this).addClass('show-view');
        $('.gva-offcanvas-inner').addClass('show-view'); 
        $('body').addClass('enable-offcanvas');
    }
    e.stopPropagation();
  })

  $('#menu-bar-another').on('click',function(e){
    if($(this).hasClass('show-view')){
      $(this).removeClass('show-view');
      $(this).parent().find('.content-inner').removeClass('show-view');
    }else{
      $(this).addClass('show-view');
      $(this).parent().find('.content-inner').addClass('show-view'); 
    }
    e.stopPropagation();
  })

  $('.close-offcanvas a').on('click', function(e){
    if($('.gva-offcanvas-inner').hasClass('show-view')){
      $('body').removeClass('enable-offcanvas');
      $('.gva-offcanvas-inner').removeClass('show-view');
      $('#menu-bar').removeClass('show-view');
    }
    e.stopPropagation();
  });


  $('.sidebar').theiaStickySidebar({
		additionalMarginTop: 30,
    minWidth: 992
  });

  var $container = $('.post-masonry-style');
  $container.imagesLoaded( function(){
      $container.masonry({
          itemSelector : '.item-masory',
          gutterWidth: 0,
          columnWidth: 1,
      }); 
  });

  $('.gva-search-region .icon').on('click',function(e){
    if($(this).parent().hasClass('show')){
        $(this).parent().removeClass('show');
    }else{
        $(this).parent().addClass('show');
    }
    e.stopPropagation();
  })

  $('.gva-search-region .close').on('click',function(e){
    $(this).parents('.gva-search-region').removeClass('show');
  });

  $('.gva-account-region .icon').on('click',function(e){
    if($(this).parent().hasClass('show')){
        $(this).parent().removeClass('show');
    }else{
        $(this).parent().addClass('show');
    }
    e.stopPropagation();
  })

  function load_lazy(){
    if(drupalSettings.layzy_load=='on'){
      $(window).off('scroll.unveil resize.unveil lookup.unveil');
      setTimeout(function(){
        $("img.unveil-image").unveil(100, function() {
          $(this).addClass('image-loaded');
          var $container = $('.post-masonry-style');
          $container.masonry({
              itemSelector : '.item-masory',
              gutterWidth: 0,
              columnWidth: 1,
          });
        });
      }, 200);
    }
    return false;
  }
  load_lazy();

  /*========== Click Show Sub Menu ==========*/
  $('.gva-navigation a').on('click','.nav-plus',function(){
      if($(this).hasClass('nav-minus') == false){
          $(this).parent('a').parent('li').find('> ul').slideDown();
          $(this).addClass('nav-minus');
      }else{
          $(this).parent('a').parent('li').find('> ul').slideUp();
          $(this).removeClass('nav-minus');
      }
      return false;
  });

 //==== Customize =====
  $('.gavias-skins-panel .control-panel').click(function(){
      if($(this).parents('.gavias-skins-panel').hasClass('active')){
          $(this).parents('.gavias-skins-panel').removeClass('active');
      }else $(this).parents('.gavias-skins-panel').addClass('active');
  });

  $('.gavias-skins-panel .layout').click(function(){
      $('body').removeClass('wide-layout').removeClass('boxed');
      $('body').addClass($(this).data('layout'));
      $('.gavias-skins-panel .layout').removeClass('active');
      $(this).addClass('active');
      var $container = $('.post-masonry-style');
      $container.imagesLoaded( function(){
          $container.masonry({
              itemSelector : '.item-masory',
              gutterWidth: 0,
              columnWidth: 1,
          }); 
      });
  });
  
  /*-------------Milestone Counter----------*/
  jQuery('.milestone-block').each(function() {
    jQuery(this).appear(function() {
      var $endNum = parseInt(jQuery(this).find('.milestone-number').text());
      jQuery(this).find('.milestone-number').countTo({
        from: 0,
        to: $endNum,
        speed: 4000,
        refreshInterval: 60,
        formatter: function (value, options) {
          value = value.toFixed(options.decimals);
          value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
          return value;
        }
      });
    },{accX: 0, accY: 0});
  });
  
  /*----------- Animation Progress Bars --------------------*/
  $("[data-progress-animation]").each(function() {
    var $this = $(this);
    $this.appear(function() {
      var delay = ($this.attr("data-appear-animation-delay") ? $this.attr("data-appear-animation-delay") : 1);
      if(delay > 1) $this.css("animation-delay", delay + "ms");
      setTimeout(function() { $this.animate({width: $this.attr("data-progress-animation")}, 800);}, delay);
    }, {accX: 0, accY: -50});
  });
  
  /*----------------------------------------------------*/
  /*  Pie Charts
  /*----------------------------------------------------*/
  var pieChartClass = 'pieChart',
        pieChartLoadedClass = 'pie-chart-loaded';
    
  function initPieCharts() {
    var chart = $('.' + pieChartClass);
    chart.each(function() {
      $(this).appear(function() {
        var $this = $(this),
          chartBarColor = ($this.data('bar-color')) ? $this.data('bar-color') : "#F54F36",
          chartBarWidth = ($this.data('bar-width')) ? ($this.data('bar-width')) : 150
        if( !$this.hasClass(pieChartLoadedClass) ) {
          $this.easyPieChart({
            animate: 2000,
            size: chartBarWidth,
            lineWidth: 8,
            scaleColor: false,
            trackColor: "#eee",
            barColor: chartBarColor,
          }).addClass(pieChartLoadedClass);
        }
      });
    });
  }
  initPieCharts();

  //===== Popup video ============
    $('.popup-video').magnificPopup({
      type: 'iframe',
      fixedContentPos: false
    });

  // ============================================================================
  // Fixed top Menu Bar
  // ============================================================================
  if($('.gv-sticky-menu').length > 0){
    var sticky = new Waypoint.Sticky({
      element: $('.gv-sticky-menu')[0]
    });
  }  

  // ============================================================================
  // Customize
  // ============================================================================
  $('.help .control-panel').click(function(){
    if($(this).parents('.help').hasClass('show')){
      $(this).parents('.help').removeClass('show');
    }else $(this).parents('.help').addClass('show');
  });

  //Fix caption image for gallery post 
  $('.article-detail .post-thumbnail.post-gallery .owl-item .item img').each(function(){
    var $title = $(this).attr('title');
    if($title && $title != undefined){
      $(this).parent().append('<div class="caption">'+$title+'</div>');
    }
  })

  $('.gsc-tabs-views-ajax ul[data-load="ajax"] a').on('click', function(){
    var $href = $(this).attr('href');
    var self = $(this);
    var main = $($href);
    var main_elements = $($href);
    var height = self.parents('.gsc-tabs-views-ajax').find('.tab-pane.active').height();
    if ( main.length > 0 && main_elements.data('loaded') == false ) {
      var loading = $('<div class="ajax-loading"></div>');
      loading.css('height', height);
      main_elements.html(loading);
      $.ajax({
          url: drupalSettings.gavias_load_ajax_view,
          type:'POST',
          dataType: 'html',
          data:  'view=' + main.data('view')
      }).done(function(reponse) {
         main_elements.html( reponse );
         main.data('loaded', 'true');
         init_carousel_owl();
         load_lazy();
         Drupal.attachBehaviors(document);
      });
      return true;
    }
  });

  var ajax_links = 'a.gva-pajax';
  
  $(document).pjax(ajax_links, '#gva-popup-ajax .gva-popup-ajax-content', {
    timeout: 5000,
    scrollTo: false,
    fragment: '#gva-pajax-get-content',
    push: false
  });

  $(document).on('submit', 'form.woocommerce-ordering', function(event) {
    $.pjax.submit(event, '#gva-popup-ajax',{fragment: '#wp-main-content'})
  })

  $(document).on('pjax:error', function(xhr, textStatus, error, options) {
    console.log('pjax error ' + error);
  });
             
  $(document).on('pjax:start', function(xhr, options) {
    $('#gva-popup-ajax').addClass('gva-ajax-loading').addClass('open');
    $('body').addClass('loading-pjax');
  });

  $(document).on('pjax:complete', function(xhr, textStatus, options) {
    $('#gva-popup-ajax').removeClass('gva-ajax-loading');
  });

  $(document).on('pjax:end', function(xhr, textStatus, options) {
    $('body').removeClass('gva-ajax-loading');
    $('#gva-popup-ajax').css('height', 'auto');
    jQuery('#camera_wrap_2').camera({
      loader: 'pie',
      pagination: false,
      thumbnails: true
    });
  });

  $('#gva-popup-ajax a.btn-close').on('click', function(){
    $(this).parents('#gva-popup-ajax').removeClass('open');
    $(this).parents('#gva-popup-ajax').find('.gva-popup-ajax-content').html('');
    $('body').removeClass('loading-pjax');
  });

  $('.drupal-message ._close').click(function(){
    $(this).parents('.drupal-message').remove();
  })

});

})(jQuery);
