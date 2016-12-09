$(document).ready(function() {
  
//some hover effects  
  $('.b-team__caption').hover(function(){
    $(this).parent('.b-team__card').find('.b-team__name').toggleClass('b-team__name_active');
  });
  $('.b-news__caption').hover(function(){
    $(this).parent('.b-news__card').find('.b-news__title').toggleClass('b-news__title_active');
  });
  $('.b-recent-block__text').hover(function(){
    $(this).toggleClass('b-recent-block__text_active').parent('.b-recent-block').find('.b-recent-block__link').toggleClass('b-recent-block__link_active');
  });
  $('.b-activities__icon').hover (function(){
      $(this).toggleClass('b-activities__icon_active');
  });

 // mobile menu

  $('.tcon-menu--xbutterfly').click(function(){
    console.log(this);
    $('.b-header-mobile').toggleClass('b-header-mobile_shown');
  });

// transformicons init	
	transformicons.add('.tcon');
	$('.tcon-search--xcross').click(function (){
		$('.b-header-element__input').toggle('slow');
	});

// fullpage init

   $('#fullpage').fullpage({
      anchors: ['sec1', 'sec2', 'sec3', 'sec4', 'sec5', 'sec6', 'sec-footer'],
      menu: '#menu',
      scrollBar: true,
      responsiveWidth: 480,
      
     // http://jsfiddle.net/photous/qn084vmn/
   });

// pictures sorting	http://isotope.metafizzy.co
	var $grid = $('.b-gallery__grid').isotope({
		itemSelector: '.b-gallery__item',
		masonry: {
			isFitWidth: true  
		}
	});
	$('#filter-button-group').on( 'click', 'li', function() {
	var filterValue = $(this).attr('data-filter');
	$grid.isotope({ filter: filterValue });	
	});
	// change is-checked class on buttons
	$('.b-gallery__nav').each( function( i, buttonGroup ) {
	  var $buttonGroup = $( buttonGroup );
	  $buttonGroup.on( 'click', 'li', function() {
		$buttonGroup.find('.b-gallery__btn_checked').removeClass('b-gallery__btn_checked');
		$( this ).addClass('b-gallery__btn_checked');
	  });
	});
});

Modernizr.load(
  {
    test : Modernizr.localstorage,
    nope : ['storage.min.js']
  }, {
    test : Modernizr.flexboxlegacy,
    nope : ['flexie.min.js']
  }
);
