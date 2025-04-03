const fs = require( 'fs' );
const filepath = './tasks.json';

const addTask=(task)=>{
    
}


const commond = process.argv[ 2 ];
const argument= process.argv[ 3 ];



if ( commond === "add" )
{
    addTask( argument );
}
else if ( commond === "list" )
{
    listTask();
}
else if ( commond === "remove" )
{
    removeTask( parseInt( argument ) );
}
else
{
    console.log( "commonad not found !" );
}