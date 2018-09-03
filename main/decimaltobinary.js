var readline=require('readline');
var utility= require('../utility/algoutility');
var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function decimaltobinary()
{
        read.question("Enter the the number :",function(number){
            var a=parseInt(number);
            utility.decimaltobinary(a);
            read.close();        
});
}
decimaltobinary();
