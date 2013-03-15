( function( $ ) {

    $.fn.foldout = function( args ) {

        this.each( function() {

            var $item 	= $( this ),
                img		= $item.children( 'img' ).attr( 'src' ),
                folds = $item.data('folds'),
                struct	= '';

            for (var i=0; i<folds+1; i++) {
                struct  +='<div class="slice slice-'+i+'">';
            }

            for (i=0; i<folds+1; i++) {
                struct	+='</div>';
            }

            var $struct = $( struct );

            $item.addClass('slices').find( 'img' ).remove().end().append( $struct ).find( 'div.slice' ).css( 'background-image', 'url(' + img + ')' ).prepend( $( '<span class="overlay" ></span>' ) );

        });

    };

} )( jQuery );