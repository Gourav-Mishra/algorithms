var readline=require('readline');
var utility= require('../utility/algoutility');
var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function squareroot()
{
    read.question("Enter the number of which tou need Square root:  ",function(c){
    utility.squareroot(c)
       read.close();
        
});
}
squareroot();
