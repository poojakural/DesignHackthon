jQuery( document ).ready(function() {

load();
jQuery('.grid-structure li').hover(
       function(){ jQuery(this).addClass('hover-effect') },
       function(){ jQuery(this).removeClass('hover-effect') }
)
});


function load(){
	jQuery('.menu').click(function(){
		jQuery('.mobile-show-menu').toggle();
	});
}

