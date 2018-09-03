var utility= require('../utility/algoutility');
var readlinesync=require('readline-sync');
var value=process.argv[2];
console.log('\n\n Think of a number between 0 and '+value);
console.log('\n follow the instructions');
utility.findNumber(readlinesync,value);