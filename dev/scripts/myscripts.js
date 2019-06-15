$(document).ready(function() {
  svg4everybody();

  //active link on click

  $('.nav__item').on('click', function() {
    var list = $(this).closest('ul');
    list.find('.nav__item').removeClass('active');
    $(this).toggleClass('active');
  });

  $('.title1').css('display', 'block');

  // works horizontal scrolling

  var myScroll;

  function adjustCardsContainer() {
    var workCardWidth = $('.grid__item').width();
    var workCardQnty = $('.grid__item').length;
    // var sw = (window.matchMedia("(max-width: 460px)").matches) ? workCardWidth * workCardQnty + 100 : (workCardWidth * (workCardQnty / 2) + 100);
    var sw = workCardWidth * Math.ceil(workCardQnty / 2) + 100;
    $('#scroller').css('width', sw + 'px');
  }

  adjustCardsContainer();

  $(window).resize(function() {
    adjustCardsContainer();
  });

  //оризонтальный скроллл секции работ

  function horScroll() {
    myScroll = new IScroll('#scrolling-wrapper', {
      eventPassthrough: true,
      scrollX: true,
      scrollY: false,
      scrollbars: true,
      interactiveScrollbars: true,
      mouseWheel: false,
      keyBindings: true,
      useTransition: false,
    });
  }

  horScroll();

  // document.addEventListener('touchmove', function(e) {
  //   e.preventDefault();
  // }, false);

  // fullpage settings

  $('#fullpage').fullpage({
    anchors: ['advantages', 'services', 'works', 'start', 'order'],
    menu: '#menu',
    scrollBar: false,
    controlArrows: false,
    slidesNavigation: false,
    slidesNavPosition: 'bottom',
    paddingTop: '50px',
    // Докрутка
    // fitToSection: false,
    // scrollOverflow:true,
    loopBottom: true,
    lazyLoading: true, //<img data-src="image.png">
    responsiveWidth: 768,
    onSlideLeave: function(
      anchorLink,
      index,
      slideIndex,
      direction,
      nextSlideIndex
    ) {
      var leavingSlide = $(this);

      //настройка слайдера

      function fade(title) {
        setTimeout(function() {
          $('.slide__title').css('display', 'none');
          $(title).each(function(idx, title) {
            var i = idx + 2;
            $(title).fadeIn(idx * '2000');
          });
        }, 1000);
      }

      // index == 1;
      // var i = slideIndex, dir = direction;
      // switch (i, dir) {
      // case (i == 0 && dir == 'right'):
      //   console.log('First silde leaved');
      //   fade('.title2');
      //   // break;
      // case (i == 1 && dir == 'right'):
      //   console.log('Second silde leaved');
      //   fade('.title3');
      //   // break;
      // }

      if (index == 1 && slideIndex == 0 && direction == 'right') {
        fade('.title2');
      }

      if (index == 1 && slideIndex == 1 && direction == 'right') {
        fade('.title3');
      }

      if (index == 1 && slideIndex == 2 && direction == 'left') {
        fade('.title1');
      }
    },
  }); // fullpage init

  setInterval(function() {
    $.fn.fullpage.moveSlideRight();
  }, 7000);

  //nice-select for inputs

  $('.order-form select').niceSelect();

  //toggle hamburger menu

  $('.hamburger').on('click', function() {
    $(this).toggleClass('is-active');
    $('.nav-dropdown').slideToggle('slow');
  });

  $('.nav__link').on('click', function() {
    $('.nav-dropdown').slideUp('fast');
    $('.hamburger').removeClass('is-active');
  });

  //price-tabs

  var $wrapper = $('.price-table'),
    $allTabs = $wrapper.find('.price-table__block'),
    $tabMenu = $wrapper.find('.price-table__item');

  $allTabs.not(':first-of-type').hide();

  $tabMenu.each(function(i) {
    $(this).attr('data-tab', 'tab' + i);
  });
  $allTabs.each(function(i) {
    $(this).attr('data-tab', 'tab' + i);
  });

  $tabMenu.on('click', function() {
    var dataTab = $(this).data('tab');
    $getWrapper = $(this).closest($wrapper);
    $getWrapper.find($tabMenu).removeClass('active');
    $(this).removeClass('hovered');
    $(this).addClass('active');
    $getWrapper.find($allTabs).hide();
    $getWrapper
      .find($allTabs)
      .filter('[data-tab=' + dataTab + ']')
      .show();
  });

  $tabMenu.on('mouseenter mouseleave', function() {
    if (!$(this).hasClass('active')) {
      $(this).toggleClass('hovered');
    }
  });

  // mailsend

  $('#form').on('submit', function(e) {
    e.preventDefault();
    var fd = new FormData(this);
    $.ajax({
      url: '../send.php',
      type: 'POST',
      contentType: false,
      processData: false,
      data: fd,
      success: function(msg) {
        if (msg == 'ok') {
          $('.info').text('Отправлено');
          $('input, textarea, select')
            .not(':input[type=file], :input[type=submit]')
            .val('');
        } else {
          $('.info').text('Ошибка');
        }
      },
    });
  });
}); //ready
