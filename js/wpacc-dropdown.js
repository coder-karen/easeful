/*
 This file adds JavaScript to dropdown menus

 @package      Easeful
 @author       Rian Rietveld
 @author       Karen Attfield
 @license      GPL-2.0+
 @link         http://genesis-accessible.org/
*/

( function( $ ) {

	$( '.menu li' ).hover(
		function(){$(this).addClass( "wpacc-hover" );},
		function(){$(this).delay( '250' ).removeClass( "wpacc-hover" );}
	);

	$( '.menu li a' ).on( 'focus blur',
		function(){$(this).parents( ".menu-item" ).toggleClass( "wpacc-hover" );}
	);

	}

	( jQuery )

);
