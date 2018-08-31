var readline=require('readline');
var utility= require('../utility/algoutility');
var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);

function temperature()
{
    read.question("enter 1 to convert celsius to Farhenite and 2 to convert vice-versa: ",function(choice){
        utility.temperature(read,choice);
        
    })
}
temperature();