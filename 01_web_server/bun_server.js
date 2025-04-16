import { serve } from 'bun'
serve(
    {
        fetch ( request )
        {
            if ( this.url.pathname === '/' )
            {
                return new Response( 'Hi I am a bun server', { status: 200 } );
            }
            else if ( this.url.pathname === '/about' )
            {
                return new Response( 'Hi I am another server', { status: 200 } );
            }
            else
            {
                return new Response( '404 Error not found ', { status: 404 } );
            }
        },
        /*  where we want to run the server then we will write port and hostname after fetching response  */

        port:3000,
        hostname:'localhost'
    }
)