var readline=require('readline');
var utility= require('../utility/algoutility');
var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function binary()
{
    read.question("Enter the number ",function(n){
        var a=parseInt(n)
        utility.binary(read,a);
        read.close();
 
        
});
}
binary();
