$(function() {
        $( '.toggle-button' ).on( 'click', function() {
            // À décommenter si tu veux masquer toutes les autres div
            // $( '.togglable' ).not( this.getAttribute( 'data-target' ) ).hide( 'slow' );

            $( this.getAttribute( 'data-target' ) ).toggle( 'slow' );
        });
    });
