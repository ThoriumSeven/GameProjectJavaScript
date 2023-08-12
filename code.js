// im creating a new game, this code is obsolete but im trying my best to do basic stuff
let myVar = 1;
// uncomment the code below for function loop. 
//setInterval (myMethod, 1000);
//setTimeout (myMethod, 6)
/*

function myMethod ()
{
myVar = ++myVar;
console.log(myVar)
}

*/

//making new stuffs
let myNum = 0;
setInterval (myFunction, 1000);
function myFunction ()
{
    let myStr = "Hello, ";
    const myPlace = "World >";
    myStr += myPlace;
    myNum = ++myNum;
    myStr += myNum
    console.log(myStr);
}