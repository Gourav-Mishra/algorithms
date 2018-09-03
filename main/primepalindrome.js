var readline=require('readline');
var utility= require('../utility/algoutility');
var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function primepalindrome()
{
    
    read.question("Enter the minNumber ",function(minNumber){
        read.question("Enter the maxNumber: ",function(maxNumber){
            var a=parseInt(minNumber);
            var b=parseInt(maxNumber);
        utility.primepalindrome(a,b);
        read.close();
    });
        

});
}
primepalindrome();

