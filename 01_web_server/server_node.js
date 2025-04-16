const { error } = require( 'console' );
const http = require( 'http' );
const { loadEnvFile } = require( 'process' );

const localHost = '127.0.0.1';

const port = 3000;

const server = http.createServer( ( req, res ) =>
{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    res.end("Hey there I have completed my response");
} );

server.listen(port,localHost,()=>{
    console.log(`server is opening at port http://${localHost}:${port}`)
    console.error();
});