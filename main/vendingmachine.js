var readline=require('readline');
var utility= require('../utility/algoutility');
var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function vendingmachine()
{
    read.question("Enter the amount $ ",function(amount){
        var a=parseInt(amount)
        utility.vendingmachine(a);
        read.close();
 
        
});
}
vendingmachine();
