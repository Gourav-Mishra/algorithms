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
    
        read.question("Enter the maxNumber: ",function(maxNumber){
        utility.primepalindrome(maxNumber)
        read.close();
    });
        

}
primepalindrome();
