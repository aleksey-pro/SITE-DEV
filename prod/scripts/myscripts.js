$(document).ready(function() {	
// transformicons init	
	transformicons.add('.tcon');
	$('.tcon-search--xcross').click(function (){
		$('.b-header-element__input').toggle('slow');
	});

// color of icons on hover	
	$('.b-activities__icon').hover (
	function(){
	$(this).toggleClass('b-activities__icon_active');
	$(this).find('.icon-svg path').toggleClass('icon-svg_active');
	});

// fullpage init	
    $('#fullpage').fullpage();	

// pictures sorting	http://isotope.metafizzy.co
	var $grid = $('.b-gallery__grid').isotope({
		itemSelector: '.b-gallery__item',
		masonry: {
			isFitWidth: true  
		}
	});
	$('.filter-button-group').on( 'click', 'li', function() {
	var filterValue = $(this).attr('data-filter');
	$grid.isotope({ filter: filterValue });	
	});	
	// change is-checked class on buttons
	$('.b-gallery__nav').each( function( i, buttonGroup ) {
	  var $buttonGroup = $( buttonGroup );
	  $buttonGroup.on( 'click', 'button', function() {
		$buttonGroup.find('.is-checked').removeClass('is-checked');
		$( this ).addClass('is-checked');
	  });
	});
	
});

//# sourceMappingURL=myscripts.js.map
